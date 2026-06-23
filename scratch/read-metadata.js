const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '../public/content');
const targets = [
  'pharaoh-sarcophagus-tomb',
  'easter-bunny-basket',
  'great-white-reef-patrol',
  'simple-baby-turtle',
  'vibrant-coral-sea-life',
  'vintage-hat-makeup-kit',
  'forest-river-bridge',
  'cool-electric-guitar',
  'medium-vampire-squid',
  'giant-sundae-bowl',
  'medium-jellyfish',
  'butterfly-wildflower-garden',
  'santa-filling-stockings',
  'spacewalk-moon-landing',
  'easy-concrete-pump-truck',
  'friendly-swamp-monster'
];

const results = [];

if (fs.existsSync(contentDir)) {
  const categories = fs.readdirSync(contentDir);
  for (const cat of categories) {
    const catPath = path.join(contentDir, cat);
    if (!fs.statSync(catPath).isDirectory()) continue;
    const pages = fs.readdirSync(catPath);
    for (const page of pages) {
      if (targets.includes(page)) {
        const metaPath = path.join(catPath, page, 'metadata.json');
        if (fs.existsSync(metaPath)) {
          const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
          results.push({
            id: page,
            category: cat,
            title: meta.title,
            difficulty: meta.difficulty,
            subcategory: meta.subcategory,
            tags: meta.tags,
            imagePath: path.join('public/content', cat, page, 'image.png')
          });
        }
      }
    }
  }
}

console.log(JSON.stringify(results, null, 2));
