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
    id: "easy-spinosaurus",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Easy Spinosaurus Coloring Page",
    subcategory: "Carnivores",
    tags: ["dinosaur", "spinosaurus", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Free Easy Spinosaurus Coloring Page (Printable PDF)",
    seoDescription: "Download and print this simple kids Spinosaurus coloring page. Perfect for young children and toddlers. Free high-res PDF."
  },
  {
    id: "easy-ankylosaurus",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Easy Ankylosaurus Coloring Page",
    subcategory: "Armored Dinosaurs",
    tags: ["dinosaur", "ankylosaurus", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Ankylosaurus Coloring Page - Free PDF Print",
    seoDescription: "Download this cute, simple cartoon Ankylosaurus coloring page for toddlers and kids. Thick outlines and simple spaces. Free PDF."
  },
  {
    id: "easy-parasaurolophus",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Easy Parasaurolophus Coloring Page",
    subcategory: "Herbivores",
    tags: ["dinosaur", "parasaurolophus", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Parasaurolophus Kids Coloring Page - Free PDF",
    seoDescription: "Get creative with this simple Parasaurolophus coloring sheet for young kids. Easy to color with crayons. Free PDF."
  },
  {
    id: "easy-allosaurus",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Easy Allosaurus Coloring Page",
    subcategory: "Carnivores",
    tags: ["dinosaur", "allosaurus", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Allosaurus Coloring Page - Free PDF",
    seoDescription: "Download and print this simple Allosaurus coloring page. Great for preschool and elementary school children. Free PDF."
  },
  {
    id: "easy-carnotaurus",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Easy Carnotaurus Coloring Page",
    subcategory: "Carnivores",
    tags: ["dinosaur", "carnotaurus", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Carnotaurus Coloring Page - Free PDF",
    seoDescription: "Color a simple cartoon Carnotaurus with horns. Perfect for kids who love dinosaurs. Free PDF."
  },
  {
    id: "easy-dilophosaurus",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Easy Dilophosaurus Coloring Page",
    subcategory: "Carnivores",
    tags: ["dinosaur", "dilophosaurus", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Dilophosaurus Coloring Page - Free PDF",
    seoDescription: "Enjoy this simple Dilophosaurus coloring page for toddlers. Bold borders and large open coloring zones. Free PDF."
  },
  {
    id: "easy-plesiosaurus",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Easy Plesiosaurus Coloring Page",
    subcategory: "Marine Reptiles",
    tags: ["dinosaur", "plesiosaurus", "easy", "kids", "cartoon", "ocean"],
    difficulty: "Easy",
    seoTitle: "Easy Plesiosaurus Coloring Page - Free PDF",
    seoDescription: "Download and print this simple Plesiosaurus swimming in water. Perfect for young children. Free PDF."
  },
  {
    id: "easy-mosasaurus",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Easy Mosasaurus Coloring Page",
    subcategory: "Marine Reptiles",
    tags: ["dinosaur", "mosasaurus", "easy", "kids", "cartoon", "ocean"],
    difficulty: "Easy",
    seoTitle: "Easy Mosasaurus Coloring Page - Free PDF",
    seoDescription: "Simple and fun cartoon Mosasaurus swimming in the ocean. Toddler-friendly coloring page. Free PDF."
  },
  {
    id: "easy-saber-toothed-tiger",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Easy Saber-toothed Tiger Coloring Page",
    subcategory: "Prehistoric Mammals",
    tags: ["prehistoric", "smilodon", "tiger", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Saber-toothed Tiger Coloring Page - Free PDF",
    seoDescription: "Color this friendly cartoon Saber-toothed tiger with big fangs. Free printable PDF."
  },
  {
    id: "easy-woolly-mammoth",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Easy Woolly Mammoth Coloring Page",
    subcategory: "Prehistoric Mammals",
    tags: ["prehistoric", "mammoth", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Woolly Mammoth Coloring Page - Free PDF",
    seoDescription: "Download this simple cartoon Woolly Mammoth coloring sheet for toddlers and preschool kids. Free PDF."
  },
  {
    id: "easy-pachycephalosaurus",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Easy Pachycephalosaurus Coloring Page",
    subcategory: "Herbivores",
    tags: ["dinosaur", "pachycephalosaurus", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Pachycephalosaurus Coloring Page - Free PDF",
    seoDescription: "Simple outline of the dome-headed Pachycephalosaurus dinosaur. Free printable PDF."
  },
  {
    id: "easy-deinonychus",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Easy Deinonychus Coloring Page",
    subcategory: "Carnivores",
    tags: ["dinosaur", "deinonychus", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Deinonychus Coloring Page - Free PDF",
    seoDescription: "Easy cartoon Deinonychus coloring page for younger kids. Large areas to color. Free PDF."
  },
  {
    id: "easy-iguanodon",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Easy Iguanodon Coloring Page",
    subcategory: "Herbivores",
    tags: ["dinosaur", "iguanodon", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Iguanodon Coloring Page - Free PDF",
    seoDescription: "Download and print this simple Iguanodon coloring page for children. Free high-res PDF."
  },
  {
    id: "easy-baryonyx",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Easy Baryonyx Coloring Page",
    subcategory: "Carnivores",
    tags: ["dinosaur", "baryonyx", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Baryonyx Coloring Page - Free PDF",
    seoDescription: "Color a simple cartoon Baryonyx dinosaur. Perfect for kids who love prehistoric life. Free PDF."
  },
  {
    id: "easy-styracosaurus",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Easy Styracosaurus Coloring Page",
    subcategory: "Horned Dinosaurs",
    tags: ["dinosaur", "styracosaurus", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Styracosaurus Coloring Page - Free PDF",
    seoDescription: "Simple cartoon Styracosaurus with multiple horns on its frill. Toddler-friendly layout. Free PDF."
  },
  {
    id: "easy-dimetrodon",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Easy Dimetrodon Coloring Page",
    subcategory: "Prehistoric Creatures",
    tags: ["prehistoric", "dimetrodon", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Dimetrodon Coloring Page - Free PDF",
    seoDescription: "Color a simple cartoon Dimetrodon with a large sail on its back. Free printable PDF."
  },
  {
    id: "easy-gallimimus",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Easy Gallimimus Coloring Page",
    subcategory: "Herbivores",
    tags: ["dinosaur", "gallimimus", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Gallimimus Coloring Page - Free PDF",
    seoDescription: "Download this cute, simple cartoon Gallimimus coloring sheet for young kids. Free PDF."
  },
  {
    id: "easy-therizinosaurus",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Easy Therizinosaurus Coloring Page",
    subcategory: "Herbivores",
    tags: ["dinosaur", "therizinosaurus", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Therizinosaurus Coloring Page - Free PDF",
    seoDescription: "Simple outline of the long-clawed Therizinosaurus dinosaur. Free printable PDF."
  },
  {
    id: "easy-amargasaurus",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Easy Amargasaurus Coloring Page",
    subcategory: "Herbivores",
    tags: ["dinosaur", "amargasaurus", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Amargasaurus Coloring Page - Free PDF",
    seoDescription: "Simple cartoon Amargasaurus with neck spines. Toddler-friendly coloring page. Free PDF."
  },
  {
    id: "easy-quetzalcoatlus",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Easy Quetzalcoatlus Coloring Page",
    subcategory: "Pterosaurs",
    tags: ["pterosaur", "quetzalcoatlus", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Giant Quetzalcoatlus Coloring Page - Free PDF",
    seoDescription: "Easy cartoon Quetzalcoatlus flying in the air. Large areas to color. Free PDF."
  },
  {
    id: "easy-ichthyosaurus",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Easy Ichthyosaurus Coloring Page",
    subcategory: "Marine Reptiles",
    tags: ["dinosaur", "ichthyosaurus", "easy", "kids", "cartoon", "ocean"],
    difficulty: "Easy",
    seoTitle: "Easy Ichthyosaurus Coloring Page - Free PDF",
    seoDescription: "Simple cartoon Ichthyosaurus swimming in water. Perfect for young children. Free PDF."
  },
  {
    id: "easy-elasmosaurus",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Easy Elasmosaurus Coloring Page",
    subcategory: "Marine Reptiles",
    tags: ["dinosaur", "elasmosaurus", "easy", "kids", "cartoon", "ocean"],
    difficulty: "Easy",
    seoTitle: "Easy Elasmosaurus Coloring Page - Free PDF",
    seoDescription: "Color this friendly cartoon Elasmosaurus with a very long neck. Free printable PDF."
  },
  {
    id: "easy-kentrosaurus",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Easy Kentrosaurus Coloring Page",
    subcategory: "Armored Dinosaurs",
    tags: ["dinosaur", "kentrosaurus", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Kentrosaurus Coloring Page - Free PDF",
    seoDescription: "Simple outline of the spiky Kentrosaurus dinosaur. Free printable PDF."
  },
  {
    id: "easy-protoceratops",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Easy Protoceratops Coloring Page",
    subcategory: "Horned Dinosaurs",
    tags: ["dinosaur", "protoceratops", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Protoceratops Coloring Page - Free PDF",
    seoDescription: "Download and print this simple Protoceratops coloring page for kids. Free high-res PDF."
  },
  {
    id: "easy-coelophysis",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Easy Coelophysis Coloring Page",
    subcategory: "Carnivores",
    tags: ["dinosaur", "coelophysis", "easy", "kids", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Easy Coelophysis Coloring Page - Free PDF",
    seoDescription: "Simple and fun cartoon Coelophysis dinosaur outline. Toddler-friendly layout. Free PDF."
  },

  // === MEDIUM DIFFICULTIES (25 Pages) ===
  {
    id: "medium-spinosaurus",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Spinosaurus by a Prehistoric River Coloring Page",
    subcategory: "Carnivores",
    tags: ["dinosaur", "spinosaurus", "river", "prehistoric", "medium"],
    difficulty: "Medium",
    seoTitle: "Spinosaurus by a Prehistoric River Coloring Page - Free PDF",
    seoDescription: "Download and print this detailed Spinosaurus standing by a prehistoric river with palm trees. Free PDF."
  },
  {
    id: "medium-ankylosaurus",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Ankylosaurus in Prehistoric Forest Coloring Page",
    subcategory: "Armored Dinosaurs",
    tags: ["dinosaur", "ankylosaurus", "forest", "prehistoric", "medium"],
    difficulty: "Medium",
    seoTitle: "Ankylosaurus in Prehistoric Forest Coloring Page - Free PDF",
    seoDescription: "Color a detailed Ankylosaurus walking through a cycad forest. Moderate armor plating details. Free PDF."
  },
  {
    id: "medium-parasaurolophus",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Parasaurolophus Herd at Sunset Coloring Page",
    subcategory: "Herbivores",
    tags: ["dinosaur", "parasaurolophus", "sunset", "prehistoric", "medium"],
    difficulty: "Medium",
    seoTitle: "Parasaurolophus Herd at Sunset Coloring Page - Free PDF",
    seoDescription: "Detailed Parasaurolophus group grazing in a scenic plain under a prehistoric sunset. Free PDF."
  },
  {
    id: "medium-allosaurus",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Allosaurus Stalking Prey Coloring Page",
    subcategory: "Carnivores",
    tags: ["dinosaur", "allosaurus", "stalking", "prehistoric", "medium"],
    difficulty: "Medium",
    seoTitle: "Allosaurus Stalking Prey Coloring Page - Free PDF",
    seoDescription: "Clean line-art depiction of an Allosaurus predator navigating through prehistoric ferns. Free PDF."
  },
  {
    id: "medium-carnotaurus",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Carnotaurus on Volcano Slopes Coloring Page",
    subcategory: "Carnivores",
    tags: ["dinosaur", "carnotaurus", "volcano", "prehistoric", "medium"],
    difficulty: "Medium",
    seoTitle: "Carnotaurus on Volcano Slopes Coloring Page - Free PDF",
    seoDescription: "Detailed Carnotaurus walking on rocky volcanic terrain with ash clouds in the background. Free PDF."
  },
  {
    id: "medium-dilophosaurus",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Dilophosaurus displaying Neck Frill Coloring Page",
    subcategory: "Carnivores",
    tags: ["dinosaur", "dilophosaurus", "jungle", "prehistoric", "medium"],
    difficulty: "Medium",
    seoTitle: "Dilophosaurus displaying Neck Frill Coloring Page - Free PDF",
    seoDescription: "Dilophosaurus dinosaur displaying its iconic frills in a dense jungle. Moderate textures. Free PDF."
  },
  {
    id: "medium-plesiosaurus",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Plesiosaurus swimming in Deep Sea Coloring Page",
    subcategory: "Marine Reptiles",
    tags: ["dinosaur", "plesiosaurus", "ocean", "prehistoric", "medium"],
    difficulty: "Medium",
    seoTitle: "Plesiosaurus swimming in Deep Sea Coloring Page - Free PDF",
    seoDescription: "Download this detailed Plesiosaurus swimming underwater with fish and marine plants. Free PDF."
  },
  {
    id: "medium-mosasaurus",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Mosasaurus hunting Prehistoric Fish Coloring Page",
    subcategory: "Marine Reptiles",
    tags: ["dinosaur", "mosasaurus", "ocean", "prehistoric", "medium"],
    difficulty: "Medium",
    seoTitle: "Mosasaurus hunting Prehistoric Fish Coloring Page - Free PDF",
    seoDescription: "Detailed Mosasaurus chasing prehistoric fish through deep ocean water. Free high-res PDF."
  },
  {
    id: "medium-saber-toothed-tiger",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Saber-toothed Tiger on Rocky Outlook Coloring Page",
    subcategory: "Prehistoric Mammals",
    tags: ["prehistoric", "smilodon", "tiger", "scenic", "medium"],
    difficulty: "Medium",
    seoTitle: "Saber-toothed Tiger on Rocky Outlook Coloring Page - Free PDF",
    seoDescription: "Saber-toothed tiger standing on a cliff overlooking a prehistoric landscape. Moderate fur details. Free PDF."
  },
  {
    id: "medium-woolly-mammoth",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Woolly Mammoth in Snowy Tundra Coloring Page",
    subcategory: "Prehistoric Mammals",
    tags: ["prehistoric", "mammoth", "snow", "tundra", "medium"],
    difficulty: "Medium",
    seoTitle: "Woolly Mammoth in Snowy Tundra Coloring Page - Free PDF",
    seoDescription: "Detailed Woolly Mammoth walking through a snowy ice age plain with glaciers. Free PDF."
  },
  {
    id: "medium-pachycephalosaurus",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Pachycephalosaurus on Rocky Ridge Coloring Page",
    subcategory: "Herbivores",
    tags: ["dinosaur", "pachycephalosaurus", "ridge", "prehistoric", "medium"],
    difficulty: "Medium",
    seoTitle: "Pachycephalosaurus on Rocky Ridge Coloring Page - Free PDF",
    seoDescription: "Pachycephalosaurus standing on a rocky hill with conifers in the background. Free PDF."
  },
  {
    id: "medium-deinonychus",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Deinonychus hunting in Ferns Coloring Page",
    subcategory: "Carnivores",
    tags: ["dinosaur", "deinonychus", "ferns", "prehistoric", "medium"],
    difficulty: "Medium",
    seoTitle: "Deinonychus hunting in Ferns Coloring Page - Free PDF",
    seoDescription: "Clean line-art depiction of a quick Deinonychus hunting through dense fern ground cover. Free PDF."
  },
  {
    id: "medium-iguanodon",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Iguanodon eating Conifer Leaves Coloring Page",
    subcategory: "Herbivores",
    tags: ["dinosaur", "iguanodon", "conifer", "prehistoric", "medium"],
    difficulty: "Medium",
    seoTitle: "Iguanodon eating Conifer Leaves Coloring Page - Free PDF",
    seoDescription: "Detailed Iguanodon standing on two legs to eat leaves from a tall conifer branch. Free PDF."
  },
  {
    id: "medium-baryonyx",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Baryonyx catching Fish Coloring Page",
    subcategory: "Carnivores",
    tags: ["dinosaur", "baryonyx", "lake", "prehistoric", "medium"],
    difficulty: "Medium",
    seoTitle: "Baryonyx catching Fish Coloring Page - Free PDF",
    seoDescription: "Detailed Baryonyx using its large claws to catch fish in a shallow lake. Free PDF."
  },
  {
    id: "medium-styracosaurus",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Styracosaurus in Prehistoric Valley Coloring Page",
    subcategory: "Horned Dinosaurs",
    tags: ["dinosaur", "styracosaurus", "valley", "prehistoric", "medium"],
    difficulty: "Medium",
    seoTitle: "Styracosaurus in Prehistoric Valley Coloring Page - Free PDF",
    seoDescription: "Styracosaurus walking through a scenic prehistoric valley with mountains. Moderate textures. Free PDF."
  },
  {
    id: "medium-dimetrodon",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Dimetrodon Sunning on a Log Coloring Page",
    subcategory: "Prehistoric Creatures",
    tags: ["prehistoric", "dimetrodon", "sun", "swamp", "medium"],
    difficulty: "Medium",
    seoTitle: "Dimetrodon Sunning on a Log Coloring Page - Free PDF",
    seoDescription: "Dimetrodon resting on a log in a primeval swamp. Detailed sail and skin textures. Free PDF."
  },
  {
    id: "medium-gallimimus",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Gallimimus Running in Plains Coloring Page",
    subcategory: "Herbivores",
    tags: ["dinosaur", "gallimimus", "plains", "prehistoric", "medium"],
    difficulty: "Medium",
    seoTitle: "Gallimimus Running in Plains Coloring Page - Free PDF",
    seoDescription: "Speeding Gallimimus sprinting across a prehistoric open plain with cycads. Free PDF."
  },
  {
    id: "medium-therizinosaurus",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Therizinosaurus in Jungle Forest Coloring Page",
    subcategory: "Herbivores",
    tags: ["dinosaur", "therizinosaurus", "jungle", "prehistoric", "medium"],
    difficulty: "Medium",
    seoTitle: "Therizinosaurus in Jungle Forest Coloring Page - Free PDF",
    seoDescription: "Therizinosaurus displaying its giant hand claws inside a dense forest jungle. Free PDF."
  },
  {
    id: "medium-amargasaurus",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Amargasaurus by a Lake Shore Coloring Page",
    subcategory: "Herbivores",
    tags: ["dinosaur", "amargasaurus", "lake", "prehistoric", "medium"],
    difficulty: "Medium",
    seoTitle: "Amargasaurus by a Lake Shore Coloring Page - Free PDF",
    seoDescription: "Amargasaurus grazing by a lake shoreline. Moderate spine and skin details. Free PDF."
  },
  {
    id: "medium-quetzalcoatlus",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Quetzalcoatlus soaring over Volcanoes Coloring Page",
    subcategory: "Pterosaurs",
    tags: ["pterosaur", "quetzalcoatlus", "volcano", "prehistoric", "medium"],
    difficulty: "Medium",
    seoTitle: "Quetzalcoatlus soaring over Volcanoes Coloring Page - Free PDF",
    seoDescription: "Giant Quetzalcoatlus pterosaur soaring high over a landscape of active volcanoes. Free PDF."
  },
  {
    id: "medium-ichthyosaurus",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Ichthyosaurus in Coral Reef Coloring Page",
    subcategory: "Marine Reptiles",
    tags: ["dinosaur", "ichthyosaurus", "reef", "prehistoric", "medium"],
    difficulty: "Medium",
    seoTitle: "Ichthyosaurus in Coral Reef Coloring Page - Free PDF",
    seoDescription: "Detailed Ichthyosaurus swimming among prehistoric coral formations. Free PDF."
  },
  {
    id: "medium-elasmosaurus",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Elasmosaurus hunting near Surface Coloring Page",
    subcategory: "Marine Reptiles",
    tags: ["dinosaur", "elasmosaurus", "ocean", "prehistoric", "medium"],
    difficulty: "Medium",
    seoTitle: "Elasmosaurus hunting near Surface Coloring Page - Free PDF",
    seoDescription: "Elasmosaurus using its extremely long neck to grab fish near the ocean surface. Free PDF."
  },
  {
    id: "medium-kentrosaurus",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Kentrosaurus in Conifer Forest Coloring Page",
    subcategory: "Armored Dinosaurs",
    tags: ["dinosaur", "kentrosaurus", "forest", "prehistoric", "medium"],
    difficulty: "Medium",
    seoTitle: "Kentrosaurus in Conifer Forest Coloring Page - Free PDF",
    seoDescription: "Kentrosaurus showing its array of shoulder spikes and tail plates in a conifer forest. Free PDF."
  },
  {
    id: "medium-protoceratops",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Protoceratops in Desert Dunes Coloring Page",
    subcategory: "Horned Dinosaurs",
    tags: ["dinosaur", "protoceratops", "desert", "prehistoric", "medium"],
    difficulty: "Medium",
    seoTitle: "Protoceratops in Desert Dunes Coloring Page - Free PDF",
    seoDescription: "Detailed Protoceratops navigating through desert sand dunes. Moderate textures. Free PDF."
  },
  {
    id: "medium-coelophysis",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Coelophysis Hunt in Prehistoric Forest Coloring Page",
    subcategory: "Carnivores",
    tags: ["dinosaur", "coelophysis", "forest", "prehistoric", "medium"],
    difficulty: "Medium",
    seoTitle: "Coelophysis Hunt in Prehistoric Forest Coloring Page - Free PDF",
    seoDescription: "Coelophysis dinosaur hunting through prehistoric ginkgo trees. Moderate details. Free PDF."
  }
];

function run() {
  console.log(`=== Scaffolding ${newPagesList.length} New Dinosaur Placeholders ===`);

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

  console.log(`\nSuccessfully scaffolded ${createdCount} dinosaur page placeholders!`);
}

run();
