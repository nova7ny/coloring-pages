const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '../public/content');
const PLACEHOLDER_MAX_SIZE = 1000; // Small text placeholders (usually 19 bytes)

function getPrompt(page) {
  const diff = page.difficulty;
  const title = page.title.replace(' Coloring Page', '');

  if (diff === 'Easy') {
    return `Black and white coloring page for toddlers and young kids, extremely simple cartoon ${title}, very thick bold outer outlines, large empty coloring spaces, simple sparse cartoon background elements, clean white background, zero shading, zero fine details, zero textures, no text, no labels, no watermarks, no title, no words, no letters`;
  } else if (diff === 'Medium') {
    return `Black and white coloring page for kids and teens, clean line art of ${title}, standard line weight, moderate details and natural textures, clean white background, simple scenic background, zero shading, zero grayscale gradients, no text, no labels, no watermarks, no title, no words, no letters`;
  } else {
    return `Intricate black and white coloring page for adults, ultra-detailed ${title} with highly complex geometric patterns, fine lines, repeating mandala motifs, dense coloring canvas, full-bleed design, zero shading, pure white background, no text, no labels, no watermarks, no title, no words, no letters`;
  }
}

async function main() {
  console.log('=== Scan for Placeholder Pages ===');
  
  if (!fs.existsSync(CONTENT_DIR)) {
    console.error('Content directory not found!');
    process.exit(1);
  }

  const placeholderPages = [];

  const categories = fs.readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  for (const catId of categories) {
    const catPath = path.join(CONTENT_DIR, catId);
    
    const pages = fs.readdirSync(catPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    for (const pageId of pages) {
      const pagePath = path.join(catPath, pageId);
      const imagePath = path.join(pagePath, 'image.png');
      const metaPath = path.join(pagePath, 'metadata.json');

      if (fs.existsSync(imagePath) && fs.existsSync(metaPath)) {
        const size = fs.statSync(imagePath).size;
        if (size <= PLACEHOLDER_MAX_SIZE) {
          try {
            const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
            placeholderPages.push({
              id: pageId,
              category: catId,
              title: meta.title,
              difficulty: meta.difficulty,
              subcategory: meta.subcategory,
              tags: meta.tags,
              imagePath: imagePath
            });
          } catch (e) {
            console.warn(`Error reading metadata for ${pageId}:`, e.message);
          }
        }
      }
    }
  }

  console.log(`Found ${placeholderPages.length} placeholder pages remaining.`);

  // Pick the first 6 pages to process in this batch
  const batchSize = 6;
  const batch = placeholderPages.slice(0, batchSize);

  if (batch.length === 0) {
    console.log('No placeholder pages remaining! All pages are fully generated!');
    return;
  }

  console.log(`\n=== Next Batch of ${batch.length} Pages ===`);
  batch.forEach((page, i) => {
    console.log(`\n[Page ${i + 1}/${batch.length}]`);
    console.log(`ID:         ${page.id}`);
    console.log(`Path:       public/content/${page.category}/${page.id}/image.png`);
    console.log(`Difficulty: ${page.difficulty}`);
    console.log(`Prompt:     "${getPrompt(page)}"`);
  });
}

main().catch(err => console.error(err));
