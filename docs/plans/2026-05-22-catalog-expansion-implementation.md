# Catalog Expansion Implementation Plan

> **For Antigravity:** REQUIRED WORKFLOW: Use `.agent/workflows/execute-plan.md` to execute this plan in single-flow mode.

**Goal:** Expand the website's initial single-item database with 9 new categories (10 total) and 10 dynamic, premium coloring sheets (1 per category), fully generated using high-resolution line-art AI tools and synchronized automatically into our SQLite database.

**Architecture:** We will call the `generate_image` tool 10 times to generate gorgeous black and white drawings. Then, we will create a helper script `scripts/populate-catalog.js` to scaffold all required folders, categories metadata (`category.json`), and page parameters (`metadata.json`, `printable.pdf`). Finally, we will execute our SQLite sync pipeline.

**Tech Stack:** Next.js, Stable Diffusion (via `generate_image`), SQLite, Prisma.

---

### Task 1: Generate High-Resolution Coloring Page Images

Use the `generate_image` tool to create 10 highly detailed, clean, black-and-white coloring sheets.

**Files:**
- Create: `c:\Users\Jose\Documents\Antigravity\Coloring Pages Website\public\content\animals\majestic-lion\image.png`
- Create: `c:\Users\Jose\Documents\Antigravity\Coloring Pages Website\public\content\mandalas\floral-mandala\image.png`
- Create: `c:\Users\Jose\Documents\Antigravity\Coloring Pages Website\public\content\nature\mountain-lake\image.png`
- Create: `c:\Users\Jose\Documents\Antigravity\Coloring Pages Website\public\content\space\cosmic-rocket\image.png`
- Create: `c:\Users\Jose\Documents\Antigravity\Coloring Pages Website\public\content\fantasy\magical-unicorn\image.png`
- Create: `c:\Users\Jose\Documents\Antigravity\Coloring Pages Website\public\content\flowers\blooming-sunflower\image.png`
- Create: `c:\Users\Jose\Documents\Antigravity\Coloring Pages Website\public\content\dinosaurs\happy-triceratops\image.png`
- Create: `c:\Users\Jose\Documents\Antigravity\Coloring Pages Website\public\content\ocean\swimming-sea-turtle\image.png`
- Create: `c:\Users\Jose\Documents\Antigravity\Coloring Pages Website\public\content\vehicles\vintage-sports-car\image.png`
- Create: `c:\Users\Jose\Documents\Antigravity\Coloring Pages Website\public\content\holidays\spooky-pumpkin\image.png`

**Steps:**
For each of the 10 assets, call `generate_image` using the standardized high-quality black-and-white line art prompt format.

---

### Task 2: Scaffold Directory Structures and Metadata Files

Create a helper script `scripts/populate-catalog.js` to build folder structures, category descriptions, and page parameters.

**Files:**
- Create: `c:\Users\Jose\Documents\Antigravity\Coloring Pages Website\scripts\populate-catalog.js`

**Step 1: Write the Scaffolding Script**
Create a script to define the category details and metadata:
```javascript
const fs = require('fs');
const path = require('path');

const contentRoot = path.join(__dirname, '../public/content');

const categories = {
  animals: {
    name: "Animals",
    description: "Cute safari wildlife, domestic pets, and majestic jungle beasts.",
    icon: "🦁",
    pages: {
      "majestic-lion": {
        title: "Majestic Lion Coloring Page",
        subcategory: "Lions",
        difficulty: "Medium",
        tags: ["lion", "safari", "animals", "wildlife"],
        seoTitle: "Majestic Lion Coloring Page - Free PDF Printable | ColoringPalace",
        seoDescription: "Download and print our free, high-resolution vector PDF of a majestic safari lion. Perfect for classroom activities and kids."
      }
    }
  },
  mandalas: {
    name: "Mandalas",
    description: "Intricate geometric mandala patterns for relaxing, meditative coloring.",
    icon: "💮",
    pages: {
      "floral-mandala": {
        title: "Floral Meditative Mandala",
        subcategory: "Geometric",
        difficulty: "Hard",
        tags: ["mandala", "meditation", "floral", "relaxation"],
        seoTitle: "Floral Meditative Mandala Coloring Sheet - Free PDF | ColoringPalace",
        seoDescription: "Relieve stress with our free printable geometric floral mandala coloring sheet. Download high-resolution vector-grade PDF."
      }
    }
  },
  nature: {
    name: "Nature & Landscapes",
    description: "Scenic mountain ranges, serene forests, and beautiful garden landscapes.",
    icon: "🏔️",
    pages: {
      "mountain-lake": {
        title: "Mountain Lake Landscape",
        subcategory: "Landscapes",
        difficulty: "Medium",
        tags: ["mountain", "lake", "nature", "landscape", "scenic"],
        seoTitle: "Mountain Lake Landscape Coloring Page - Free PDF | ColoringPalace",
        seoDescription: "Free printable mountain lake scene coloring page. Perfect nature outline for kids, teachers, and relaxing coloring."
      }
    }
  },
  space: {
    name: "Space & Planets",
    description: "Out-of-this-world rockets, planets, galaxies, and celestial adventures.",
    icon: "🚀",
    pages: {
      "cosmic-rocket": {
        title: "Cosmic Rocket in Space",
        subcategory: "Rockets",
        difficulty: "Easy",
        tags: ["space", "rocket", "planets", "cosmic", "galaxy"],
        seoTitle: "Cosmic Rocket in Space Coloring Page - Free PDF | ColoringPalace",
        seoDescription: "Free printable cosmic rocket and planets scene for children. High-quality vector PDF download in one-click."
      }
    }
  },
  fantasy: {
    name: "Fantasy & Fairy Tales",
    description: "Magical castles, mystical unicorns, playful fairies, and legendary dragons.",
    icon: "🦄",
    pages: {
      "magical-unicorn": {
        title: "Magical Forest Unicorn",
        subcategory: "Unicorns",
        difficulty: "Easy",
        tags: ["fantasy", "unicorn", "magical", "fairy tale"],
        seoTitle: "Magical Forest Unicorn Coloring Page - Free PDF | ColoringPalace",
        seoDescription: "Free printable magical unicorn page for kids. High-resolution US Letter/A4 vector format."
      }
    }
  },
  flowers: {
    name: "Flowers & Botanicals",
    description: "Gorgeous bouquets, blooming sunflowers, and intricate botanical drawings.",
    icon: "🌻",
    pages: {
      "blooming-sunflower": {
        title: "Blooming Summer Sunflower",
        subcategory: "Flowers",
        difficulty: "Medium",
        tags: ["flower", "sunflower", "botanical", "spring"],
        seoTitle: "Blooming Summer Sunflower Coloring Sheet - Free PDF | ColoringPalace",
        seoDescription: "High-resolution vector-grade blooming sunflower coloring sheet. Free for personal and educational use."
      }
    }
  },
  dinosaurs: {
    name: "Dinosaurs",
    description: "Roaring T-Rex, towering Brachiosaurus, and prehistoric volcanic scenes.",
    icon: "🦖",
    pages: {
      "happy-triceratops": {
        title: "Happy Baby Triceratops",
        subcategory: "Triceratops",
        difficulty: "Easy",
        tags: ["dinosaur", "triceratops", "prehistoric", "kids"],
        seoTitle: "Happy Baby Triceratops Coloring Page - Free PDF | ColoringPalace",
        seoDescription: "Roaring cute baby triceratops coloring template. Download high-quality PDF, optimized for home printing."
      }
    }
  },
  ocean: {
    name: "Ocean Life",
    description: "Deep sea creatures, colorful coral reefs, friendly dolphins, and majestic whales.",
    icon: "🐙",
    pages: {
      "swimming-sea-turtle": {
        title: "Swimming Sea Turtle",
        subcategory: "Turtles",
        difficulty: "Medium",
        tags: ["ocean", "turtle", "sea life", "reef"],
        seoTitle: "Swimming Sea Turtle Coloring Page - Free PDF Printable | ColoringPalace",
        seoDescription: "Download our high-resolution vector sea turtle page, perfect for marine biology art or relaxing crafting."
      }
    }
  },
  vehicles: {
    name: "Vehicles & Transport",
    description: "Fast sports cars, steam trains, giant monster trucks, and flying airplanes.",
    icon: "🚗",
    pages: {
      "vintage-sports-car": {
        title: "Vintage Classic Sports Car",
        subcategory: "Cars",
        difficulty: "Hard",
        tags: ["vehicle", "car", "classic", "sports car"],
        seoTitle: "Vintage Classic Sports Car Coloring Sheet - Free PDF | ColoringPalace",
        seoDescription: "Detailed classic sports car outline, perfect for car enthusiasts and advanced colorists."
      }
    }
  },
  holidays: {
    name: "Holidays & Seasons",
    description: "Festive Christmas ornaments, spooky Halloween pumpkins, and seasonal decorations.",
    icon: "🎃",
    pages: {
      "spooky-pumpkin": {
        title: "Spooky Halloween Jack-O'-Lantern",
        subcategory: "Halloween",
        difficulty: "Easy",
        tags: ["holiday", "halloween", "pumpkin", "spooky"],
        seoTitle: "Spooky Jack-O'-Lantern Pumpkin Coloring Page - Free PDF | ColoringPalace",
        seoDescription: "Get ready for Halloween with our high-resolution vector pumpkin printable. Download free in one-click."
      }
    }
  }
};

function run() {
  console.log("=== Scaffolding Catalog Folders & Metadata ===");
  for (const [catId, catData] of Object.entries(categories)) {
    const catDir = path.join(contentRoot, catId);
    fs.mkdirSync(catDir, { recursive: true });

    // Write category.json
    fs.writeFileSync(
      path.join(catDir, 'category.json'),
      JSON.stringify({
        name: catData.name,
        description: catData.description,
        icon: catData.icon
      }, null, 2)
    );

    for (const [pageId, pageData] of Object.entries(catData.pages)) {
      const pageDir = path.join(catDir, pageId);
      fs.mkdirSync(pageDir, { recursive: true });

      // Write metadata.json
      fs.writeFileSync(
        path.join(pageDir, 'metadata.json'),
        JSON.stringify({
          id: pageId,
          title: pageData.title,
          subcategory: pageData.subcategory,
          difficulty: pageData.difficulty,
          tags: pageData.tags,
          seoTitle: pageData.seoTitle,
          seoDescription: pageData.seoDescription
        }, null, 2)
      );

      // Write printable.pdf placeholder
      fs.writeFileSync(
        path.join(pageDir, 'printable.pdf'),
        "MOCK PDF CONTENT\n"
      );
      
      console.log(`Scaffolded: [${catId}] -> [${pageId}]`);
    }
  }
  console.log("=== Scaffolding Completed Successfully ===");
}

run();
```

---

### Task 3: Database Sync & Ingestion Verification

Ingest all the new folders, category configs, and page metadata into the SQLite database and verify the Next.js builds successfully.

**Files:**
- Modify: `c:\Users\Jose\Documents\Antigravity\Coloring Pages Website\docs\plans\task.md`

**Step 1: Execute Population & Sync Scripts**
Run:
`$env:Path = "C:\Users\Jose\AppData\Local\Programs\nodejs\node-v20.18.3-win-x64;" + $env:Path; node scripts/populate-catalog.js`
`$env:Path = "C:\Users\Jose\AppData\Local\Programs\nodejs\node-v20.18.3-win-x64;" + $env:Path; node scripts/sync.js`

**Step 2: Compile & Build Verification**
Run:
`$env:Path = "C:\Users\Jose\AppData\Local\Programs\nodejs\node-v20.18.3-win-x64;" + $env:Path; npm run build`
Expected: Compiled successfully with all routes rendered dynamically or statically without any typescript or runtime issues.
