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
  // 1. Easy Construction Vehicles
  {
    id: "easy-toy-excavator",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Easy Toy Excavator Coloring Page",
    subcategory: "Construction",
    tags: ["excavator", "toy", "kids", "digging", "construction"],
    difficulty: "Easy",
    seoTitle: "Free Easy Toy Excavator Coloring Page (Printable PDF)",
    seoDescription: "Download and print this simple kids toy excavator coloring page. Perfect for young children and toddlers. Free high-res PDF."
  },
  {
    id: "easy-cartoon-bulldozer",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Easy Cartoon Bulldozer Coloring Page",
    subcategory: "Construction",
    tags: ["bulldozer", "cartoon", "tractor", "pushing", "construction"],
    difficulty: "Easy",
    seoTitle: "Easy Cartoon Bulldozer Coloring Page - Free PDF Print",
    seoDescription: "Download this cute, simple cartoon bulldozer coloring page for toddlers and kids. Thick outlines and simple spaces. Free PDF."
  },
  {
    id: "easy-dump-truck",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Easy Dump Truck Coloring Page",
    subcategory: "Construction",
    tags: ["dump truck", "kids", "simple", "truck", "construction"],
    difficulty: "Easy",
    seoTitle: "Easy Dump Truck Kids Coloring Page - Free PDF",
    seoDescription: "Get creative with this simple dump truck coloring sheet for young kids. Easy to color with crayons or markers. Free PDF."
  },
  {
    id: "easy-cement-mixer",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Easy Cement Mixer Coloring Page",
    subcategory: "Construction",
    tags: ["cement mixer", "kids", "simple", "concrete", "construction"],
    difficulty: "Easy",
    seoTitle: "Easy Cement Mixer Construction Coloring Page - Free PDF",
    seoDescription: "Download and print this simple cement mixer coloring page. Great for preschool and elementary school children. Free PDF."
  },
  {
    id: "easy-mobile-crane",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Easy Mobile Crane Coloring Page",
    subcategory: "Construction",
    tags: ["mobile crane", "kids", "hook", "lifting", "construction"],
    difficulty: "Easy",
    seoTitle: "Easy Mobile Crane Truck Coloring Page - Free PDF",
    seoDescription: "Color a simple mobile crane lifting a block. Perfect for kids who love trucks and construction gear. Free PDF."
  },
  {
    id: "easy-road-roller",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Easy Road Roller Coloring Page",
    subcategory: "Construction",
    tags: ["road roller", "steamroller", "kids", "flat", "construction"],
    difficulty: "Easy",
    seoTitle: "Easy Road Roller Steamroller Coloring Page - Free PDF",
    seoDescription: "Enjoy this simple road roller coloring page for toddlers. Bold borders and large open coloring zones. Free PDF."
  },
  {
    id: "easy-skid-steer-loader",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Easy Skid Steer Loader Coloring Page",
    subcategory: "Construction",
    tags: ["skid steer", "bobcat", "kids", "bucket", "construction"],
    difficulty: "Easy",
    seoTitle: "Easy Skid Steer Bobcat Loader Coloring Page - Free PDF",
    seoDescription: "Download and print this easy skid steer loader coloring sheet. Great for young truck fans. Free PDF."
  },
  {
    id: "easy-backhoe-loader",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Easy Backhoe Loader Coloring Page",
    subcategory: "Construction",
    tags: ["backhoe", "kids", "simple", "tractor", "construction"],
    difficulty: "Easy",
    seoTitle: "Easy Backhoe Loader Digger Coloring Page - Free PDF",
    seoDescription: "Print this simple backhoe loader coloring page. Thick outlines and simple details for toddlers. Free high-res PDF."
  },
  {
    id: "easy-forklift",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Easy Forklift Coloring Page",
    subcategory: "Construction",
    tags: ["forklift", "warehouse", "kids", "simple", "industrial"],
    difficulty: "Easy",
    seoTitle: "Easy Warehouse Forklift Toy Coloring Page - Free PDF",
    seoDescription: "Color a simple warehouse forklift lifting a box. Designed for toddlers and young kids. Free PDF."
  },
  {
    id: "easy-asphalt-paver",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Easy Asphalt Paver Coloring Page",
    subcategory: "Construction",
    tags: ["paver", "road", "simple", "kids", "construction"],
    difficulty: "Easy",
    seoTitle: "Easy Asphalt Road Paver Coloring Page - Free PDF",
    seoDescription: "Download this simple road asphalt paving machine coloring sheet. High-resolution free printable PDF for kids."
  },
  {
    id: "easy-trench-digger",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Easy Trench Digger Coloring Page",
    subcategory: "Construction",
    tags: ["trencher", "kids", "simple", "excavation", "construction"],
    difficulty: "Easy",
    seoTitle: "Easy Trench Digger Machine Coloring Page - Free PDF",
    seoDescription: "Color a simple trench digger excavation machine. Ideal for young children. Free high-res printable PDF."
  },
  {
    id: "easy-pile-driver",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Easy Pile Driver Coloring Page",
    subcategory: "Construction",
    tags: ["pile driver", "foundation", "kids", "simple", "construction"],
    difficulty: "Easy",
    seoTitle: "Easy Foundation Pile Driver Coloring Page - Free PDF",
    seoDescription: "Print this simple foundation pile driver machine coloring page. Ideal for preschool and kindergartners. Free PDF."
  },
  {
    id: "easy-crawler-crane",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Easy Crawler Crane Coloring Page",
    subcategory: "Construction",
    tags: ["crawler crane", "simple", "kids", "crane", "construction"],
    difficulty: "Easy",
    seoTitle: "Easy Crawler Crane Construction Coloring Page - Free PDF",
    seoDescription: "Color an easy crawler crane lifting construction materials. Simple shapes and thick contours. Free PDF."
  },
  {
    id: "easy-wrecking-ball-crane",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Easy Wrecking Ball Crane Coloring Page",
    subcategory: "Construction",
    tags: ["wrecking ball", "crane", "demolition", "kids", "construction"],
    difficulty: "Easy",
    seoTitle: "Easy Demolition Wrecking Ball Crane Coloring Page - Free PDF",
    seoDescription: "Enjoy this simple demolition wrecking ball crane coloring page. Perfect for young builders. Free PDF."
  },
  {
    id: "easy-concrete-pump-truck",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Easy Concrete Pump Truck Coloring Page",
    subcategory: "Construction",
    tags: ["concrete pump", "pump truck", "kids", "simple", "construction"],
    difficulty: "Easy",
    seoTitle: "Easy Concrete Pump Truck Coloring Page - Free PDF Print",
    seoDescription: "Download this simple concrete pump truck coloring page. High-resolution free printable PDF for kids."
  },
  {
    id: "easy-motor-grader",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Easy Motor Grader Coloring Page",
    subcategory: "Construction",
    tags: ["motor grader", "road grader", "simple", "kids", "construction"],
    difficulty: "Easy",
    seoTitle: "Easy Motor Grader Road Coloring Page - Free PDF",
    seoDescription: "Color a simple motor grader road leveling machine. Bold lines and easy coloring sections. Free PDF."
  },
  {
    id: "easy-compact-excavator",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Easy Compact Excavator Coloring Page",
    subcategory: "Construction",
    tags: ["mini excavator", "compact digger", "kids", "simple", "construction"],
    difficulty: "Easy",
    seoTitle: "Easy Compact Mini Excavator Coloring Page - Free PDF",
    seoDescription: "Enjoy coloring this easy mini compact excavator digger page. Free high-resolution printable PDF for kids."
  },

  // 2. Medium Construction Vehicles
  {
    id: "medium-crawler-excavator",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Crawler Excavator Coloring Page",
    subcategory: "Construction",
    tags: ["crawler excavator", "digger", "heavy equipment", "construction", "scenic"],
    difficulty: "Medium",
    seoTitle: "Crawler Excavator Digger Coloring Page - Free PDF Download",
    seoDescription: "Print this detailed crawler excavator digger page on a construction site. Free high-resolution printable PDF."
  },
  {
    id: "medium-heavy-bulldozer",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Heavy Bulldozer Coloring Page",
    subcategory: "Construction",
    tags: ["bulldozer", "earthmover", "construction site", "heavy machinery"],
    difficulty: "Medium",
    seoTitle: "Heavy Construction Bulldozer Coloring Page - Free PDF",
    seoDescription: "Color a heavy bulldozer moving dirt on a construction site. Medium difficulty with detailed gears and treads. Free PDF."
  },
  {
    id: "medium-mining-dump-truck",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Mining Dump Truck Coloring Page",
    subcategory: "Construction",
    tags: ["dump truck", "mining truck", "heavy machinery", "industry"],
    difficulty: "Medium",
    seoTitle: "Huge Mining Dump Truck Coloring Page - Free PDF Print",
    seoDescription: "Color a massive off-road mining dump truck hauling heavy rock. Great for older kids and vehicle fans. Free PDF."
  },
  {
    id: "medium-rotating-cement-mixer",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Concrete Cement Mixer Truck Coloring Page",
    subcategory: "Construction",
    tags: ["cement mixer", "concrete truck", "construction", "industrial"],
    difficulty: "Medium",
    seoTitle: "Concrete Cement Mixer Truck Coloring Page - Free PDF",
    seoDescription: "Download this medium difficulty concrete mixer truck coloring page with construction backdrop. Free PDF."
  },
  {
    id: "medium-tower-crane-construction",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Tower Crane on Construction Site Coloring Page",
    subcategory: "Construction",
    tags: ["tower crane", "construction site", "cityscape", "building"],
    difficulty: "Medium",
    seoTitle: "Tower Crane on Construction Site Coloring Page - Free PDF",
    seoDescription: "Download and print this detailed tower crane building a skyscraper in the city. Free high-res PDF."
  },
  {
    id: "medium-asphalt-road-roller",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Asphalt Compactor Road Roller Coloring Page",
    subcategory: "Construction",
    tags: ["road construction", "asphalt roller", "compactor", "heavy machinery"],
    difficulty: "Medium",
    seoTitle: "Asphalt Road Roller Compactor Coloring Page - Free PDF",
    seoDescription: "Color a heavy road compactor roller finishing a new street pavement. Medium difficulty. Free PDF."
  },
  {
    id: "medium-skid-steer-bucket",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Skid Steer Loader with Dirt Bucket Coloring Page",
    subcategory: "Construction",
    tags: ["skid steer", "loader", "bucket", "construction site"],
    difficulty: "Medium",
    seoTitle: "Skid Steer Loader with Dirt Bucket Coloring Page - Free PDF",
    seoDescription: "Enjoy coloring this detailed skid steer bobcat loader bucket page. Free high-resolution printable PDF."
  },
  {
    id: "medium-backhoe-digging",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Backhoe Loader Digging Ditch Coloring Page",
    subcategory: "Construction",
    tags: ["backhoe", "trench", "hydraulic arm", "digger", "construction"],
    difficulty: "Medium",
    seoTitle: "Backhoe Loader Digging Trench Coloring Page - Free PDF",
    seoDescription: "Download this medium difficulty backhoe loader digging a trench on a construction site. Free printable PDF."
  },
  {
    id: "medium-warehouse-forklift",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Warehouse Industrial Forklift Coloring Page",
    subcategory: "Construction",
    tags: ["forklift", "warehouse", "industrial", "pallet lift"],
    difficulty: "Medium",
    seoTitle: "Warehouse Industrial Forklift Lift Coloring Page - Free PDF",
    seoDescription: "Color a detailed industrial forklift moving pallets in a warehouse setting. Free high-res PDF."
  },
  {
    id: "medium-highway-asphalt-paver",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Highway Asphalt Paver Coloring Page",
    subcategory: "Construction",
    tags: ["paver", "road construction", "highway", "heavy machinery"],
    difficulty: "Medium",
    seoTitle: "Highway Road Asphalt Paver Coloring Page - Free PDF",
    seoDescription: "Color a detailed asphalt paving machine working on a highway project. Free printable PDF."
  },
  {
    id: "medium-heavy-trench-digger",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Heavy Trench Digger Machine Coloring Page",
    subcategory: "Construction",
    tags: ["trencher", "excavation", "pipeline", "heavy machinery"],
    difficulty: "Medium",
    seoTitle: "Heavy Utility Trench Digger Machine Coloring Page - Free PDF",
    seoDescription: "Print this detailed trench digging excavator working on a pipeline foundation. Free PDF."
  },
  {
    id: "medium-foundation-pile-driver",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Foundation Pile Driver Machine Coloring Page",
    subcategory: "Construction",
    tags: ["pile driver", "foundation", "steel pile", "construction site"],
    difficulty: "Medium",
    seoTitle: "Foundation Pile Driver Construction Page - Free PDF",
    seoDescription: "Enjoy coloring this heavy pile driver putting steel foundation beams into the ground. Free PDF."
  },
  {
    id: "medium-demolition-wrecking-ball",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Demolition Crane with Wrecking Ball Coloring Page",
    subcategory: "Construction",
    tags: ["wrecking ball", "demolition", "crane", "destruction", "scenic"],
    difficulty: "Medium",
    seoTitle: "Demolition Crane with Wrecking Ball Coloring Page - Free PDF",
    seoDescription: "Print this action-packed demolition crane swinging its wrecking ball against a brick wall. Free PDF."
  },
  {
    id: "medium-heavy-crawler-crane",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Heavy Industrial Crawler Crane Coloring Page",
    subcategory: "Construction",
    tags: ["crawler crane", "latticed boom", "lifting", "industrial site"],
    difficulty: "Medium",
    seoTitle: "Heavy Industrial Crawler Crane Coloring Page - Free PDF",
    seoDescription: "Color a massive heavy-duty crawler crane lifting steel beams on a factory site. Free PDF."
  },
  {
    id: "medium-boom-concrete-pump",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Concrete Boom Pump Truck Coloring Page",
    subcategory: "Construction",
    tags: ["concrete pump", "boom pump", "high rise", "pouring concrete"],
    difficulty: "Medium",
    seoTitle: "High-Reach Concrete Boom Pump Truck Coloring Page - Free PDF",
    seoDescription: "Download this concrete boom pump truck pouring concrete on a high-reach construction deck. Free PDF."
  },
  {
    id: "medium-road-grading-machine",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Motor Grader Road Machine Coloring Page",
    subcategory: "Construction",
    tags: ["motor grader", "road grading", "dirt leveling", "heavy machinery"],
    difficulty: "Medium",
    seoTitle: "Motor Grader Leveling Dirt Road Coloring Page - Free PDF",
    seoDescription: "Color a detailed road grader machine leveling dirt on a highway site. Medium difficulty. Free PDF."
  },
  {
    id: "medium-compact-track-loader",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Compact Track Loader Bobcat Coloring Page",
    subcategory: "Construction",
    tags: ["mini loader", "track loader", "bobcat", "dirt bucket"],
    difficulty: "Medium",
    seoTitle: "Mini Compact Track Loader Bobcat Coloring Page - Free PDF",
    seoDescription: "Enjoy coloring this mini track loader moving dirt with its scoop bucket. Free printable PDF."
  },

  // 3. Easy Monster Trucks
  {
    id: "easy-monster-truck-jumping",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Easy Monster Truck Jumping Coloring Page",
    subcategory: "Monster Trucks",
    tags: ["monster truck", "jump", "arena", "easy", "stunt"],
    difficulty: "Easy",
    seoTitle: "Easy Monster Truck Jumping Stunt Coloring Page - Free PDF",
    seoDescription: "Download this simple monster truck jumping off a dirt ramp coloring page. Bold lines for kids. Free PDF."
  },
  {
    id: "easy-smiling-monster-truck",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Easy Smiling Cartoon Monster Truck Coloring Page",
    subcategory: "Monster Trucks",
    tags: ["monster truck", "cartoon", "smiling", "kids", "simple"],
    difficulty: "Easy",
    seoTitle: "Easy Smiling Cartoon Monster Truck Coloring Page - Free PDF",
    seoDescription: "Color a cute smiling cartoon monster truck with giant wheels. Great for preschool and young kids. Free PDF."
  },
  {
    id: "easy-cartoon-monster-truck",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Easy Cartoon Monster Truck Coloring Page",
    subcategory: "Monster Trucks",
    tags: ["monster truck", "cartoon", "simple", "kids", "thick lines"],
    difficulty: "Easy",
    seoTitle: "Easy Cartoon Monster Truck Coloring Page - Free PDF Print",
    seoDescription: "Enjoy this simple cartoon monster truck coloring sheet with thick lines and zero shading. Free PDF."
  },
  {
    id: "easy-big-wheel-monster-truck",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Easy Big Wheel Monster Truck Coloring Page",
    subcategory: "Monster Trucks",
    tags: ["monster truck", "big wheels", "tires", "easy", "kids"],
    difficulty: "Easy",
    seoTitle: "Easy Giant Wheels Monster Truck Coloring Page - Free PDF",
    seoDescription: "Color a simple monster truck emphasizing its giant rubber tires. Easy for kids. Free printable PDF."
  },
  {
    id: "easy-classic-monster-truck",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Easy Classic Monster Truck Coloring Page",
    subcategory: "Monster Trucks",
    tags: ["monster truck", "classic", "1980s", "simple", "truck"],
    difficulty: "Easy",
    seoTitle: "Easy Classic 80s Monster Truck Coloring Page - Free PDF",
    seoDescription: "Download this simple 1980s retro style monster truck coloring page. Clean outlines. Free PDF."
  },
  {
    id: "easy-mini-monster-truck",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Easy Mini Monster Truck Coloring Page",
    subcategory: "Monster Trucks",
    tags: ["monster truck", "mini", "toy truck", "easy", "kids"],
    difficulty: "Easy",
    seoTitle: "Easy Mini Toy Monster Truck Coloring Page - Free PDF",
    seoDescription: "Color a small, adorable toy monster truck with chunky tires. Designed for young toddlers. Free PDF."
  },
  {
    id: "easy-skull-monster-truck",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Easy Skull Theme Monster Truck Coloring Page",
    subcategory: "Monster Trucks",
    tags: ["monster truck", "skull", "spooky", "easy", "cool"],
    difficulty: "Easy",
    seoTitle: "Easy Skull Design Monster Truck Coloring Page - Free PDF",
    seoDescription: "Color a cool skull-themed monster truck with simple lines and bold outlines. Free high-res PDF."
  },
  {
    id: "easy-shark-monster-truck",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Easy Shark Design Monster Truck Coloring Page",
    subcategory: "Monster Trucks",
    tags: ["monster truck", "shark", "ocean theme", "easy", "cool"],
    difficulty: "Easy",
    seoTitle: "Easy Shark Monster Truck Coloring Page - Free PDF Print",
    seoDescription: "Get creative with this simple shark-shaped body monster truck coloring page. Free high-res PDF."
  },

  // 4. Medium Monster Trucks
  {
    id: "medium-monster-truck-crushing-cars",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Monster Truck Crushing Cars Coloring Page",
    subcategory: "Monster Trucks",
    tags: ["monster truck", "crushing cars", "stadium show", "destruction", "action"],
    difficulty: "Medium",
    seoTitle: "Monster Truck Crushing Old Cars Coloring Page - Free PDF",
    seoDescription: "Print this dynamic action scene of a monster truck driving over and crushing scrap cars. Free PDF."
  },
  {
    id: "medium-racing-monster-truck",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Racing Monster Truck in Stadium Coloring Page",
    subcategory: "Monster Trucks",
    tags: ["monster truck", "racing", "stadium", "crowd", "spectators"],
    difficulty: "Medium",
    seoTitle: "Racing Monster Truck Stadium Event Coloring Page - Free PDF",
    seoDescription: "Color a fast-moving racing monster truck in a packed sports arena under the floodlights. Free PDF."
  },
  {
    id: "medium-flaming-monster-truck",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Flaming Decal Monster Truck Coloring Page",
    subcategory: "Monster Trucks",
    tags: ["monster truck", "flames", "decals", "arena jump", "stunt"],
    difficulty: "Medium",
    seoTitle: "Stunt Monster Truck with Flame Decals Coloring Page - Free PDF",
    seoDescription: "Color a custom monster truck with classic flame decals leaping off a giant dirt ramp. Free PDF."
  },
  {
    id: "medium-mud-racing-monster-truck",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Mud Racing Monster Truck Splashing Coloring Page",
    subcategory: "Monster Trucks",
    tags: ["monster truck", "mud racing", "splashing mud", "outdoor track"],
    difficulty: "Medium",
    seoTitle: "Mud Racing Monster Truck Mud Splash Coloring Page - Free PDF",
    seoDescription: "Download this outdoor mud bog racing monster truck scene with splashing dirt details. Free PDF."
  },
  {
    id: "medium-stunt-monster-truck",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Stunt Monster Truck Arena Jump Coloring Page",
    subcategory: "Monster Trucks",
    tags: ["monster truck", "stunt jump", "mid-air flip", "arena show"],
    difficulty: "Medium",
    seoTitle: "Stunt Monster Truck Mid-Air Arena Jump Coloring Page - Free PDF",
    seoDescription: "Download and print this thrilling shot of a monster truck doing a huge aerial jump. Free PDF."
  },
  {
    id: "medium-desert-monster-truck",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Desert Racing Monster Truck Coloring Page",
    subcategory: "Monster Trucks",
    tags: ["monster truck", "desert", "sand dunes", "cacti", "off-road"],
    difficulty: "Medium",
    seoTitle: "Desert Off-Road Monster Truck Dunes Coloring Page - Free PDF",
    seoDescription: "Color an off-road monster truck speeding over desert sand dunes with scenic cacti backdrop. Free PDF."
  },
  {
    id: "medium-arena-monster-truck-jump",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Arena Monster Truck Jump Show Coloring Page",
    subcategory: "Monster Trucks",
    tags: ["monster truck", "arena show", "jump", "stadium crowd"],
    difficulty: "Medium",
    seoTitle: "Arena Monster Truck Jump Show Coloring Page - Free PDF",
    seoDescription: "Color a detailed monster truck show in front of stadium crowds with ramps and lights. Free PDF."
  },
  {
    id: "medium-freestyle-monster-truck",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Freestyle Monster Truck Show Coloring Page",
    subcategory: "Monster Trucks",
    tags: ["monster truck", "freestyle", "arena show", "stunt driving"],
    difficulty: "Medium",
    seoTitle: "Freestyle Monster Truck Show Action Coloring Page - Free PDF",
    seoDescription: "Enjoy coloring this dynamic freestyle monster truck stunt show coloring sheet. Free PDF."
  }
];

function run() {
  console.log(`=== Scaffolding ${newPagesList.length} New Backlog Placeholders ===`);

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

  console.log(`\nSuccessfully scaffolded ${createdCount} page placeholders!`);
}

run();
