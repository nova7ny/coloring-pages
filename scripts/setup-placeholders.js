/**
 * setup-placeholders.js
 *
 * One-time (and safe-to-rerun) migration script that:
 *  1. Scans every coloring page directory under public/content/
 *  2. For any page whose image.png is a stub (≤ 1000 bytes) OR is missing,
 *     replaces it with the branded coming-soon.png placeholder
 *  3. Creates a `.is_placeholder` marker file alongside image.png so the
 *     generate-next-batch scanner can reliably detect unfinished pages
 *     regardless of the image file size.
 *
 * Run with:  node scripts/setup-placeholders.js
 */

const fs   = require('fs');
const path = require('path');

const CONTENT_DIR        = path.join(__dirname, '../public/content');
const COMING_SOON_SRC    = path.join(__dirname, '../public/images/coming-soon.png');
const STUB_MAX_SIZE      = 1000; // bytes — anything this small is a stub text file

if (!fs.existsSync(COMING_SOON_SRC)) {
  console.error(`ERROR: coming-soon.png not found at ${COMING_SOON_SRC}`);
  console.error('Run the image generation step first, then re-run this script.');
  process.exit(1);
}

const comingSoonBuffer = fs.readFileSync(COMING_SOON_SRC);

let replaced  = 0;
let skipped   = 0;
let alreadyOk = 0;

const categories = fs.readdirSync(CONTENT_DIR, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

for (const catId of categories) {
  const catPath = path.join(CONTENT_DIR, catId);

  const pages = fs.readdirSync(catPath, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  for (const pageId of pages) {
    const pagePath    = path.join(catPath, pageId);
    const imagePath   = path.join(pagePath, 'image.png');
    const markerPath  = path.join(pagePath, '.is_placeholder');
    const metaPath    = path.join(pagePath, 'metadata.json');

    // Skip directories without a metadata.json (not a real coloring page)
    if (!fs.existsSync(metaPath)) {
      skipped++;
      continue;
    }

    const imageExists  = fs.existsSync(imagePath);
    const imageSize    = imageExists ? fs.statSync(imagePath).size : 0;
    const isStub       = !imageExists || imageSize <= STUB_MAX_SIZE;
    const hasMarker    = fs.existsSync(markerPath);

    if (isStub) {
      // Replace stub with the branded coming-soon placeholder
      fs.writeFileSync(imagePath, comingSoonBuffer);
      // Create the marker file
      fs.writeFileSync(markerPath, '');
      replaced++;
      console.log(`  [REPLACED] ${catId}/${pageId}`);
    } else if (!hasMarker) {
      // Image is real (large file) but marker is missing — page is complete, nothing to do
      alreadyOk++;
    } else {
      // Has marker and a real-sized image — still awaiting generation
      alreadyOk++;
    }
  }
}

console.log('\n=== Placeholder Setup Complete ===');
console.log(`  Replaced with coming-soon.png : ${replaced}`);
console.log(`  Already finished / skipped    : ${alreadyOk + skipped}`);
console.log(`  Total processed               : ${replaced + alreadyOk + skipped}`);
