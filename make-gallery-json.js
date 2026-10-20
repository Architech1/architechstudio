// Usage: node make-gallery-json.js   (run in the folder that contains gallery-images/)
// Scans gallery-images/ and writes gallery-images/gallery.json with EVERY image, any filename.
const fs = require('fs'), path = require('path');
const dir = path.join(__dirname, 'gallery-images');
const files = fs.readdirSync(dir)
  .filter(f => /\.(jpe?g|png|webp|avif|gif|svg)$/i.test(f))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
fs.writeFileSync(path.join(dir, 'gallery.json'), JSON.stringify(files, null, 2));
console.log(`gallery.json written with ${files.length} images`);
