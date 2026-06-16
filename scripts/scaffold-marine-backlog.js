const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '../public/content');
const COMING_SOON_SRC = path.join(__dirname, '../public/images/coming-soon.png');

if (!fs.existsSync(COMING_SOON_SRC)) {
  console.error(`Base placeholder image not found at ${COMING_SOON_SRC}`);
  process.exit(1);
}

const placeholderBuffer = fs.readFileSync(COMING_SOON_SRC);

const newPagesList = [
  // === EASY DIFFICULTIES (25 Pages) ===
  {
    id: "easy-seahorse",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Easy Seahorse Coloring Page",
    subcategory: "Seahorses",
    tags: ["seahorse", "easy", "kids", "cartoon", "ocean"],
    difficulty: "Easy",
    seoTitle: "Free Easy Seahorse Coloring Page (Printable PDF)",
    seoDescription: "Download and print this simple kids seahorse coloring page. Perfect for young children and toddlers. Free high-res PDF."
  },
  {
    id: "easy-jellyfish",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Easy Jellyfish Coloring Page",
    subcategory: "Jellyfish",
    tags: ["jellyfish", "easy", "kids", "cartoon", "ocean"],
    difficulty: "Easy",
    seoTitle: "Easy Jellyfish Coloring Page - Free PDF Print",
    seoDescription: "Download this cute, simple cartoon jellyfish coloring page for toddlers and kids. Thick outlines and simple spaces. Free PDF."
  },
  {
    id: "easy-manta-ray",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Easy Manta Ray Coloring Page",
    subcategory: "Rays & Eels",
    tags: ["manta ray", "ray", "easy", "kids", "ocean"],
    difficulty: "Easy",
    seoTitle: "Easy Manta Ray Kids Coloring Page - Free PDF",
    seoDescription: "Get creative with this simple manta ray coloring sheet for young kids. Easy to color with crayons or markers. Free PDF."
  },
  {
    id: "easy-lobster",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Easy Lobster Coloring Page",
    subcategory: "Crustaceans",
    tags: ["lobster", "easy", "kids", "cartoon", "ocean"],
    difficulty: "Easy",
    seoTitle: "Easy Lobster Coloring Page - Free PDF",
    seoDescription: "Download and print this simple lobster coloring page. Great for preschool and elementary school children. Free PDF."
  },
  {
    id: "easy-hermit-crab",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Easy Hermit Crab Coloring Page",
    subcategory: "Crustaceans",
    tags: ["hermit crab", "crab", "easy", "kids", "ocean"],
    difficulty: "Easy",
    seoTitle: "Easy Hermit Crab Coloring Page - Free PDF",
    seoDescription: "Color a simple hermit crab with its seashell. Perfect for kids who love ocean life. Free PDF."
  },
  {
    id: "easy-pufferfish",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Easy Pufferfish Coloring Page",
    subcategory: "Tropical Fish",
    tags: ["pufferfish", "fish", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Pufferfish Coloring Page - Free PDF",
    seoDescription: "Enjoy this simple pufferfish coloring page for toddlers. Bold borders and large open coloring zones. Free PDF."
  },
  {
    id: "easy-anglerfish",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Easy Anglerfish Coloring Page",
    subcategory: "Deep Sea",
    tags: ["anglerfish", "deep sea", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Anglerfish Coloring Page - Free PDF",
    seoDescription: "Download and print this easy deep sea anglerfish coloring sheet. Great for young ocean fans. Free PDF."
  },
  {
    id: "easy-walrus",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Easy Walrus Coloring Page",
    subcategory: "Marine Mammals",
    tags: ["walrus", "easy", "kids", "simple", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Walrus Coloring Page - Free PDF",
    seoDescription: "Print this simple walrus coloring page. Thick outlines and simple details for toddlers. Free high-res PDF."
  },
  {
    id: "easy-harbor-seal",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Easy Harbor Seal Coloring Page",
    subcategory: "Marine Mammals",
    tags: ["seal", "harbor seal", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Harbor Seal Coloring Page - Free PDF",
    seoDescription: "Color a simple harbor seal. Designed for toddlers and young kids. Free PDF."
  },
  {
    id: "easy-manatee",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Easy Manatee Coloring Page",
    subcategory: "Marine Mammals",
    tags: ["manatee", "easy", "kids", "simple", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Manatee Coloring Page - Free PDF",
    seoDescription: "Download this simple manatee coloring sheet. High-resolution free printable PDF for kids."
  },
  {
    id: "easy-swordfish",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Easy Swordfish Coloring Page",
    subcategory: "Pelagic Fish",
    tags: ["swordfish", "fish", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Swordfish Coloring Page - Free PDF",
    seoDescription: "Color a simple swordfish leaping in the sea. Ideal for young children. Free high-res printable PDF."
  },
  {
    id: "easy-giant-squid",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Easy Giant Squid Coloring Page",
    subcategory: "Cephalopods",
    tags: ["giant squid", "squid", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Giant Squid Coloring Page - Free PDF",
    seoDescription: "Print this simple giant squid coloring page. Ideal for preschool and kindergartners. Free PDF."
  },
  {
    id: "easy-lionfish",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Easy Lionfish Coloring Page",
    subcategory: "Tropical Fish",
    tags: ["lionfish", "fish", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Lionfish Coloring Page - Free PDF",
    seoDescription: "Color a simple cartoon lionfish with distinct striped fins. Perfect for kids. Free PDF."
  },
  {
    id: "easy-leafy-seadragon",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Easy Leafy Seadragon Coloring Page",
    subcategory: "Seahorses",
    tags: ["seadragon", "leafy seadragon", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Leafy Seadragon Coloring Page - Free PDF",
    seoDescription: "A cute and simple leafy seadragon coloring sheet for preschool children. Free PDF."
  },
  {
    id: "easy-moray-eel",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Easy Moray Eel Coloring Page",
    subcategory: "Rays & Eels",
    tags: ["moray eel", "eel", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Moray Eel Coloring Page - Free PDF",
    seoDescription: "Download and print this simple moray eel cartoon. Ideal for toddlers. Free PDF."
  },
  {
    id: "easy-chambered-nautilus",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Easy Chambered Nautilus Coloring Page",
    subcategory: "Cephalopods",
    tags: ["nautilus", "chambered nautilus", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Chambered Nautilus Coloring Page - Free PDF",
    seoDescription: "Enjoy coloring this simple chambered nautilus with spiral shell outlines. Free PDF."
  },
  {
    id: "easy-clownfish",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Easy Clownfish Coloring Page",
    subcategory: "Tropical Fish",
    tags: ["clownfish", "fish", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Clownfish Coloring Page - Free PDF",
    seoDescription: "Download and print this cute clownfish coloring sheet. Great for toddlers. Free PDF."
  },
  {
    id: "easy-flying-fish",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Easy Flying Fish Coloring Page",
    subcategory: "Pelagic Fish",
    tags: ["flying fish", "fish", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Flying Fish Coloring Page - Free PDF",
    seoDescription: "Print this simple flying fish outline gliding over waves. Free high-res PDF."
  },
  {
    id: "easy-sunfish",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Easy Sunfish Coloring Page",
    subcategory: "Pelagic Fish",
    tags: ["sunfish", "mola mola", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Ocean Sunfish Coloring Page - Free PDF",
    seoDescription: "Get creative with this simple ocean sunfish coloring page. Ideal for toddlers. Free PDF."
  },
  {
    id: "easy-vampire-squid",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Easy Vampire Squid Coloring Page",
    subcategory: "Deep Sea",
    tags: ["vampire squid", "squid", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Vampire Squid Coloring Page - Free PDF",
    seoDescription: "Download this cute, simple vampire squid coloring page. Perfect for young kids. Free PDF."
  },
  {
    id: "easy-blue-tang",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Easy Blue Tang Coloring Page",
    subcategory: "Tropical Fish",
    tags: ["blue tang", "fish", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Blue Tang Coloring Page - Free PDF",
    seoDescription: "Color a simple blue tang fish outline. Perfect for preschool children. Free PDF."
  },
  {
    id: "easy-pelican",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Easy Pelican Coloring Page",
    subcategory: "Marine Birds",
    tags: ["pelican", "bird", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Pelican Coloring Page - Free PDF",
    seoDescription: "Download this simple pelican coloring page. Sized perfectly for toddlers and young kids."
  },
  {
    id: "easy-sea-anemone",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Easy Sea Anemone Coloring Page",
    subcategory: "Invertebrates",
    tags: ["sea anemone", "anemone", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Sea Anemone Coloring Page - Free PDF",
    seoDescription: "Color a simple sea anemone garden cartoon. Designed for young kids. Free PDF."
  },
  {
    id: "easy-horseshoe-crab",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Easy Horseshoe Crab Coloring Page",
    subcategory: "Invertebrates",
    tags: ["horseshoe crab", "crab", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Horseshoe Crab Coloring Page - Free PDF",
    seoDescription: "A simple toddler-friendly horseshoe crab coloring sheet with bold outlines. Free PDF."
  },
  {
    id: "easy-sea-urchin",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Easy Sea Urchin Coloring Page",
    subcategory: "Invertebrates",
    tags: ["sea urchin", "urchin", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Sea Urchin Coloring Page - Free PDF",
    seoDescription: "Download and print this simple sea urchin coloring page with spiky cartoon lines. Free PDF."
  },

  // === MEDIUM DIFFICULTIES (25 Pages) ===
  {
    id: "medium-seahorse",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Seahorse in Kelp Forest Coloring Page",
    subcategory: "Seahorses",
    tags: ["seahorse", "kelp forest", "medium", "kids", "ocean life"],
    difficulty: "Medium",
    seoTitle: "Seahorse in Kelp Forest Coloring Page - Free PDF",
    seoDescription: "Color a detailed seahorse clinging to seaweed in a kelp forest under waves. Free PDF."
  },
  {
    id: "medium-jellyfish",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Jellyfish in Deep Sea Coloring Page",
    subcategory: "Jellyfish",
    tags: ["jellyfish", "deep sea", "medium", "kids", "ocean life"],
    difficulty: "Medium",
    seoTitle: "Jellyfish in Deep Sea Coloring Page - Free PDF",
    seoDescription: "Enjoy coloring this detailed jellyfish floating gracefully in deep ocean water. Free PDF."
  },
  {
    id: "medium-manta-ray",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Manta Ray Swimming in Open Ocean Coloring Page",
    subcategory: "Rays & Eels",
    tags: ["manta ray", "ray", "swimming", "medium", "ocean life"],
    difficulty: "Medium",
    seoTitle: "Manta Ray Swimming in Open Ocean Coloring Page - Free PDF",
    seoDescription: "Get creative with this beautiful manta ray gliding through open ocean currents. Free PDF."
  },
  {
    id: "medium-lobster",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Lobster on Sandy Seabed Coloring Page",
    subcategory: "Crustaceans",
    tags: ["lobster", "seabed", "medium", "kids", "ocean life"],
    difficulty: "Medium",
    seoTitle: "Lobster on Sandy Seabed Coloring Page - Free PDF",
    seoDescription: "Download and print this detailed lobster crawling on a textured sandy seabed. Free PDF."
  },
  {
    id: "medium-hermit-crab",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Hermit Crab with Seashell Coloring Page",
    subcategory: "Crustaceans",
    tags: ["hermit crab", "crab", "seashell", "medium", "ocean life"],
    difficulty: "Medium",
    seoTitle: "Hermit Crab with Seashell Coloring Page - Free PDF",
    seoDescription: "Color a detailed hermit crab peeking out of its spiral shell on a beach. Free PDF."
  },
  {
    id: "medium-pufferfish",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Pufferfish inflating near Reef Coloring Page",
    subcategory: "Tropical Fish",
    tags: ["pufferfish", "fish", "reef", "medium", "ocean life"],
    difficulty: "Medium",
    seoTitle: "Pufferfish inflating near Reef Coloring Page - Free PDF",
    seoDescription: "Color a realistic spiky pufferfish inflated near coral reef structures. Free PDF."
  },
  {
    id: "medium-anglerfish",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Deep Sea Anglerfish Glowing Coloring Page",
    subcategory: "Deep Sea",
    tags: ["anglerfish", "deep sea", "glowing", "medium", "ocean life"],
    difficulty: "Medium",
    seoTitle: "Deep Sea Anglerfish Glowing Coloring Page - Free PDF",
    seoDescription: "Enjoy coloring this detailed deep sea anglerfish with its glowing head light lure. Free PDF."
  },
  {
    id: "medium-walrus",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Walrus resting on Iceberg Coloring Page",
    subcategory: "Marine Mammals",
    tags: ["walrus", "iceberg", "arctic", "medium", "ocean life"],
    difficulty: "Medium",
    seoTitle: "Walrus resting on Iceberg Coloring Page - Free PDF",
    seoDescription: "Color a detailed walrus showing long tusks resting on an arctic iceberg. Free PDF."
  },
  {
    id: "medium-harbor-seal",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Harbor Seal basking on Rock Coloring Page",
    subcategory: "Marine Mammals",
    tags: ["seal", "harbor seal", "rock", "medium", "ocean life"],
    difficulty: "Medium",
    seoTitle: "Harbor Seal basking on Rock Coloring Page - Free PDF",
    seoDescription: "Basking harbor seal resting on a coastal rocky shoreline. Moderate fur details. Free PDF."
  },
  {
    id: "medium-manatee",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Manatee swimming in Warm River Coloring Page",
    subcategory: "Marine Mammals",
    tags: ["manatee", "river", "swimming", "medium", "ocean life"],
    difficulty: "Medium",
    seoTitle: "Manatee swimming in Warm River Coloring Page - Free PDF",
    seoDescription: "Download this detailed manatee coloring page gliding through river weeds. Free PDF."
  },
  {
    id: "medium-swordfish",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Swordfish leaping out of Water Coloring Page",
    subcategory: "Pelagic Fish",
    tags: ["swordfish", "fish", "leaping", "medium", "ocean life"],
    difficulty: "Medium",
    seoTitle: "Swordfish leaping out of Water Coloring Page - Free PDF",
    seoDescription: "Leaping swordfish piercing through ocean waves. High-resolution printable PDF."
  },
  {
    id: "medium-giant-squid",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Giant Squid in Ocean Depth Coloring Page",
    subcategory: "Cephalopods",
    tags: ["giant squid", "squid", "deep sea", "medium", "ocean life"],
    difficulty: "Medium",
    seoTitle: "Giant Squid in Ocean Depth Coloring Page - Free PDF",
    seoDescription: "Print this detailed giant squid navigating through deep water columns. Free PDF."
  },
  {
    id: "medium-lionfish",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Lionfish displaying striped Fins Coloring Page",
    subcategory: "Tropical Fish",
    tags: ["lionfish", "fish", "reef", "medium", "ocean life"],
    difficulty: "Medium",
    seoTitle: "Lionfish displaying striped Fins Coloring Page - Free PDF",
    seoDescription: "Color a detailed lionfish showing off its beautiful venomous fan-like fins. Free PDF."
  },
  {
    id: "medium-leafy-seadragon",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Leafy Seadragon camouflaged in Seaweed Coloring Page",
    subcategory: "Seahorses",
    tags: ["seadragon", "leafy seadragon", "camouflaged", "medium", "ocean life"],
    difficulty: "Medium",
    seoTitle: "Leafy Seadragon camouflaged in Seaweed Coloring Page - Free PDF",
    seoDescription: "Leafy seadragon displaying its camouflaging leaf-like appendages near seaweed. Free PDF."
  },
  {
    id: "medium-moray-eel",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Moray Eel peeking from Cave Coloring Page",
    subcategory: "Rays & Eels",
    tags: ["moray eel", "eel", "cave", "medium", "ocean life"],
    difficulty: "Medium",
    seoTitle: "Moray Eel peeking from Cave Coloring Page - Free PDF",
    seoDescription: "Color a detailed moray eel with spotted patterns peeking out from a reef cave. Free PDF."
  },
  {
    id: "medium-chambered-nautilus",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Chambered Nautilus swimming in Deep Ocean Coloring Page",
    subcategory: "Cephalopods",
    tags: ["nautilus", "chambered nautilus", "deep sea", "medium", "ocean life"],
    difficulty: "Medium",
    seoTitle: "Chambered Nautilus swimming in Deep Ocean Coloring Page - Free PDF",
    seoDescription: "Enjoy coloring this detailed chambered nautilus with complex spiral shell segments. Free PDF."
  },
  {
    id: "medium-clownfish",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Clownfish in Sea Anemone Coloring Page",
    subcategory: "Tropical Fish",
    tags: ["clownfish", "anemone", "reef", "medium", "ocean life"],
    difficulty: "Medium",
    seoTitle: "Clownfish in Sea Anemone Coloring Page - Free PDF",
    seoDescription: "Download and print this detailed clownfish resting inside wavy tentacles of an anemone. Free PDF."
  },
  {
    id: "medium-flying-fish",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Flying Fish gliding over Ocean Waves Coloring Page",
    subcategory: "Pelagic Fish",
    tags: ["flying fish", "fish", "waves", "medium", "ocean life"],
    difficulty: "Medium",
    seoTitle: "Flying Fish gliding over Ocean Waves Coloring Page - Free PDF",
    seoDescription: "Detailed flying fish with wing-like fins gliding over ocean waves. Free high-res PDF."
  },
  {
    id: "medium-sunfish",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Giant Ocean Sunfish basking near Surface Coloring Page",
    subcategory: "Pelagic Fish",
    tags: ["sunfish", "mola mola", "surface", "medium", "ocean life"],
    difficulty: "Medium",
    seoTitle: "Giant Ocean Sunfish basking near Surface Coloring Page - Free PDF",
    seoDescription: "Get creative with this giant ocean sunfish basking near ocean waves. Free PDF."
  },
  {
    id: "medium-vampire-squid",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Vampire Squid in Midnight Zone Coloring Page",
    subcategory: "Deep Sea",
    tags: ["vampire squid", "squid", "midnight zone", "medium", "ocean life"],
    difficulty: "Medium",
    seoTitle: "Vampire Squid in Midnight Zone Coloring Page - Free PDF",
    seoDescription: "Detailed vampire squid inside deep dark ocean depths with textured tentacles. Free PDF."
  },
  {
    id: "medium-blue-tang",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Blue Tang swimming near Brain Coral Coloring Page",
    subcategory: "Tropical Fish",
    tags: ["blue tang", "fish", "coral", "medium", "ocean life"],
    difficulty: "Medium",
    seoTitle: "Blue Tang swimming near Brain Coral Coloring Page - Free PDF",
    seoDescription: "Detailed blue tang swimming near textured brain coral and sea fan shapes. Free PDF."
  },
  {
    id: "medium-pelican",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Pelican hunting at Ocean Surface Coloring Page",
    subcategory: "Marine Birds",
    tags: ["pelican", "bird", "hunting", "medium", "ocean life"],
    difficulty: "Medium",
    seoTitle: "Pelican hunting at Ocean Surface Coloring Page - Free PDF",
    seoDescription: "Color a detailed pelican hunting fish at the ocean surface with waves and sky. Free PDF."
  },
  {
    id: "medium-sea-anemone",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Sea Anemone Garden with Clownfish Coloring Page",
    subcategory: "Invertebrates",
    tags: ["sea anemone", "anemone", "fish", "medium", "ocean life"],
    difficulty: "Medium",
    seoTitle: "Sea Anemone Garden with Clownfish Coloring Page - Free PDF",
    seoDescription: "Color a detailed sea anemone garden on a rocky reef structure. Free PDF."
  },
  {
    id: "medium-horseshoe-crab",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Horseshoe Crab walking on Sandy Beach Coloring Page",
    subcategory: "Invertebrates",
    tags: ["horseshoe crab", "crab", "beach", "medium", "ocean life"],
    difficulty: "Medium",
    seoTitle: "Horseshoe Crab walking on Sandy Beach Coloring Page - Free PDF",
    seoDescription: "Horseshoe crab walking on sandy beach shoreline. Moderate shell details. Free PDF."
  },
  {
    id: "medium-sea-urchin",
    categoryId: "ocean",
    categoryName: "Ocean Life",
    title: "Sea Urchins on Rocky Coral Reef Coloring Page",
    subcategory: "Invertebrates",
    tags: ["sea urchin", "urchin", "reef", "medium", "ocean life"],
    difficulty: "Medium",
    seoTitle: "Sea Urchins on Rocky Coral Reef Coloring Page - Free PDF",
    seoDescription: "Download and print this detailed sea urchin group attached to a rocky reef structure. Free PDF."
  }
];

function run() {
  console.log(`=== Scaffolding ${newPagesList.length} New Marine Placeholders ===`);

  let createdCount = 0;

  for (const page of newPagesList) {
    const pagePath = path.join(CONTENT_DIR, page.categoryId, page.id);
    
    // 1. Create page directory
    if (!fs.existsSync(pagePath)) {
      fs.mkdirSync(pagePath, { recursive: true });
    }

    // 2. Write metadata.json
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

    // 3. Copy coming-soon.png as image.png
    const destImg = path.join(pagePath, 'image.png');
    fs.writeFileSync(destImg, placeholderBuffer);

    // 4. Create empty .is_placeholder marker file
    const markerPath = path.join(pagePath, '.is_placeholder');
    fs.writeFileSync(markerPath, '');

    // 5. Write mock printable.pdf
    const pdfPath = path.join(pagePath, 'printable.pdf');
    fs.writeFileSync(pdfPath, "MOCK PDF CONTENT\n", 'utf8');

    createdCount++;
    console.log(`  [CREATED] ${page.categoryId}/${page.id}`);
  }

  console.log(`\nSuccessfully scaffolded ${createdCount} marine page placeholders!`);
}

run();
