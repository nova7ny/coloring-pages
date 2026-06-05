const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '../public/content');

function check() {
  if (!fs.existsSync(CONTENT_DIR)) {
    console.error('Content directory not found!');
    return;
  }

  const nonHardPlaceholders = [];

  const categories = fs.readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  categories.forEach(catId => {
    const catPath = path.join(CONTENT_DIR, catId);
    const pages = fs.readdirSync(catPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    pages.forEach(pageId => {
      const pagePath = path.join(catPath, pageId);
      const isPlaceholder = fs.existsSync(path.join(pagePath, '.is_placeholder'));
      const metaPath = path.join(pagePath, 'metadata.json');

      if (isPlaceholder && fs.existsSync(metaPath)) {
        try {
          const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
          if (meta.difficulty !== 'Hard') {
            nonHardPlaceholders.push({
              id: pageId,
              category: catId,
              difficulty: meta.difficulty
            });
          }
        } catch (e) {
          console.warn(`Error reading ${pageId} metadata:`, e.message);
        }
      }
    });
  });

  console.log(`=== Non-Hard Placeholders Count ===`);
  console.log(`Found ${nonHardPlaceholders.length} non-Hard placeholders:`);
  console.log(nonHardPlaceholders);
}

check();
