const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '../public/content');
const BRAIN_DIR = 'C:\\Users\\Jose\\.gemini\\antigravity\\brain\\bd354212-ab57-44d7-a580-133d3580b740';

// 1. Define Category Metadata
const categories = {
  animals: {
    name: "Animals",
    description: "Discover cute puppies, majestic lions, kittens, and gorgeous birds. High-resolution free coloring sheets for kids.",
    icon: "🦁"
  },
  mandalas: {
    name: "Mandalas",
    description: "Beautiful, intricate geometric and floral mandala coloring pages. Perfect for mindfulness, meditation, and stress relief.",
    icon: "🏵️"
  },
  nature: {
    name: "Nature",
    description: "Stunning landscapes, serene lakes, forests, and outdoor scenes. Bring the beauty of nature to life with color.",
    icon: "🏔️"
  },
  space: {
    name: "Space",
    description: "Out-of-this-world coloring sheets featuring rocket ships, alien planets, stars, and cosmic space exploration.",
    icon: "🚀"
  },
  fantasy: {
    name: "Fantasy",
    description: "Magical worlds filled with majestic unicorns, enchanted forests, fairies, and mythical creatures.",
    icon: "🦄"
  },
  flowers: {
    name: "Flowers",
    description: "Beautiful floral arrangements, blooming sunflowers, elegant roses, and botanical gardens to color.",
    icon: "🌻"
  },
  dinosaurs: {
    name: "Dinosaurs",
    description: "Travel back in time with prehistoric dinosaurs! Color the mighty T-Rex, happy Triceratops, and more.",
    icon: "🦕"
  },
  ocean: {
    name: "Ocean",
    description: "Dive deep into sea life! Swim with gentle sea turtles, colorful tropical fish, and gorgeous coral reefs.",
    icon: "🐢"
  },
  vehicles: {
    name: "Vehicles",
    description: "High-speed sports cars, classic vintage automobiles, planes, trains, and exciting construction trucks.",
    icon: "🏎️"
  },
  holidays: {
    name: "Holidays",
    description: "Festive coloring pages for Halloween, Christmas, Thanksgiving, Easter, and seasonal celebrations.",
    icon: "🎃"
  }
};

// 2. Define Page Metadata and Image Mapping
const pages = [
  {
    id: "majestic-lion",
    categoryId: "animals",
    categoryName: "Animals",
    imagePrefix: "majestic_lion",
    exactSourcePath: path.join(BRAIN_DIR, "majestic_lion_1779474435016.png"),
    title: "Majestic Lion Coloring Page",
    subcategory: "Wild Animals",
    tags: ["lion", "safari", "wild animal", "cat", "king"],
    difficulty: "Medium",
    seoTitle: "Free Majestic Lion Coloring Page (Printable PDF)",
    seoDescription: "Download and print this stunning majestic lion head coloring page. Ideal for kids, safari themes, and animal lovers. Free high-res PDF."
  },
  {
    id: "floral-mandala",
    categoryId: "mandalas",
    categoryName: "Mandalas",
    imagePrefix: "floral_mandala",
    exactSourcePath: path.join(BRAIN_DIR, "floral_mandala_1779474449173.png"),
    title: "Intricate Floral Mandala Coloring Page",
    subcategory: "Floral",
    tags: ["mandala", "flower", "floral", "geometric", "stress relief", "mindfulness"],
    difficulty: "Hard",
    seoTitle: "Intricate Floral Mandala Coloring Page - Free PDF Printable",
    seoDescription: "Relieve stress with this beautiful intricate floral mandala coloring page. High-resolution free printable PDF for adults and kids."
  },
  {
    id: "mountain-lake",
    categoryId: "nature",
    categoryName: "Nature",
    imagePrefix: "mountain_lake",
    exactSourcePath: path.join(BRAIN_DIR, "mountain_lake_1779474461859.png"),
    title: "Serene Mountain Lake Landscape Coloring Page",
    subcategory: "Landscapes",
    tags: ["landscape", "mountain", "lake", "forest", "nature", "scenery"],
    difficulty: "Medium",
    seoTitle: "Serene Mountain Lake Landscape Coloring Page - Free PDF",
    seoDescription: "Get creative with this beautiful mountain lake landscape coloring page. Perfect for nature lovers and landscape artists. Free PDF."
  },
  {
    id: "cosmic-rocket",
    categoryId: "space",
    categoryName: "Space",
    imagePrefix: "cosmic_rocket",
    exactSourcePath: path.join(BRAIN_DIR, "cosmic_rocket_1779474474755.png"),
    title: "Cosmic Rocket Ship Coloring Page",
    subcategory: "Spacecraft",
    tags: ["rocket", "space", "astronaut", "stars", "galaxy", "adventure"],
    difficulty: "Easy",
    seoTitle: "Cosmic Rocket Ship Space Coloring Page (Printable PDF)",
    seoDescription: "Blast off into creativity with this cosmic rocket ship coloring page. Great for classroom activities, kids, and space fans. Free PDF."
  },
  {
    id: "magical-unicorn",
    categoryId: "fantasy",
    categoryName: "Fantasy",
    imagePrefix: "magical_unicorn",
    exactSourcePath: path.join(BRAIN_DIR, "magical_unicorn_1779474486718.png"),
    title: "Magical Unicorn Coloring Page",
    subcategory: "Mythical Creatures",
    tags: ["unicorn", "fantasy", "magical", "rainbow", "forest", "kids"],
    difficulty: "Easy",
    seoTitle: "Free Magical Unicorn Coloring Page - High-Res PDF",
    seoDescription: "Bring magic to life with this beautiful unicorn coloring page. Perfect for kids, birthdays, and fantasy lovers. Download free PDF."
  },
  {
    id: "blooming-sunflower",
    categoryId: "flowers",
    categoryName: "Flowers",
    imagePrefix: "blooming_sunflower",
    exactSourcePath: path.join(BRAIN_DIR, "blooming_sunflower_1779474501414.png"),
    title: "Blooming Sunflower Coloring Page",
    subcategory: "Botanical",
    tags: ["sunflower", "flower", "garden", "nature", "blossom", "summer"],
    difficulty: "Easy",
    seoTitle: "Blooming Sunflower Floral Coloring Page - Free PDF",
    seoDescription: "Brighten your day with this gorgeous blooming sunflower coloring page. High-quality free printable PDF for kids and adults."
  },
  {
    id: "happy-triceratops",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    imagePrefix: "happy_triceratops",
    exactSourcePath: path.join(BRAIN_DIR, "happy_triceratops_1779474513235.png"),
    title: "Happy Triceratops Dinosaur Coloring Page",
    subcategory: "Prehistoric",
    tags: ["dinosaur", "triceratops", "prehistoric", "jurassic", "cute"],
    difficulty: "Easy",
    seoTitle: "Happy Triceratops Dinosaur Coloring Page - Free PDF",
    seoDescription: "Bring the prehistoric era to life with this cute happy triceratops coloring page. Fun, free printable PDF for kids and schools."
  },
  {
    id: "swimming-sea-turtle",
    categoryId: "ocean",
    categoryName: "Ocean",
    imagePrefix: "swimming_sea_turtle",
    exactSourcePath: path.join(BRAIN_DIR, "swimming_sea_turtle_1779474526007.png"),
    title: "Swimming Sea Turtle Coloring Page",
    subcategory: "Sea Creatures",
    tags: ["turtle", "sea turtle", "ocean", "marine life", "coral reef", "sea"],
    difficulty: "Medium",
    seoTitle: "Swimming Sea Turtle Ocean Coloring Page (Printable PDF)",
    seoDescription: "Dive into coloring with this majestic swimming sea turtle coloring page. Features detailed coral reef background. Download free PDF."
  },
  {
    id: "vintage-sports-car",
    categoryId: "vehicles",
    categoryName: "Vehicles",
    imagePrefix: "vintage_sports_car",
    exactSourcePath: path.join(BRAIN_DIR, "vintage_sports_car_1779474538355.png"),
    title: "Vintage Sports Car Coloring Page",
    subcategory: "Racing Cars",
    tags: ["car", "sports car", "vintage", "racing", "speed", "classic"],
    difficulty: "Medium",
    seoTitle: "Vintage Sports Car Racing Coloring Page - Free PDF",
    seoDescription: "Vroom into action with this classic vintage sports car coloring page. High-resolution free printable PDF for car enthusiasts."
  },
  {
    id: "spooky-pumpkin",
    categoryId: "holidays",
    categoryName: "Holidays",
    imagePrefix: "spooky_pumpkin",
    exactSourcePath: path.join(BRAIN_DIR, "spooky_pumpkin_1779474550319.png"),
    title: "Spooky Halloween Pumpkin Coloring Page",
    subcategory: "Halloween",
    tags: ["pumpkin", "halloween", "jack-o-lantern", "spooky", "holiday"],
    difficulty: "Easy",
    seoTitle: "Spooky Halloween Pumpkin Jack-O'-Lantern Coloring Page",
    seoDescription: "Get ready for autumn with this spooky Halloween jack-o'-lantern pumpkin coloring page. Free high-res PDF print file."
  }
];

function findGeneratedImage(imagePrefix) {
  try {
    const files = fs.readdirSync(BRAIN_DIR);
    const matched = files.find(f => f.startsWith(imagePrefix) && f.endsWith('.png'));
    if (matched) {
      return path.join(BRAIN_DIR, matched);
    }
  } catch (err) {
    console.error(`Error reading brain directory: ${err.message}`);
  }
  return null;
}

function run() {
  console.log('=== Populating Catalog Directories and Assets ===');

  // Ensure content directory exists
  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true });
  }

  // 1. Populate Category Metadata files
  for (const [catId, catInfo] of Object.entries(categories)) {
    const catPath = path.join(CONTENT_DIR, catId);
    if (!fs.existsSync(catPath)) {
      fs.mkdirSync(catPath, { recursive: true });
      console.log(`Created category directory: ${catId}`);
    }

    const catJsonPath = path.join(catPath, 'category.json');
    // Write if not already exists (preserve animals if same, but our config is standard)
    fs.writeFileSync(catJsonPath, JSON.stringify(catInfo, null, 2), 'utf8');
    console.log(`Wrote category.json for: ${catId}`);
  }

  // 2. Populate Page Directories, JSONs, Images, and Mock PDFs
  for (const page of pages) {
    const pagePath = path.join(CONTENT_DIR, page.categoryId, page.id);
    if (!fs.existsSync(pagePath)) {
      fs.mkdirSync(pagePath, { recursive: true });
      console.log(`  └─ Created page directory: ${page.categoryId}/${page.id}`);
    }

    // Write metadata.json
    const metaJson = {
      id: page.id,
      title: page.title,
      category: page.categoryName,
      subcategory: page.subcategory,
      tags: page.tags,
      seoTitle: page.seoTitle,
      seoDescription: page.seoDescription,
      difficulty: page.difficulty,
      author: "Antigravity Agent"
    };
    const metaPath = path.join(pagePath, 'metadata.json');
    fs.writeFileSync(metaPath, JSON.stringify(metaJson, null, 2), 'utf8');
    console.log(`  └─ Wrote metadata.json for ${page.id}`);

    // Write mock printable.pdf
    const pdfPath = path.join(pagePath, 'printable.pdf');
    fs.writeFileSync(pdfPath, "MOCK PDF CONTENT\n", 'utf8');
    console.log(`  └─ Wrote mock printable.pdf for ${page.id}`);

    // Locate and Copy Image
    let sourceImg = page.exactSourcePath;
    if (!fs.existsSync(sourceImg)) {
      console.warn(`Exact path not found: ${sourceImg}. Searching dynamically...`);
      sourceImg = findGeneratedImage(page.imagePrefix);
    }

    if (sourceImg && fs.existsSync(sourceImg)) {
      const destImg = path.join(pagePath, 'image.png');
      fs.copyFileSync(sourceImg, destImg);
      console.log(`  └─ Copied image to: ${page.categoryId}/${page.id}/image.png`);
    } else {
      console.error(`ERROR: Could not locate generated image for prefix: ${page.imagePrefix}!`);
      process.exit(1);
    }
  }

  console.log('=== Catalog Populating Complete ===');
}

run();
