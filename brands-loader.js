/* "Brands we use" marquee - loads numbered images from images/brands/
   Save your logos as:  1.png, 2.jpg, 3.png, 4.jpeg ... (any mix of extensions).
   No file list or build step needed - the loader finds them by number.

   Supported: png, jpg, jpeg, webp, svg, avif, gif   (up to MAX_NUMBER images)
*/
(function () {
  var DIR = 'images/brands/';
  var EXTS = ['png', 'jpg', 'jpeg', 'webp', 'svg', 'avif', 'gif'];
  var MAX_NUMBER = 40;     // highest number it will look for
  var STOP_AFTER_MISSES = 2; // stop after this many missing numbers in a row
  var MIN_CARDS = 10;      // repeat short lists so the marquee fills the width

  function probe(src) {
    return new Promise(function (resolve) {
      var img = new Image();
      img.onload = function () { resolve(src); };
      img.onerror = function () { resolve(null); };
      img.src = src;
    });
  }

  // For number n, try every extension at once; keep the first one in EXTS order that exists.
  function findImage(n) {
    return Promise.all(EXTS.map(function (e) { return probe(DIR + n + '.' + e); }))
      .then(function (r) { return r.filter(Boolean)[0] || null; });
  }

  function findAll() {
    var found = [];
    var misses = 0;
    function next(n) {
      if (n > MAX_NUMBER || misses >= STOP_AFTER_MISSES) return Promise.resolve(found);
      return findImage(n).then(function (src) {
        if (src) { found.push({ n: n, src: src }); misses = 0; } else { misses++; }
        return next(n + 1);
      });
    }
    return next(1);
  }

  function card(item) {
    var div = document.createElement('div');
    div.className = 'brand-logo-card';
    div.title = 'Brand ' + item.n;
    var img = document.createElement('img');
    img.src = item.src;
    img.alt = 'Brand ' + item.n;
    img.decoding = 'async';
    div.appendChild(img);
    return div;
  }

  function buildTrack(items, hidden) {
    var track = document.createElement('div');
    track.className = 'brands-track';
    if (hidden) track.setAttribute('aria-hidden', 'true');
    var list = items.slice();
    while (list.length < MIN_CARDS) list = list.concat(items);
    list.forEach(function (it) { track.appendChild(card(it)); });
    return track;
  }

  function render(items) {
    if (!items.length) {
      console.warn('brands-loader: no images found. Save them as ' + DIR + '1.png, ' + DIR + '2.jpg ...');
      return;
    }
    var tracks = document.querySelectorAll('.brands-marquee-track');
    for (var i = 0; i < tracks.length; i++) {
      tracks[i].textContent = '';
      tracks[i].appendChild(buildTrack(items, false));
      tracks[i].appendChild(buildTrack(items, true)); // duplicate row = seamless loop
    }
  }

  function init() { findAll().then(render); }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();