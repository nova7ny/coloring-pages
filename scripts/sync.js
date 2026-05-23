const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();
const CONTENT_DIR = path.join(__dirname, '../public/content');

async function sync() {
  console.log('=== Starting Coloring Pages Ingestion & Sync ===');
  
  // Ensure the base content directory exists
  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true });
    console.log(`Created content directory: ${CONTENT_DIR}`);
  }

  // Keep track of active categories and pages found on disk
  const activeCategoryIds = new Set();
  const activePageIds = new Set();

  // 1. Scan Category Directories
  const categories = fs.readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  for (const categoryId of categories) {
    const categoryPath = path.join(CONTENT_DIR, categoryId);
    activeCategoryIds.add(categoryId);

    // Look for category.json or generate defaults
    let categoryName = categoryId.charAt(0).toUpperCase() + categoryId.slice(1);
    let categoryDesc = `Free printable ${categoryName} coloring pages for kids and adults.`;
    let categoryIcon = '🎨'; // default emoji icon

    const categoryJsonPath = path.join(categoryPath, 'category.json');
    if (fs.existsSync(categoryJsonPath)) {
      try {
        const catMeta = JSON.parse(fs.readFileSync(categoryJsonPath, 'utf8'));
        if (catMeta.name) categoryName = catMeta.name;
        if (catMeta.description) categoryDesc = catMeta.description;
        if (catMeta.icon) categoryIcon = catMeta.icon;
      } catch (e) {
        console.warn(`Error parsing category.json for ${categoryId}:`, e.message);
      }
    }

    // Upsert Category in DB
    console.log(`Syncing category: [${categoryId}] - "${categoryName}"`);
    await prisma.category.upsert({
      where: { id: categoryId },
      update: {
        name: categoryName,
        description: categoryDesc,
        iconPath: categoryIcon,
      },
      create: {
        id: categoryId,
        name: categoryName,
        description: categoryDesc,
        iconPath: categoryIcon,
      }
    });

    // 2. Scan Coloring Pages inside this category
    const pages = fs.readdirSync(categoryPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    for (const pageId of pages) {
      const pagePath = path.join(categoryPath, pageId);
      const metaPath = path.join(pagePath, 'metadata.json');

      if (!fs.existsSync(metaPath)) {
        console.warn(`Skipping page: [${pageId}] - metadata.json is missing!`);
        continue;
      }

      try {
        const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
        activePageIds.add(pageId);

        // Normalize difficulty
        let difficulty = 'Easy';
        if (meta.difficulty) {
          const diffLower = meta.difficulty.toLowerCase();
          if (diffLower.startsWith('med')) difficulty = 'Medium';
          else if (diffLower.startsWith('hard') || diffLower.startsWith('diff')) difficulty = 'Hard';
        }

        console.log(`  └─ Syncing page: [${pageId}] - "${meta.title || pageId}"`);

        await prisma.coloringPage.upsert({
          where: { id: pageId },
          update: {
            title: meta.title || pageId,
            categoryId: categoryId,
            subcategory: meta.subcategory || null,
            tags: JSON.stringify(meta.tags || []),
            seoTitle: meta.seoTitle || meta.title || pageId,
            seoDescription: meta.seoDescription || `Download and print ${meta.title || pageId} free coloring page in PDF format.`,
            difficulty: difficulty,
            imagePath: `/content/${categoryId}/${pageId}/image.png`,
            pdfPath: `/content/${categoryId}/${pageId}/printable.pdf`,
          },
          create: {
            id: pageId,
            categoryId: categoryId,
            title: meta.title || pageId,
            subcategory: meta.subcategory || null,
            tags: JSON.stringify(meta.tags || []),
            seoTitle: meta.seoTitle || meta.title || pageId,
            seoDescription: meta.seoDescription || `Download and print ${meta.title || pageId} free coloring page in PDF format.`,
            difficulty: difficulty,
            imagePath: `/content/${categoryId}/${pageId}/image.png`,
            pdfPath: `/content/${categoryId}/${pageId}/printable.pdf`,
            downloadCount: 0,
          }
        });

      } catch (e) {
        console.error(`Error parsing metadata.json for page ${pageId}:`, e.message);
      }
    }
  }

  // 3. Prune Orphaned Records from Database
  console.log('=== Pruning Orphaned Records ===');

  // Prune pages no longer in the filesystem
  const allDbPages = await prisma.coloringPage.findMany({ select: { id: true } });
  for (const dbPage of allDbPages) {
    if (!activePageIds.has(dbPage.id)) {
      console.log(`Pruning deleted page from database: ${dbPage.id}`);
      await prisma.coloringPage.delete({ where: { id: dbPage.id } });
    }
  }

  // Prune categories no longer in the filesystem
  const allDbCategories = await prisma.category.findMany({ select: { id: true } });
  for (const dbCat of allDbCategories) {
    if (!activeCategoryIds.has(dbCat.id)) {
      console.log(`Pruning deleted category from database: ${dbCat.id}`);
      await prisma.category.delete({ where: { id: dbCat.id } });
    }
  }

  console.log('=== Ingestion & Sync Completed Successfully ===');
}

sync()
  .catch(err => {
    console.error('Fatal error during sync execution:', err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
