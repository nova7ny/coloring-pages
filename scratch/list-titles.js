const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '../public/content');

function run() {
  if (!fs.existsSync(CONTENT_DIR)) {
    console.error('Content directory not found!');
    process.exit(1);
  }

  const categories = fs.readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  const results = {};

  categories.forEach(categoryId => {
    const categoryPath = path.join(CONTENT_DIR, categoryId);
    const pages = fs.readdirSync(categoryPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    results[categoryId] = [];

    pages.forEach(pageId => {
      const pagePath = path.join(categoryPath, pageId);
      const metaPath = path.join(pagePath, 'metadata.json');

      if (!fs.existsSync(metaPath)) return;

      try {
        const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
        results[categoryId].push({
          id: pageId,
          title: meta.title
        });
      } catch (e) {
        // ignore
      }
    });
  });

  fs.writeFileSync(path.join(__dirname, 'titles-list.json'), JSON.stringify(results, null, 2), 'utf8');
  console.log(`Extracted titles for categories. Saved list to scratch/titles-list.json.`);
}

run();
