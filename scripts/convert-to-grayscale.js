const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');
const jpeg = require('jpeg-js');

function convertImageToGrayscale(filePath) {
  try {
    const buffer = fs.readFileSync(filePath);
    let encodedBuffer;

    if (buffer[0] === 0xff && buffer[1] === 0xd8) {
      // JPEG format
      const rawImageData = jpeg.decode(buffer, { useTArray: true });
      const data = rawImageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const gray = Math.round(0.299 * r + 0.587 * g + 0.114 * b);
        data[i] = gray;
        data[i + 1] = gray;
        data[i + 2] = gray;
      }

      const encoded = jpeg.encode(rawImageData, 95);
      encodedBuffer = encoded.data;
    } else if (buffer[0] === 0x89 && buffer[1] === 0x50) {
      // PNG format
      const png = PNG.sync.read(buffer);
      const data = png.data;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const gray = Math.round(0.299 * r + 0.587 * g + 0.114 * b);
        data[i] = gray;
        data[i + 1] = gray;
        data[i + 2] = gray;
      }

      encodedBuffer = PNG.sync.write(png);
    } else {
      console.error(`Unsupported file format for ${filePath}`);
      return false;
    }

    fs.writeFileSync(filePath, encodedBuffer);
    console.log(`Successfully converted ${filePath} to grayscale.`);
    return true;
  } catch (err) {
    console.error(`Error converting ${filePath} to grayscale:`, err.message);
    return false;
  }
}

// If run from CLI with arguments
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.log('Usage: node scripts/convert-to-grayscale.js <imagePath1> <imagePath2> ...');
    process.exit(1);
  }
  let success = true;
  for (const file of args) {
    const ok = convertImageToGrayscale(path.resolve(file));
    if (!ok) success = false;
  }
  process.exit(success ? 0 : 1);
}

module.exports = { convertImageToGrayscale };
