const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();
const CONTENT_DIR = path.join(__dirname, '../public/content');

async function audit() {
  console.log('=== Starting Workspace Image Ingestion Audit ===');
  
  if (!fs.existsSync(CONTENT_DIR)) {
    console.error('Content directory does not exist!');
    return;
  }

  // 1. Scan Category Directories on Disk
  const diskCategories = fs.readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  console.log(`Found ${diskCategories.length} categories on disk.`);

  let totalDiskPages = 0;
  let totalDbPages = 0;
  let totalPlaceholders = 0;

  const categoriesReport = [];

  for (const categoryId of diskCategories) {
    const categoryPath = path.join(CONTENT_DIR, categoryId);
    
    // Scan pages inside this category directory
    const diskPages = fs.readdirSync(categoryPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    totalDiskPages += diskPages.length;

    // Check placeholders on disk
    let categoryPlaceholdersCount = 0;
    const categoryPlaceholders = [];
    const missingInDb = [];

    for (const pageId of diskPages) {
      const pagePath = path.join(categoryPath, pageId);
      const isPlaceholder = fs.existsSync(path.join(pagePath, '.is_placeholder'));
      if (isPlaceholder) {
        categoryPlaceholdersCount++;
        totalPlaceholders++;
        categoryPlaceholders.push(pageId);
      }

      // Check if page exists in DB
      const dbPage = await prisma.coloringPage.findUnique({
        where: { id: pageId }
      });

      if (!dbPage) {
        missingInDb.push(pageId);
      }
    }

    // Get count in DB for this category
    const dbPagesForCategory = await prisma.coloringPage.findMany({
      where: { categoryId: categoryId }
    });
    totalDbPages += dbPagesForCategory.length;

    categoriesReport.push({
      categoryId,
      diskCount: diskPages.length,
      dbCount: dbPagesForCategory.length,
      placeholdersCount: categoryPlaceholdersCount,
      placeholders: categoryPlaceholders,
      missingInDb: missingInDb
    });
  }

  console.log('\n=== Summary of Categories ===');
  console.table(categoriesReport.map(r => ({
    Category: r.categoryId,
    'Disk Folders': r.diskCount,
    'DB Records': r.dbCount,
    'Placeholders': r.placeholdersCount,
    'Missing in DB': r.missingInDb.length
  })));

  console.log(`\nTotal Folders on Disk: ${totalDiskPages}`);
  console.log(`Total Database Records: ${totalDbPages}`);
  console.log(`Total Unfinished Placeholders: ${totalPlaceholders}`);

  const allMissing = categoriesReport.filter(r => r.missingInDb.length > 0);
  if (allMissing.length > 0) {
    console.log('\n=== Pages present on disk but missing in database ===');
    allMissing.forEach(r => {
      console.log(`Category [${r.categoryId}]:`, r.missingInDb);
    });
  } else {
    console.log('\nAll folders on disk are successfully indexed in the database.');
  }

  const allPlaceholders = categoriesReport.filter(r => r.placeholdersCount > 0);
  if (allPlaceholders.length > 0) {
    console.log('\n=== Unfinished Placeholder Pages (Pending Image Generation) ===');
    allPlaceholders.forEach(r => {
      console.log(`Category [${r.categoryId}] (${r.placeholdersCount}):`, r.placeholders);
    });
  } else {
    console.log('\nNo unfinished placeholder pages found. All pages have generated images.');
  }
}

audit()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
