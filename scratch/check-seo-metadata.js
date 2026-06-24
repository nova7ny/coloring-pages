const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '../public/content');

function scanMetadata() {
  if (!fs.existsSync(CONTENT_DIR)) {
    console.error('Content directory not found!');
    return;
  }

  const categories = fs.readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  let totalPages = 0;
  let missingSeoTitle = 0;
  let missingSeoDesc = 0;
  let shortSeoTitle = 0;
  let longSeoTitle = 0;
  let shortSeoDesc = 0;
  let longSeoDesc = 0;
  let violations = [];

  categories.forEach(catId => {
    const catPath = path.join(CONTENT_DIR, catId);
    const pages = fs.readdirSync(catPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    pages.forEach(pageId => {
      const pagePath = path.join(catPath, pageId);
      const metaPath = path.join(pagePath, 'metadata.json');

      if (fs.existsSync(metaPath)) {
        totalPages++;
        try {
          const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
          const title = meta.seoTitle || '';
          const desc = meta.seoDescription || '';

          if (!title) {
            missingSeoTitle++;
            violations.push({ id: pageId, error: 'Missing seoTitle' });
          } else {
            if (title.length < 30) {
              shortSeoTitle++;
              violations.push({ id: pageId, error: `Short seoTitle (${title.length} chars): "${title}"` });
            } else if (title.length > 70) {
              longSeoTitle++;
              violations.push({ id: pageId, error: `Long seoTitle (${title.length} chars): "${title}"` });
            }
          }

          if (!desc) {
            missingSeoDesc++;
            violations.push({ id: pageId, error: 'Missing seoDescription' });
          } else {
            if (desc.length < 50) {
              shortSeoDesc++;
              violations.push({ id: pageId, error: `Short seoDescription (${desc.length} chars): "${desc}"` });
            } else if (desc.length > 160) {
              longSeoDesc++;
              violations.push({ id: pageId, error: `Long seoDescription (${desc.length} chars): "${desc}"` });
            }
          }

        } catch (e) {
          violations.push({ id: pageId, error: `Failed to parse metadata.json: ${e.message}` });
        }
      }
    });
  });

  console.log('=== SEO Metadata Quality Audit ===');
  console.log(`Total Pages Scanned: ${totalPages}`);
  console.log(`Missing seoTitle:    ${missingSeoTitle}`);
  console.log(`Missing seoDesc:     ${missingSeoDesc}`);
  console.log(`Short seoTitle (<30): ${shortSeoTitle}`);
  console.log(`Long seoTitle (>70):  ${longSeoTitle}`);
  console.log(`Short seoDesc (<50):  ${shortSeoDesc}`);
  console.log(`Long seoDesc (>160):  ${longSeoDesc}`);
  console.log('\n=== Violations Detail ===');
  if (violations.length === 0) {
    console.log('🎉 No SEO metadata violations found! Perfect!');
  } else {
    violations.forEach(v => {
      console.log(`[${v.id}]: ${v.error}`);
    });
  }
}

scanMetadata();
