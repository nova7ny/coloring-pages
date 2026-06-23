const fs = require('fs');
const path = require('path');

const ARTIFACT_DIR = 'C:\\Users\\Jose\\.gemini\\antigravity\\brain\\42ce07a1-a73c-41e2-98a4-f375a810d8b2';
const CONTENT_DIR = path.join(__dirname, '../public/content/dinosaurs');

const batch = [
  { id: 'medium-therizinosaurus', file: 'medium_therizinosaurus_1782209350092.png' },
  { id: 'medium-woolly-mammoth', file: 'medium_woolly_mammoth_1782209359195.png' }
];

console.log('=== Starting Dinosaur Batch 9 Deployment ===');

for (const item of batch) {
  const srcPath = path.join(ARTIFACT_DIR, item.file);
  const destDir = path.join(CONTENT_DIR, item.id);
  const destImagePath = path.join(destDir, 'image.png');
  const destPdfPath = path.join(destDir, 'printable.pdf');
  const destMarkerPath = path.join(destDir, '.is_placeholder');

  console.log(`Deploying [${item.id}]...`);
  console.log(`  Source: ${srcPath}`);
  console.log(`  Dest Image: ${destImagePath}`);

  try {
    if (!fs.existsSync(srcPath)) {
      console.error(`  ❌ Source file does not exist: ${srcPath}`);
      continue;
    }

    // Ensure destination directory exists
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    // Copy image
    fs.copyFileSync(srcPath, destImagePath);
    console.log(`  ✅ Image copied successfully.`);

    // Write mock PDF
    fs.writeFileSync(destPdfPath, "MOCK PDF CONTENT\n", 'utf8');
    console.log(`  ✅ Mock PDF written.`);

    // Delete placeholder marker if exists
    if (fs.existsSync(destMarkerPath)) {
      fs.unlinkSync(destMarkerPath);
      console.log(`  ✅ Removed .is_placeholder marker.`);
    }

  } catch (err) {
    console.error(`  ❌ Error deploying ${item.id}:`, err.message);
  }
}

console.log('=== Dinosaur Batch 9 Deployment Finished ===');
