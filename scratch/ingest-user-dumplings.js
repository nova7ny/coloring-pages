const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');
const { execSync } = require('child_process');

const BRAIN_DIR = 'C:\\Users\\Jose\\.gemini\\antigravity\\brain\\42ce07a1-a73c-41e2-98a4-f375a810d8b2';
const CONTENT_DIR = path.join(__dirname, '../public/content/kawaii');

const sourceJpg = path.join(BRAIN_DIR, 'media__1781030507452.jpg');
const sourcePng = path.join(BRAIN_DIR, 'media__1781030507453.png');

const page1Dir = path.join(CONTENT_DIR, 'happy-steaming-dumpling');
const page2Dir = path.join(CONTENT_DIR, 'happy-dumpling-friends');

function generatePDF(imagePath, pdfPath) {
  return new Promise((resolve, reject) => {
    try {
      const margin = 4;
      const doc = new PDFDocument({
        size: 'A4',
        margins: { top: margin, bottom: margin, left: margin, right: margin },
        autoFirstPage: true
      });

      const stream = fs.createWriteStream(pdfPath);
      doc.pipe(stream);

      const printWidth = doc.page.width - margin * 2;
      const printHeight = doc.page.height - margin * 2;

      doc.image(imagePath, margin, margin, {
        fit: [printWidth, printHeight],
        align: 'center',
        valign: 'center'
      });

      doc.end();
      stream.on('finish', resolve);
      stream.on('error', reject);
    } catch (err) {
      reject(err);
    }
  });
}

async function main() {
  console.log('=== Ingesting Cute Dumpling Pages ===');

  // Create directories
  fs.mkdirSync(page1Dir, { recursive: true });
  fs.mkdirSync(page2Dir, { recursive: true });

  const destImg1 = path.join(page1Dir, 'image.png');
  const destPdf1 = path.join(page1Dir, 'printable.pdf');

  const destImg2 = path.join(page2Dir, 'image.png');
  const destPdf2 = path.join(page2Dir, 'printable.pdf');

  // 1. Convert JPG to PNG for Page 1
  console.log(`Converting ${sourceJpg} to PNG at ${destImg1}...`);
  const psCommand = `powershell -Command "Add-Type -AssemblyName System.Drawing; [System.Drawing.Image]::FromFile('${sourceJpg}').Save('${destImg1}', [System.Drawing.Imaging.ImageFormat]::Png)"`;
  execSync(psCommand);
  console.log('Page 1 image conversion done.');

  // 2. Copy PNG for Page 2
  console.log(`Copying ${sourcePng} to ${destImg2}...`);
  fs.copyFileSync(sourcePng, destImg2);
  console.log('Page 2 image copy done.');

  // 3. Generate PDFs
  console.log('Generating PDF for Page 1...');
  await generatePDF(destImg1, destPdf1);
  console.log('Page 1 PDF generated.');

  console.log('Generating PDF for Page 2...');
  await generatePDF(destImg2, destPdf2);
  console.log('Page 2 PDF generated.');

  // 4. Write metadata.json
  const metadata1 = {
    id: "happy-steaming-dumpling",
    title: "Happy Steaming Dumpling Coloring Page",
    category: "Cute & Kawaii",
    subcategory: "Smiling Food",
    tags: ["kawaii", "dumpling", "steamer", "dim sum", "cute", "food"],
    seoTitle: "Happy Steaming Dumpling Cute Kawaii Coloring Page - Free PDF",
    seoDescription: "Download this adorable happy steaming dumpling coloring page. Perfect for kids, featuring a cute dim sum character in a bamboo steamer. Free printable PDF.",
    difficulty: "Easy",
    author: "Antigravity Agent"
  };

  const metadata2 = {
    id: "happy-dumpling-friends",
    title: "Happy Dumpling Friends Coloring Page",
    category: "Cute & Kawaii",
    subcategory: "Smiling Food",
    tags: ["kawaii", "dumpling", "friends", "dim sum", "cute", "food"],
    seoTitle: "Happy Dumpling Friends Cute Kawaii Coloring Page - Free PDF",
    seoDescription: "Download this cute happy dumpling friends coloring page. Features a plate of adorable smiling dim sum dumplings. Free printable PDF.",
    difficulty: "Easy",
    author: "Antigravity Agent"
  };

  fs.writeFileSync(path.join(page1Dir, 'metadata.json'), JSON.stringify(metadata1, null, 2), 'utf8');
  fs.writeFileSync(path.join(page2Dir, 'metadata.json'), JSON.stringify(metadata2, null, 2), 'utf8');
  console.log('Metadata files written.');

  console.log('=== Ingestion Complete! ===');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
