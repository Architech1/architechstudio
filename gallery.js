// gallery.js - Minimalist Image Grid Lightbox (auto-loads every image from gallery-images/)
document.addEventListener('DOMContentLoaded', () => {
  const DIR = 'gallery-images/';
  const EXT = /\.(jpe?g|png|webp|avif|gif|svg)$/i;

  // Fallback pattern probing (used only if the folder cannot be listed)
  const PREFIXES = ['alcove_img_', '']; // alcove_img_1.jpg ... or 1.jpg ...
  const PROBE_EXTS = ['jpg', 'jpeg', 'png', 'webp', 'avif', 'gif'];
  const MAX_NUMBER = 300;
  const STOP_AFTER_MISSES = 10; // gaps like 16,17 / 20,21 are fine

  const grid = document.getElementById('minimalGrid');
  const lightbox = document.getElementById('minimalLightbox');
  const lbImg = document.getElementById('lbImg');
  const lbClose = document.getElementById('lbClose');
  const lbPrev = document.getElementById('lbPrev');
  const lbNext = document.getElementById('lbNext');

  let images = [];
  let currentIndex = 0;

  /* ---------- 1. find the images ---------- */
  const byName = (a, b) => a.localeCompare(b, undefined, { numeric: true });

  // Option A: optional gallery-images/gallery.json  (["a.jpg","b.png", ...])
  function fromManifest() {
    return fetch(DIR + 'gallery.json', { cache: 'no-cache' })
      .then(r => { if (!r.ok) throw 0; return r.json(); })
      .then(list => {
        if (!Array.isArray(list) || !list.length) throw 0;
        return list.filter(f => EXT.test(f)).map(f => DIR + f);
      });
  }

  // Option B: the folder's directory listing (local servers, Apache, nginx autoindex...)
  function fromListing() {
    return fetch(DIR, { cache: 'no-cache' })
      .then(r => { if (!r.ok) throw 0; return r.text(); })
      .then(html => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        const files = [...new Set(
          [...doc.querySelectorAll('a[href]')]
            .map(a => a.getAttribute('href').split(/[?#]/)[0].split('/').pop())
            .filter(f => EXT.test(f))
        )].sort(byName);
        if (!files.length) throw 0;
        return files.map(f => DIR + f);
      });
  }

  // Option C: probe numbered names (alcove_img_1.jpg, alcove_img_2.png, 3.jpg ...)
  function probe(src) {
    return new Promise(res => {
      const i = new Image();
      i.onload = () => res(src);
      i.onerror = () => res(null);
      i.src = src;
    });
  }
  async function fromProbing() {
    const found = [];
    let misses = 0;
    for (let n = 1; n <= MAX_NUMBER && misses < STOP_AFTER_MISSES; n++) {
      const tries = [];
      PREFIXES.forEach(p => PROBE_EXTS.forEach(e => tries.push(probe(`${DIR}${p}${n}.${e}`))));
      const hit = (await Promise.all(tries)).find(Boolean);
      if (hit) { found.push(hit); misses = 0; } else { misses++; }
    }
    if (!found.length) throw 0;
    return found;
  }

  /* ---------- 2. build the grid ---------- */
  function buildGrid(srcs) {
    grid.textContent = '';
    srcs.forEach(src => {
      const item = document.createElement('div');
      item.className = 'grid-item';
      const img = document.createElement('img');
      img.src = src;
      img.alt = '';
      img.loading = 'lazy';
      img.addEventListener('error', () => item.remove()); // skip broken files
      item.appendChild(img);
      grid.appendChild(item);
    });
    setupLightbox();
    setupScrollAnimation();
  }

  /* ---------- 3. lightbox ---------- */
  function currentList() {
    return Array.from(grid.querySelectorAll('.grid-item img')).map(i => i.src);
  }

  function openLightbox(index) {
    images = currentList();
    if (!images.length) return;
    currentIndex = (index + images.length) % images.length;
    lbImg.src = images[currentIndex];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
  const nextImage = () => openLightbox(currentIndex + 1);
  const prevImage = () => openLightbox(currentIndex - 1);

  function setupLightbox() {
    grid.addEventListener('click', e => {
      const item = e.target.closest('.grid-item');
      if (!item) return;
      openLightbox(Array.from(grid.children).indexOf(item));
    });
  }

  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lbNext) lbNext.addEventListener('click', e => { e.stopPropagation(); nextImage(); });
  if (lbPrev) lbPrev.addEventListener('click', e => { e.stopPropagation(); prevImage(); });

  if (lightbox) {
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox || e.target.classList.contains('lightbox-image-wrapper')) {
        closeLightbox();
      }
    });
  }

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  });

  /* ---------- 4. scroll animation ---------- */
  function setupScrollAnimation() {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { root: null, rootMargin: '0px 0px -50px 0px', threshold: 0.1 });

    grid.querySelectorAll('.grid-item').forEach((item, idx) => {
      // staggered delay based on column (roughly 3 columns)
      item.style.transitionDelay = `${(idx % 3) * 100}ms, ${(idx % 3) * 100}ms, 0s, 0s`;
      observer.observe(item);
      // clear delay after the animation so hover effects are instant
      item.addEventListener('transitionend', function (e) {
        if (e.propertyName === 'opacity' || e.propertyName === 'transform') {
          this.style.transitionDelay = '0s';
        }
      });
    });
  }

  /* ---------- go ---------- */
  fromManifest().catch(fromListing).catch(fromProbing)
    .then(buildGrid)
    .catch(() => console.warn('gallery.js: no images found in ' + DIR));
});
