// gallery.js - Ultra-fast image grid + lightbox with skeleton loading
// Tricks used: instant skeletons, cached file list (stale-while-revalidate), parallel discovery,
// HEAD probing (no image downloads while searching), fetchpriority for above-the-fold images,
// async decode + fade-in, hover/neighbor prefetch for the lightbox.
document.addEventListener('DOMContentLoaded', () => {
  const DIR = 'gallery-images/';
  const EXT = /\.(jpe?g|png|webp|avif|gif|svg)$/i;
  const PREFIXES = ['alcove_img_', 'Meera_img-', 'Nesta-Apartment_img-', '11-M-House_img-', 'image', '']; // fallback names only: alcove_img_1.jpg / 1.jpg
  const PROBE_EXTS = ['jpg', 'jpeg', 'png', 'webp', 'avif', 'gif', 'JPG', 'JPEG', 'PNG', 'WEBP'];
  const MAX_NUMBER = 500;
  const CHUNK = 8;             // numbers probed in parallel
  const EAGER_COUNT = 6;       // first images load with high priority
  const SKELETON_COUNT = 12;
  const CACHE_KEY = 'gallery:list:v3';

  const grid = document.getElementById('minimalGrid');
  const lightbox = document.getElementById('minimalLightbox');
  const lbImg = document.getElementById('lbImg');
  const lbClose = document.getElementById('lbClose');
  const lbPrev = document.getElementById('lbPrev');
  const lbNext = document.getElementById('lbNext');

  let images = [];
  let currentIndex = 0;
  const prefetched = new Set();

  const byName = (a, b) => a.localeCompare(b, undefined, { numeric: true });

  /* ---------- 0. instant skeletons (shown before anything is fetched) ---------- */
  function showSkeletons(n) {
    const frag = document.createDocumentFragment();
    for (let i = 0; i < n; i++) {
      const s = document.createElement('div');
      s.className = 'grid-item skeleton visible';
      frag.appendChild(s);
    }
    grid.textContent = '';
    grid.appendChild(frag);
  }

  /* ---------- 1. cache (stale-while-revalidate) ---------- */
  const readCache = () => {
    try { const l = JSON.parse(localStorage.getItem(CACHE_KEY)); return Array.isArray(l) && l.length ? l : null; }
    catch { return null; }
  };
  const writeCache = list => { try { localStorage.setItem(CACHE_KEY, JSON.stringify(list)); } catch {} };

  /* ---------- 2. discovery ---------- */
  function fromManifest() {
    return fetch(DIR + 'gallery.json', { cache: 'no-cache' })
      .then(r => { if (!r.ok) throw 0; return r.json(); })
      .then(list => {
        if (!Array.isArray(list) || !list.length) throw 0;
        return list.filter(f => EXT.test(f)).map(f => DIR + f);
      });
  }

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

  function imgProbe(src) {
    return new Promise(res => {
      const i = new Image();
      i.onload = () => res(src);
      i.onerror = () => res(null);
      i.src = src;
    });
  }

  // HEAD request first (cheap). If the host rejects HEAD or sends an odd content-type, fall back to <img>.
  async function exists(src) {
    try {
      const r = await fetch(src, { method: 'HEAD' });
      if (r.status === 404) return null;
      const ct = r.headers.get('content-type') || '';
      if (r.ok && ct.startsWith('image')) return src;
      if (r.ok && ct.includes('html')) return null; // SPA fallback page, not an image
    } catch {}
    return imgProbe(src);
  }

  // Last resort only (no listing, no manifest): numbered names like alcove_img_1.jpg or 1.png
  async function fromProbing() {
    const found = [];
    let emptyChunks = 0;
    for (let start = 0; start <= MAX_NUMBER && emptyChunks < 3; start += CHUNK) {
      const nums = Array.from({ length: CHUNK }, (_, i) => start + i);
      const results = await Promise.all(
        nums.flatMap(n => PREFIXES.map(async p => (await Promise.all(PROBE_EXTS.map(e => exists(`${DIR}${p}${n}.${e}`)))).find(Boolean)))
      );
      const hits = results.filter(Boolean);
      found.push(...hits);
      emptyChunks = hits.length ? 0 : emptyChunks + 1;
    }
    if (!found.length) throw 0;
    return found;
  }

  // manifest and folder listing race each other; probing is the last resort
  const discover = () =>
    Promise.any([fromManifest(), fromListing()]).catch(fromProbing);

  /* ---------- 3. build the grid ---------- */
  function buildGrid(srcs) {
    const frag = document.createDocumentFragment();
    srcs.forEach((src, i) => {
      const item = document.createElement('div');
      item.className = 'grid-item loading';
      const img = document.createElement('img');
      img.alt = '';
      img.decoding = 'async';
      if (i < EAGER_COUNT) { img.loading = 'eager'; img.fetchPriority = 'high'; }
      else { img.loading = 'lazy'; img.fetchPriority = 'low'; }

      const reveal = () => {
        // decode off the main thread first so the fade-in never janks
        (img.decode ? img.decode().catch(() => {}) : Promise.resolve()).then(() => {
          img.classList.add('loaded');
          item.classList.remove('loading');
        });
      };
      img.addEventListener('load', reveal, { once: true });
      img.addEventListener('error', () => item.remove(), { once: true });
      img.src = src; // set src AFTER listeners are attached
      if (img.complete && img.naturalWidth) reveal(); // already cached

      item.appendChild(img);
      frag.appendChild(item);
    });
    grid.textContent = '';
    grid.appendChild(frag);
    setupScrollAnimation();
  }

  /* ---------- 4. lightbox ---------- */
  const currentList = () => Array.from(grid.querySelectorAll('.grid-item img')).map(i => i.src);

  function prefetch(src) {
    if (!src || prefetched.has(src)) return;
    prefetched.add(src);
    const i = new Image();
    i.decoding = 'async';
    i.src = src;
    i.decode && i.decode().catch(() => {});
  }

  function openLightbox(index) {
    images = currentList();
    if (!images.length) return;
    currentIndex = (index + images.length) % images.length;
    const src = images[currentIndex];
    lbImg.classList.remove('loaded');
    lbImg.onload = () => lbImg.classList.add('loaded');
    lbImg.src = src; // already in the HTTP cache from the grid = instant
    if (lbImg.complete) lbImg.classList.add('loaded');
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    // warm up neighbours so next/prev feel instant
    prefetch(images[(currentIndex + 1) % images.length]);
    prefetch(images[(currentIndex - 1 + images.length) % images.length]);
  }
  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
  const nextImage = () => openLightbox(currentIndex + 1);
  const prevImage = () => openLightbox(currentIndex - 1);

  // one delegated listener (never re-added when the grid rebuilds)
  const indexOfItem = item => Array.from(grid.querySelectorAll('.grid-item:not(.skeleton)')).indexOf(item);
  grid.addEventListener('click', e => {
    const item = e.target.closest('.grid-item');
    if (!item || item.classList.contains('skeleton')) return;
    openLightbox(indexOfItem(item));
  });
  // prefetch the full image the moment the pointer hovers a tile
  grid.addEventListener('pointerover', e => {
    const img = e.target.closest('.grid-item img');
    if (img) prefetch(img.src);
  });

  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lbNext) lbNext.addEventListener('click', e => { e.stopPropagation(); nextImage(); });
  if (lbPrev) lbPrev.addEventListener('click', e => { e.stopPropagation(); prevImage(); });
  if (lightbox) {
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox || e.target.classList.contains('lightbox-image-wrapper')) closeLightbox();
    });
  }
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  });

  /* ---------- 5. scroll animation ---------- */
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
      item.style.transitionDelay = `${(idx % 3) * 100}ms, ${(idx % 3) * 100}ms, 0s, 0s`;
      observer.observe(item);
      item.addEventListener('transitionend', function (e) {
        if (e.propertyName === 'opacity' || e.propertyName === 'transform') this.style.transitionDelay = '0s';
      });
    });
  }

  /* ---------- go ---------- */
  const cached = readCache();
  showSkeletons(cached ? Math.min(cached.length, 24) : SKELETON_COUNT);

  if (cached) buildGrid(cached); // instant paint on repeat visits

  discover()
    .then(fresh => {
      const changed = !cached || fresh.length !== cached.length || fresh.some((s, i) => s !== cached[i]);
      if (changed) buildGrid(fresh);
      writeCache(fresh);
    })
    .catch(() => {
      if (!cached) {
        grid.textContent = '';
        const msg = document.createElement('p');
        msg.style.cssText = 'grid-column:1/-1;text-align:center;padding:2rem;opacity:.7;font:14px system-ui,sans-serif';
        msg.textContent = 'No images found. Add gallery-images/gallery.json (run: node make-gallery-json.js) and open the site through a web server, not file://.';
        grid.appendChild(msg);
        console.warn('gallery.js: no images found in ' + DIR);
      }
    });
});
