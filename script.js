(function () {
  "use strict";

  let resizeTimeout;

  /* ---------- "VIEW ON INSTAGRAM" button: always directly under the video cards ----------
     Single source of truth (also called by the inline carousel script after it lays the cards out).
     Measures the real bottom edge of the video cards on screen and moves the button so its top
     edge is exactly CTA_GAP below it. Works at any scale because the shift is converted back to
     the design's own (unscaled) pixels. */
  var CTA_GAP = { mobile: 28, desktop: 40 };   // design px between the cards and the button
  function positionInstaCta() {
    var isMobile = window.innerWidth <= 768;
    var wrapper = document.querySelector(isMobile ? ".responsive-mobile" : ".responsive-desktop");
    if (!wrapper) return;
    var carousel = wrapper.querySelector("#Region_Media_carousel");
    var cta = wrapper.querySelector("#Mention_Widget");
    if (!carousel || !cta) return;

    var wr = wrapper.getBoundingClientRect();
    var scale = wrapper.offsetWidth ? wr.width / wrapper.offsetWidth : 1;
    if (!scale || !isFinite(scale)) scale = 1;

    // real bottom of the cards (falls back to the carousel box if no cards are measurable)
    var bottom = -Infinity;
    var firstTrack = carousel.querySelector(".video-track");
    var cards = firstTrack ? firstTrack.children : [];
    for (var i = 0; i < cards.length; i++) {
      var r = cards[i].getBoundingClientRect();
      if (r.width > 0 && r.height > 0) bottom = Math.max(bottom, r.bottom);
    }
    if (!isFinite(bottom)) {
      var cr = carousel.getBoundingClientRect();
      if (!cr.height) return;
      bottom = cr.bottom;
    }

    // measure the button without any previous shift, then place it
    cta.style.removeProperty("translate");
    var ctaTop = cta.getBoundingClientRect().top;
    var target = bottom + (isMobile ? CTA_GAP.mobile : CTA_GAP.desktop) * scale;
    var delta = (target - ctaTop) / scale;
    if (Math.abs(delta) > 0.25) cta.style.setProperty("translate", "0 " + delta.toFixed(2) + "px");
  }
  window.__positionInstaCta = positionInstaCta;
  function fitExactDesign() {
    if (window.__vcResetSpacing) window.__vcResetSpacing();   // undo spacing tweaks first; they are re-applied after the re-fit
    var mobile = document.querySelector(".responsive-mobile");
    var desktop = document.querySelector(".responsive-desktop");
    var isMobile = window.innerWidth <= 768;
    var wrapper = isMobile ? mobile : desktop;
    if (mobile) mobile.style.display = isMobile ? 'block' : 'none';
    if (desktop) desktop.style.display = !isMobile ? 'block' : 'none';
    if (!wrapper) return;

    var baseWidth = isMobile ? 390 : 1920;
    var scale = window.innerWidth / baseWidth;   // always fill the screen width (also above 390 / 1920)

    wrapper.style.transform = "scale(" + scale + ") translateZ(0)";
    wrapper.style.transformOrigin = "top center";
    wrapper.style.width = baseWidth + "px";
    wrapper.style.willChange = "transform";

    var root = isMobile
      ? wrapper.querySelector("#__x2d_body")
      : wrapper.querySelector("#__0") || wrapper.firstElementChild;

    if (root) {
        root.style.overflow = "visible";
    }

    if (isMobile) {
        var heroBg = wrapper.querySelector("#home-image-slider-1");
        if (heroBg) {
            var currentHeight = 702;
            // visual viewport height = what is actually visible (handles the mobile address bar)
            var vh = Math.max(window.innerHeight, (window.visualViewport ? window.visualViewport.height : 0));
            // real on-screen scale of the 390px canvas (style.css also applies `zoom`, so this
            // can differ from innerWidth/390 and made the hero too short -> white strip)
            var effScale = wrapper.getBoundingClientRect().width / 390;
            if (!effScale || !isFinite(effScale)) effScale = scale;
            var targetHeight = Math.ceil(vh / effScale) + 2;   // +2px: no sub-pixel seam
            var diff = Math.max(0, targetHeight - currentHeight);

            var els = wrapper.querySelectorAll('#__x2d_body > *:not(#navbar-container), #Container > *:not(#home-image-slider-1)');

            // 1) remember every element's original top before anything is moved
            els.forEach(function(el) {
                if (!el.dataset.origTop) {
                    var topStr = window.getComputedStyle(el).top;
                    el.dataset.origTop = (topStr && topStr !== 'auto') ? parseFloat(topStr) : 0;
                }
            });

            // 2) the real bottom of the hero = where the next section (#about_section) starts
            var heroBottom = currentHeight;
            var about = wrapper.querySelector('#about_section');
            if (about && about.dataset.origTop) {
                var aTop = parseFloat(about.dataset.origTop);
                if (isFinite(aTop) && aTop >= currentHeight) heroBottom = aTop;
            }

            // 3) hero fills the viewport AND meets the next section: no white gap
            var heroHeight = heroBottom + diff;
            heroBg.style.height = heroHeight + "px";
            var heroImg = heroBg.querySelector("#Image");
            if (heroImg) heroImg.style.height = heroHeight + "px";

            // 4) shift everything below the fold by the same amount
            els.forEach(function(el) {
                var origTop = parseFloat(el.dataset.origTop);
                if (origTop >= 600) {
                    el.style.top = (origTop + diff) + "px";
                } else if (origTop >= 300) {
                    el.style.top = (origTop + diff / 2) + "px";
                }
            });

            var rootBody = wrapper.querySelector('#__x2d_body');
            var containerDiv = wrapper.querySelector('#Container');
            if (rootBody) {
                if (!rootBody.dataset.origHeight) rootBody.dataset.origHeight = parseFloat(window.getComputedStyle(rootBody).height) || 8482;
                var newBodyHeight = parseFloat(rootBody.dataset.origHeight) + diff;
                rootBody.style.minHeight = newBodyHeight + "px";
                rootBody.style.maxHeight = newBodyHeight + "px";
                rootBody.style.height = newBodyHeight + "px";
            }
            if (containerDiv) {
                if (!containerDiv.dataset.origHeight) containerDiv.dataset.origHeight = parseFloat(window.getComputedStyle(containerDiv).height) || 8695;
                containerDiv.style.height = (parseFloat(containerDiv.dataset.origHeight) + diff) + "px";
            }
        }
    }

    positionInstaCta();

    var baseHeight = root ? root.getBoundingClientRect().height / scale : wrapper.scrollHeight;
    wrapper.style.height = (baseHeight * scale) + "px";
    wrapper.style.marginBottom = "0";
    document.body.style.overflowX = "hidden";
  }

  function debouncedFit() {
      if(resizeTimeout) cancelAnimationFrame(resizeTimeout);
      resizeTimeout = requestAnimationFrame(fitExactDesign);
  }

  window.addEventListener("resize", debouncedFit, { passive: true });
  window.addEventListener("orientationchange", debouncedFit, { passive: true });
  if (window.visualViewport) window.visualViewport.addEventListener("resize", debouncedFit, { passive: true });
  document.addEventListener("DOMContentLoaded", fitExactDesign);
  window.addEventListener("load", function () { fitExactDesign(); setTimeout(positionInstaCta, 900); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(positionInstaCta);
  fitExactDesign();
})();

/* Founder & Co-Founder Card Slider Animation */
function initFounderCardSlider() {
  const cardSliders = document.querySelectorAll('.founder-card-slider');

  cardSliders.forEach(slider => {
    const slides = slider.querySelectorAll('.founder-slide');
    if (slides.length < 2) return;

    let currentIndex = 0;
    let autoPlayTimer = null;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });
      currentIndex = index;
    }

    function nextSlide() {
      const nextIndex = (currentIndex + 1) % slides.length;
      showSlide(nextIndex);
    }

    function startAutoPlay() {
      stopAutoPlay();
      autoPlayTimer = setInterval(nextSlide, 4500);
    }

    function stopAutoPlay() {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
      }
    }

    slider.addEventListener('click', () => {
      nextSlide();
      startAutoPlay();
    });

    slider.addEventListener('mouseenter', stopAutoPlay);
    slider.addEventListener('mouseleave', startAutoPlay);

    startAutoPlay();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFounderCardSlider);
} else {
  initFounderCardSlider();
}
function initCustomSlideshows() {
  const slideshows = document.querySelectorAll('.custom-slideshow');
  slideshows.forEach(show => {
    let imgs = show.querySelectorAll('.slide');
    if (imgs.length === 0) return;
    let idx = 0;
    setInterval(() => {
      imgs[idx].style.opacity = '0';
      idx = (idx + 1) % imgs.length;
      imgs[idx].style.opacity = '1';
    }, 3500);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCustomSlideshows);
} else {
  initCustomSlideshows();
}

// Handle Navbar Navigation for duplicate IDs (mobile vs desktop logic)
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('#navbar-container a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            const isMobile = window.innerWidth <= 768;
            const activeWrapper = isMobile 
                ? document.querySelector('.responsive-mobile') 
                : document.querySelector('.responsive-desktop');

            if (targetId === '#') {
                const scrollRoot = isMobile 
                    ? activeWrapper.querySelector('#__x2d_body') 
                    : (activeWrapper.querySelector('#__0') || activeWrapper.querySelector('#__x2d_body') || activeWrapper.firstElementChild);
                if (scrollRoot && typeof scrollRoot.scrollTo === 'function') {
                    scrollRoot.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
                return;
            }
            
            if (activeWrapper) {
                const target = activeWrapper.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
});

function initMainGalleryScrollAnimation() {
  const galleryItems = document.querySelectorAll('#Group_45 > div, #Group_42 > div, #Group_43 > div, #Group_44 > div, #Group_47 > div');
  
  if (galleryItems.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  galleryItems.forEach((item, idx) => {
    item.classList.add('scroll-anim-item');
    item.style.transitionDelay = `${(idx % 4) * 100}ms`;
    observer.observe(item);
  });

  galleryItems.forEach(item => {
    item.addEventListener('transitionend', function(e) {
      if (e.propertyName === 'opacity' || e.propertyName === 'transform') {
        this.style.transitionDelay = '0s';
      }
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMainGalleryScrollAnimation);
} else {
  initMainGalleryScrollAnimation();
}