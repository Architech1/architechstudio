// Usage:  node generate-brands.js
// Scans images/brands/ and writes images/brands/brands.json (list of every image file).
// Run it whenever you add, remove or rename a logo (or before every deploy).
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'images', 'brands');
const files = fs.readdirSync(dir)
  .filter(f => /\.(svg|png|jpe?g|webp|gif|avif)$/i.test(f))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

fs.writeFileSync(path.join(dir, 'brands.json'), JSON.stringify(files, null, 2));
console.log(`brands.json written with ${files.length} image(s):`);
files.forEach(f => console.log('  ' + f));
