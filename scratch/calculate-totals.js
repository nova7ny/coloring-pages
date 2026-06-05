const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '../public/content');

function calculate() {
  if (!fs.existsSync(CONTENT_DIR)) {
    console.error('Content directory not found!');
    return;
  }

  let totalPages = 0;
  let totalImages = 0;
  let totalPlaceholders = 0;

  const categories = fs.readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  categories.forEach(catId => {
    const catPath = path.join(CONTENT_DIR, catId);
    const pages = fs.readdirSync(catPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    totalPages += pages.length;

    pages.forEach(pageId => {
      const pagePath = path.join(catPath, pageId);
      const isPlaceholder = fs.existsSync(path.join(pagePath, '.is_placeholder'));
      if (isPlaceholder) {
        totalPlaceholders++;
      } else {
        totalImages++;
      }
    });
  });

  console.log(`=== Coloring Pages Site Audit ===`);
  console.log(`Total Pages Scaffolded: ${totalPages}`);
  console.log(`Fully Generated Images: ${totalImages}`);
  console.log(`Remaining Placeholders: ${totalPlaceholders}`);
}

calculate();
