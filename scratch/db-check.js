const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const categories = await prisma.category.findMany();
  console.log('Categories in DB:', categories.map(c => ({ id: c.id, name: c.name })));

  const carPages = await prisma.coloringPage.findMany({
    where: {
      categoryId: 'vehicles'
    },
    select: {
      id: true,
      title: true,
      subcategory: true,
      difficulty: true,
      imagePath: true
    }
  });

  console.log(`Found ${carPages.length} pages in 'vehicles' category:`);
  console.log(carPages);
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
