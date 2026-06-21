const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');
const jpeg = require('jpeg-js');

const CONTENT_DIR = path.join(__dirname, '../public/content');

// Helper to check if a single file is grayscale
function checkImageGrayscale(filePath, threshold = 20, maxColorPixelPercentage = 0.05) {
  return new Promise((resolve) => {
    try {
      const buffer = fs.readFileSync(filePath);
      let width, height, data;

      // Detect format based on signature
      if (buffer[0] === 0xff && buffer[1] === 0xd8) {
        // JPEG format
        const rawImageData = jpeg.decode(buffer, { useTArray: true });
        width = rawImageData.width;
        height = rawImageData.height;
        data = rawImageData.data;
      } else if (buffer[0] === 0x89 && buffer[1] === 0x50) {
        // PNG format
        const png = PNG.sync.read(buffer);
        width = png.width;
        height = png.height;
        data = png.data;
      } else {
        return resolve({
          passed: false,
          error: 'Unsupported image format (neither PNG nor JPEG)'
        });
      }

      let colorPixels = 0;
      const totalPixels = width * height;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);

        if (max - min > threshold) {
          colorPixels++;
        }
      }

      const percentage = (colorPixels / totalPixels) * 100;
      const passed = percentage <= maxColorPixelPercentage;
      resolve({
        passed,
        percentage,
        colorPixels,
        totalPixels
      });
    } catch (err) {
      resolve({
        passed: false,
        error: err.message
      });
    }
  });
}

async function main() {
  console.log('=== Scanning Catalog for Colored Images ===');
  
  if (!fs.existsSync(CONTENT_DIR)) {
    console.error('Content directory not found!');
    process.exit(1);
  }

  const categories = fs.readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  const imagesToVerify = [];

  for (const catId of categories) {
    const catPath = path.join(CONTENT_DIR, catId);
    const pages = fs.readdirSync(catPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    for (const pageId of pages) {
      const pagePath = path.join(catPath, pageId);
      const imagePath = path.join(pagePath, 'image.png');
      const markerPath = path.join(pagePath, '.is_placeholder');

      // Only check fully generated pages (no .is_placeholder)
      if (fs.existsSync(imagePath) && !fs.existsSync(markerPath)) {
        const size = fs.statSync(imagePath).size;
        if (size > 1000) {
          imagesToVerify.push({
            id: pageId,
            category: catId,
            path: imagePath
          });
        }
      }
    }
  }

  console.log(`Found ${imagesToVerify.length} active images to verify.`);

  let failedCount = 0;
  for (const img of imagesToVerify) {
    const res = await checkImageGrayscale(img.path);
    if (!res.passed) {
      failedCount++;
      if (res.error) {
        console.error(`❌ [ERROR] ${img.category}/${img.id}: Failed to parse image - ${res.error}`);
      } else {
        console.error(`❌ [FAILED] ${img.category}/${img.id}: Contains color! ${res.colorPixels}/${res.totalPixels} color pixels (${res.percentage.toFixed(4)}%)`);
      }
    }
  }

  if (failedCount > 0) {
    console.error(`\nVerification FAILED: Found ${failedCount} image(s) with color.`);
    process.exit(1);
  } else {
    console.log('\nVerification PASSED: All active catalog images are strictly black & white.');
    process.exit(0);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
