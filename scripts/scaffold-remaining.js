const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '../public/content');
const PLACEHOLDER_SOURCE = path.join(CONTENT_DIR, 'animals', 'playful-kitten', 'image.png');

// Verify that our base placeholder image exists
if (!fs.existsSync(PLACEHOLDER_SOURCE)) {
  console.error(`CRITICAL ERROR: Base placeholder image not found at ${PLACEHOLDER_SOURCE}!`);
  process.exit(1);
}

// Complete Taxonomy Config with all 30 Categories and 124 Subcategories
const taxonomy = {
  animals: {
    categoryName: "Animals",
    subcategories: [
      {
        name: "Cats",
        easy: { id: "playful-kitten", title: "Playful Kitten", tags: ["cat", "kitten", "cute", "pets"] },
        medium: { id: "sleeping-tabby", title: "Sleeping Tabby Cat", tags: ["cat", "tabby", "sleeping", "pets"] },
        hard: { id: "mystic-cat-mandala", title: "Mystic Cat Mandala", tags: ["cat", "mandala", "mystic", "intricate"] }
      },
      {
        name: "Dogs",
        easy: { id: "happy-golden-retriever", title: "Happy Golden Retriever", tags: ["dog", "puppy", "golden retriever", "kids"] },
        medium: { id: "german-shepherd-patrol", title: "German Shepherd Patrol", tags: ["dog", "german shepherd", "patrol", "scenic"] },
        hard: { id: "detailed-husky-portrait", title: "Detailed Husky Portrait", tags: ["dog", "husky", "portrait", "intricate"] }
      },
      {
        name: "Farm Animals",
        easy: { id: "simple-cartoon-cow", title: "Simple Cartoon Cow", tags: ["cow", "farm", "animal", "toddler"] },
        medium: { id: "farmyard-pig-scene", title: "Farmyard Pig Scene", tags: ["pig", "farm", "muddy", "scenic"] },
        hard: { id: "detailed-sheep-mandala", title: "Detailed Sheep Mandala", tags: ["sheep", "farm", "mandala", "intricate"] }
      },
      {
        name: "Forest Wildlife",
        easy: { id: "cute-baby-squirrel", title: "Cute Baby Squirrel", tags: ["squirrel", "forest", "acorn", "cute"] },
        medium: { id: "proud-forest-stag", title: "Proud Forest Stag", tags: ["deer", "stag", "forest", "scenic"] },
        hard: { id: "intricate-owl-woodland", title: "Intricate Owl Woodland Scene", tags: ["owl", "bird", "forest", "intricate"] }
      },
      {
        name: "Jungle & Safari",
        easy: { id: "simple-baby-elephant", title: "Simple Baby Elephant", tags: ["elephant", "jungle", "safari", "cute"] },
        medium: { id: "majestic-lion", title: "Majestic Lion", tags: ["lion", "safari", "wildlife", "cat"] },
        hard: { id: "intricate-safari-giraffe", title: "Intricate Safari Giraffe", tags: ["giraffe", "safari", "patterns", "intricate"] }
      }
    ]
  },
  mandalas: {
    categoryName: "Mandalas",
    subcategories: [
      {
        name: "Floral",
        easy: { id: "simple-flower-mandala", title: "Simple Flower Mandala", tags: ["mandala", "flower", "simple", "kids"] },
        medium: { id: "balanced-blossom-mandala", title: "Balanced Blossom Mandala", tags: ["mandala", "flower", "blossom", "symmetric"] },
        hard: { id: "floral-mandala", title: "Intricate Floral Mandala", tags: ["mandala", "flower", "floral", "intricate"] }
      },
      {
        name: "Geometric",
        easy: { id: "easy-star-pattern", title: "Easy Star Pattern Mandala", tags: ["mandala", "geometric", "star", "simple"] },
        medium: { id: "symmetric-hex-mandala", title: "Symmetric Hex Mandala", tags: ["mandala", "geometric", "hex", "symmetric"] },
        hard: { id: "complex-fractal-geometry", title: "Complex Fractal Geometry Mandala", tags: ["mandala", "geometric", "fractal", "intricate"] }
      },
      {
        name: "Animal Mandalas",
        easy: { id: "cute-turtle-mandala", title: "Cute Turtle Mandala", tags: ["mandala", "animal", "turtle", "cute"] },
        medium: { id: "proud-lion-mandala", title: "Proud Lion Mandala", tags: ["mandala", "animal", "lion", "symmetric"] },
        hard: { id: "intricate-peacock-mandala", title: "Intricate Peacock Mandala", tags: ["mandala", "animal", "peacock", "intricate"] }
      },
      {
        name: "Abstract Circular",
        easy: { id: "simple-spiral-wheel", title: "Simple Spiral Wheel Mandala", tags: ["mandala", "abstract", "spiral", "easy"] },
        medium: { id: "balanced-vortex-art", title: "Balanced Vortex Art Mandala", tags: ["mandala", "abstract", "vortex", "geometric"] },
        hard: { id: "dense-cosmic-mandala", title: "Dense Cosmic Mandala", tags: ["mandala", "abstract", "cosmic", "intricate"] }
      }
    ]
  },
  nature: {
    categoryName: "Nature & Landscapes",
    subcategories: [
      {
        name: "Landscapes",
        easy: { id: "simple-flat-hills", title: "Simple Flat Hills Landscape", tags: ["nature", "hills", "valley", "easy"] },
        medium: { id: "mountain-lake", title: "Serene Mountain Lake Landscape", tags: ["nature", "mountain", "lake", "scenic"] },
        hard: { id: "intricate-canyon-river", title: "Intricate Canyon River Landscape", tags: ["nature", "canyon", "river", "intricate"] }
      },
      {
        name: "Mountains",
        easy: { id: "simple-peaks-sun", title: "Simple Mountain Peaks and Sun", tags: ["nature", "mountain", "sun", "easy"] },
        medium: { id: "mountain-cabin-scene", title: "Mountain Cabin Landscape", tags: ["nature", "mountain", "cabin", "cozy"] },
        hard: { id: "majestic-everest-climb", title: "Majestic Everest Climb Scene", tags: ["nature", "mountain", "climb", "intricate"] }
      },
      {
        name: "Forests",
        easy: { id: "simple-pine-trees", title: "Simple Pine Trees Group", tags: ["nature", "forest", "pine", "easy"] },
        medium: { id: "serene-woodland-path", title: "Serene Woodland Path", tags: ["nature", "forest", "path", "scenic"] },
        hard: { id: "dense-enchanted-forest", title: "Dense Enchanted Forest Mandala", tags: ["nature", "forest", "magic", "intricate"] }
      },
      {
        name: "Lakes & Rivers",
        easy: { id: "simple-duck-pond", title: "Simple Duck Pond Scene", tags: ["nature", "water", "pond", "duck"] },
        medium: { id: "winding-river-meadow", title: "Winding River Meadow Scene", tags: ["nature", "water", "river", "meadow"] },
        hard: { id: "cascading-forest-waterfall", title: "Cascading Forest Waterfall", tags: ["nature", "water", "waterfall", "intricate"] }
      },
      {
        name: "Deserts",
        easy: { id: "simple-sandy-dunes", title: "Simple Sandy Dunes", tags: ["nature", "desert", "dunes", "easy"] },
        medium: { id: "cactus-desert-sunset", title: "Cactus Desert Sunset", tags: ["nature", "desert", "cactus", "sunset"] },
        hard: { id: "intricate-oasis-mirage", title: "Intricate Oasis Mirage Scene", tags: ["nature", "desert", "oasis", "intricate"] }
      }
    ]
  },
  space: {
    categoryName: "Space & Astronomy",
    subcategories: [
      {
        name: "Planets",
        easy: { id: "cartoon-smiling-saturn", title: "Cartoon Smiling Saturn", tags: ["space", "saturn", "planet", "cartoon"] },
        medium: { id: "solar-system-orbit", title: "Solar System Orbit", tags: ["space", "planets", "orbit", "science"] },
        hard: { id: "detailed-alien-landscape", title: "Detailed Alien Landscape", tags: ["space", "alien", "landscape", "intricate"] }
      },
      {
        name: "Spacecraft",
        easy: { id: "cute-shuttle-cartoon", title: "Cute Space Shuttle Cartoon", tags: ["space", "shuttle", "spacecraft", "cartoon"] },
        medium: { id: "cosmic-rocket", title: "Cosmic Rocket Ship", tags: ["space", "rocket", "spacecraft", "adventure"] },
        hard: { id: "detailed-space-station", title: "Detailed Space Station Orbiting", tags: ["space", "station", "satellite", "intricate"] }
      },
      {
        name: "Stars & Galaxies",
        easy: { id: "simple-twinkling-stars", title: "Simple Twinkling Stars in Sky", tags: ["space", "stars", "sky", "easy"] },
        medium: { id: "spinning-spiral-galaxy", title: "Spinning Spiral Galaxy", tags: ["space", "galaxy", "spiral", "cosmic"] },
        hard: { id: "intricate-nebula-constellation", title: "Intricate Nebula and Constellations", tags: ["space", "nebula", "constellations", "intricate"] }
      },
      {
        name: "Astronauts",
        easy: { id: "happy-baby-astronaut", title: "Happy Baby Astronaut", tags: ["space", "astronaut", "cute", "kids"] },
        medium: { id: "spacewalk-moon-landing", title: "Spacewalk Moon Landing", tags: ["space", "astronaut", "moon", "landing"] },
        hard: { id: "detailed-cosmic-explorer", title: "Detailed Cosmic Explorer Portrait", tags: ["space", "astronaut", "explorer", "intricate"] }
      }
    ]
  },
  fantasy: {
    categoryName: "Fantasy & Fairy Tales",
    subcategories: [
      {
        name: "Mythical Creatures",
        easy: { id: "cute-baby-pegasus", title: "Cute Baby Pegasus", tags: ["fantasy", "pegasus", "cute", "kids"] },
        medium: { id: "magical-unicorn", title: "Magical Unicorn", tags: ["fantasy", "unicorn", "forest", "magic"] },
        hard: { id: "intricate-phoenix-rising", title: "Intricate Phoenix Rising Mandala", tags: ["fantasy", "phoenix", "firebird", "intricate"] }
      },
      {
        name: "Unicorns",
        easy: { id: "simple-chibi-unicorn", title: "Simple Chibi Unicorn", tags: ["fantasy", "unicorn", "chibi", "cute"] },
        medium: { id: "unicorn-under-rainbow", title: "Unicorn Under Rainbow", tags: ["fantasy", "unicorn", "rainbow", "scenic"] },
        hard: { id: "detailed-celestial-unicorn", title: "Detailed Celestial Unicorn", tags: ["fantasy", "unicorn", "stars", "intricate"] }
      },
      {
        name: "Dragons",
        easy: { id: "friendly-baby-dragon", title: "Friendly Baby Dragon", tags: ["fantasy", "dragon", "baby", "cute"] },
        medium: { id: "flying-castle-dragon", title: "Flying Castle Dragon", tags: ["fantasy", "dragon", "castle", "flying"] },
        hard: { id: "intricate-fire-breather", title: "Intricate Fire-Breathing Dragon", tags: ["fantasy", "dragon", "fire", "intricate"] }
      },
      {
        name: "Castles",
        easy: { id: "simple-fairytale-castle", title: "Simple Fairytale Castle", tags: ["fantasy", "castle", "fairytale", "easy"] },
        medium: { id: "cliffside-medieval-fortress", title: "Cliffside Medieval Fortress", tags: ["fantasy", "castle", "medieval", "cliff"] },
        hard: { id: "detailed-magical-palace", title: "Detailed Magical Palace", tags: ["fantasy", "castle", "palace", "intricate"] }
      },
      {
        name: "Fairies",
        easy: { id: "cute-little-pixie", title: "Cute Little Pixie", tags: ["fantasy", "fairy", "pixie", "cute"] },
        medium: { id: "fairy-sitting-flower", title: "Fairy Sitting on Flower", tags: ["fantasy", "fairy", "flower", "garden"] },
        hard: { id: "intricate-forest-fairy", title: "Intricate Forest Fairy Scene", tags: ["fantasy", "fairy", "forest", "intricate"] }
      }
    ]
  },
  flowers: {
    categoryName: "Flowers & Plants",
    subcategories: [
      {
        name: "Botanical",
        easy: { id: "simple-daisy-stem", title: "Simple Daisy Stem", tags: ["flower", "daisy", "botanical", "easy"] },
        medium: { id: "blooming-sunflower", title: "Blooming Sunflower", tags: ["flower", "sunflower", "botanical", "garden"] },
        hard: { id: "intricate-botanical-ivy", title: "Intricate Botanical Ivy Patterns", tags: ["flower", "ivy", "botanical", "intricate"] }
      },
      {
        name: "Sunflowers",
        easy: { id: "simple-cartoon-sunflower", title: "Simple Cartoon Sunflower", tags: ["flower", "sunflower", "cartoon", "cute"] },
        medium: { id: "sunflower-field-bee", title: "Sunflower Field and Honeybee", tags: ["flower", "sunflower", "field", "bee"] },
        hard: { id: "detailed-sunflower-mandala", title: "Detailed Sunflower Mandala", tags: ["flower", "sunflower", "mandala", "intricate"] }
      },
      {
        name: "Roses",
        easy: { id: "simple-rose-bud", title: "Simple Rose Bud", tags: ["flower", "rose", "bud", "easy"] },
        medium: { id: "gorgeous-rose-bouquet", title: "Gorgeous Rose Bouquet", tags: ["flower", "rose", "bouquet", "wedding"] },
        hard: { id: "intricate-stained-glass-rose", title: "Intricate Stained Glass Rose", tags: ["flower", "rose", "stained glass", "intricate"] }
      },
      {
        name: "Wildflowers",
        easy: { id: "simple-meadow-tulip", title: "Simple Meadow Tulip", tags: ["flower", "tulip", "wildflower", "easy"] },
        medium: { id: "butterfly-wildflower-garden", title: "Butterfly and Wildflower Garden", tags: ["flower", "wildflower", "butterfly", "garden"] },
        hard: { id: "intricate-wildflower-tapestry", title: "Intricate Wildflower Tapestry", tags: ["flower", "wildflower", "tapestry", "intricate"] }
      },
      {
        name: "Succulents & Cacti",
        easy: { id: "simple-potted-cactus", title: "Simple Potted Cactus", tags: ["flower", "cactus", "succulent", "easy"] },
        medium: { id: "succulent-garden-pot", title: "Succulent Garden Pot", tags: ["flower", "cactus", "succulent", "pot"] },
        hard: { id: "detailed-terrarium-display", title: "Detailed Terrarium Display", tags: ["flower", "cactus", "succulent", "terrarium"] }
      }
    ]
  },
  dinosaurs: {
    categoryName: "Dinosaurs",
    subcategories: [
      {
        name: "T-Rex",
        easy: { id: "simple-baby-trex", title: "Simple Baby T-Rex", tags: ["dinosaur", "trex", "baby", "cartoon"] },
        medium: { id: "roaring-tyrannosaurus", title: "Roaring Tyrannosaurus Rex", tags: ["dinosaur", "trex", "roaring", "prehistoric"] },
        hard: { id: "prehistoric-trex-jungle", title: "Prehistoric T-Rex Jungle Mandala", tags: ["dinosaur", "trex", "jungle", "intricate"] }
      },
      {
        name: "Prehistoric",
        easy: { id: "happy-brontosaurus", title: "Happy Brontosaurus Dinosaur", tags: ["dinosaur", "brontosaurus", "prehistoric", "kids"] },
        medium: { id: "happy-triceratops", title: "Happy Triceratops Dinosaur", tags: ["dinosaur", "triceratops", "prehistoric", "cute"] },
        hard: { id: "detailed-dino-volcano-eruption", title: "Detailed Dino Volcano Eruption", tags: ["dinosaur", "volcano", "prehistoric", "intricate"] }
      },
      {
        name: "Triceratops",
        easy: { id: "cute-baby-triceratops", title: "Cute Baby Triceratops", tags: ["dinosaur", "triceratops", "baby", "cute"] },
        medium: { id: "triceratops-river-crossing", title: "Triceratops River Crossing", tags: ["dinosaur", "triceratops", "river", "scenic"] },
        hard: { id: "intricate-triceratops-mandala", title: "Intricate Triceratops Mandala", tags: ["dinosaur", "triceratops", "mandala", "intricate"] }
      },
      {
        name: "Pterodactyls",
        easy: { id: "simple-flying-pterodactyl", title: "Simple Flying Pterodactyl", tags: ["dinosaur", "pterodactyl", "flying", "easy"] },
        medium: { id: "pterodactyl-nest-cliff", title: "Pterodactyl Nest on Cliff", tags: ["dinosaur", "pterodactyl", "nest", "scenic"] },
        hard: { id: "detailed-prehistoric-sky", title: "Detailed Prehistoric Sky Pterodactyls", tags: ["dinosaur", "pterodactyl", "sky", "intricate"] }
      },
      {
        name: "Herbivores",
        easy: { id: "friendly-brachiosaurus-baby", title: "Friendly Brachiosaurus Baby", tags: ["dinosaur", "brachiosaurus", "herbivore", "cute"] },
        medium: { id: "stegosaurus-eating-ferns", title: "Stegosaurus Eating Ferns", tags: ["dinosaur", "stegosaurus", "herbivore", "plants"] },
        hard: { id: "intricate-diplodocus-herd", title: "Intricate Diplodocus Herd", tags: ["dinosaur", "diplodocus", "herbivore", "intricate"] }
      }
    ]
  },
  ocean: {
    categoryName: "Ocean & Marine Life",
    subcategories: [
      {
        name: "Sea Creatures",
        easy: { id: "cute-happy-starfish", title: "Cute Happy Starfish", tags: ["ocean", "starfish", "cartoon", "cute"] },
        medium: { id: "swimming-sea-turtle", title: "Swimming Sea Turtle", tags: ["ocean", "turtle", "sea life", "reef"] },
        hard: { id: "intricate-octopus-treasures", title: "Intricate Octopus with Treasures", tags: ["ocean", "octopus", "treasures", "intricate"] }
      },
      {
        name: "Sea Turtles",
        easy: { id: "simple-baby-turtle", title: "Simple Baby Turtle Hatching", tags: ["ocean", "turtle", "baby", "cute"] },
        medium: { id: "turtles-swimming-tide", title: "Turtles Swimming with Tide", tags: ["ocean", "turtle", "swim", "scenic"] },
        hard: { id: "intricate-turtle-shell-mandala", title: "Intricate Turtle Shell Mandala", tags: ["ocean", "turtle", "shell", "intricate"] }
      },
      {
        name: "Dolphins",
        easy: { id: "happy-jumping-dolphin", title: "Happy Jumping Dolphin", tags: ["ocean", "dolphin", "jumping", "easy"] },
        medium: { id: "dolphin-sunset-leap", title: "Dolphin Sunset Leap", tags: ["ocean", "dolphin", "sunset", "scenic"] },
        hard: { id: "detailed-dolphins-coral-reef", title: "Detailed Dolphins and Coral Reef", tags: ["ocean", "dolphin", "reef", "intricate"] }
      },
      {
        name: "Sharks",
        easy: { id: "simple-cartoon-shark", title: "Simple Cartoon Shark", tags: ["ocean", "shark", "cartoon", "easy"] },
        medium: { id: "great-white-reef-patrol", title: "Great White Reef Patrol", tags: ["ocean", "shark", "reef", "patrol"] },
        hard: { id: "intricate-hammerhead-pattern", title: "Intricate Hammerhead Shark Pattern", tags: ["ocean", "shark", "patterns", "intricate"] }
      },
      {
        name: "Coral Reefs",
        easy: { id: "simple-sea-shells", title: "Simple Sea Shells On Beach", tags: ["ocean", "shells", "beach", "easy"] },
        medium: { id: "vibrant-coral-sea-life", title: "Vibrant Coral Sea Life Scene", tags: ["ocean", "coral", "reef", "fish"] },
        hard: { id: "dense-underwater-landscape", title: "Dense Underwater Landscape Mandala", tags: ["ocean", "landscape", "underwater", "intricate"] }
      }
    ]
  },
  vehicles: {
    categoryName: "Vehicles & Transport",
    subcategories: [
      {
        name: "Racing Cars",
        easy: { id: "simple-cartoon-racer", title: "Simple Cartoon Racer Car", tags: ["vehicle", "racer", "cartoon", "easy"] },
        medium: { id: "vintage-sports-car", title: "Vintage Sports Car", tags: ["vehicle", "car", "vintage", "racing"] },
        hard: { id: "detailed-f1-racecar", title: "Detailed F1 Race Car on Track", tags: ["vehicle", "racing", "f1", "intricate"] }
      },
      {
        name: "Sports Cars",
        easy: { id: "simple-modern-coupe", title: "Simple Modern Coupe", tags: ["vehicle", "car", "sports", "easy"] },
        medium: { id: "sleek-supercar-highway", title: "Sleek Supercar on Highway", tags: ["vehicle", "car", "supercar", "highway"] },
        hard: { id: "detailed-hypercar-engine", title: "Detailed Hypercar Mechanical Engine", tags: ["vehicle", "car", "engine", "intricate"] }
      },
      {
        name: "Vintage & Classics",
        easy: { id: "simple-model-t-car", title: "Simple Model T Car", tags: ["vehicle", "car", "vintage", "easy"] },
        medium: { id: "retro-pickup-truck", title: "Retro Pickup Truck at Barn", tags: ["vehicle", "truck", "retro", "scenic"] },
        hard: { id: "detailed-classic-sedan", title: "Detailed Classic Sedan Grid", tags: ["vehicle", "car", "classic", "intricate"] }
      },
      {
        name: "Trains",
        easy: { id: "chugging-toy-train", title: "Chugging Toy Train", tags: ["vehicle", "train", "toy", "easy"] },
        medium: { id: "steam-locomotive-tracks", title: "Steam Locomotive on Tracks", tags: ["vehicle", "train", "steam", "tracks"] },
        hard: { id: "detailed-modern-bullet-train", title: "Detailed Modern Bullet Train Station", tags: ["vehicle", "train", "bullet", "intricate"] }
      },
      {
        name: "Airplanes",
        easy: { id: "happy-propeller-plane", title: "Happy Propeller Plane in Clouds", tags: ["vehicle", "plane", "airplane", "easy"] },
        medium: { id: "commercial-jet-clouds", title: "Commercial Jet Flying in Sky", tags: ["vehicle", "plane", "jet", "clouds"] },
        hard: { id: "intricate-vintage-biplane", title: "Intricate Vintage Biplane Scene", tags: ["vehicle", "plane", "biplane", "intricate"] }
      }
    ]
  },
  holidays: {
    categoryName: "Holidays & Seasons",
    subcategories: [
      {
        name: "Halloween",
        easy: { id: "cute-friendly-ghost", title: "Cute Friendly Ghost", tags: ["holiday", "halloween", "ghost", "cute"] },
        medium: { id: "haunted-house-bat-sky", title: "Haunted House under Bat Sky", tags: ["holiday", "halloween", "haunted house", "bat"] },
        hard: { id: "spooky-pumpkin", title: "Spooky Halloween Pumpkin", tags: ["holiday", "halloween", "pumpkin", "spooky"] }
      },
      {
        name: "Christmas",
        easy: { id: "simple-smiling-snowman", title: "Simple Smiling Snowman", tags: ["holiday", "christmas", "snowman", "winter"] },
        medium: { id: "santa-claus-sleigh", title: "Santa Claus Delivering in Sleigh", tags: ["holiday", "christmas", "santa", "sleigh"] },
        hard: { id: "intricate-ornament-mandala", title: "Intricate Christmas Ornament Mandala", tags: ["holiday", "christmas", "ornament", "intricate"] }
      },
      {
        name: "Thanksgiving",
        easy: { id: "cute-turkey-cartoon", title: "Cute Turkey Cartoon", tags: ["holiday", "thanksgiving", "turkey", "cartoon"] },
        medium: { id: "thanksgiving-harvest-feast", title: "Thanksgiving Harvest Feast Table", tags: ["holiday", "thanksgiving", "harvest", "feast"] },
        hard: { id: "intricate-horn-of-plenty", title: "Intricate Horn of Plenty Cornucopia", tags: ["holiday", "thanksgiving", "cornucopia", "intricate"] }
      },
      {
        name: "Easter",
        easy: { id: "happy-easter-egg", title: "Happy Easter Egg Patterns", tags: ["holiday", "easter", "egg", "easy"] },
        medium: { id: "easter-bunny-basket", title: "Easter Bunny with Egg Basket", tags: ["holiday", "easter", "bunny", "basket"] },
        hard: { id: "intricate-easter-pattern", title: "Intricate Easter Floral Patterns", tags: ["holiday", "easter", "floral", "intricate"] }
      },
      {
        name: "Spring & Autumn",
        easy: { id: "simple-falling-leaves", title: "Simple Falling Autumn Leaves", tags: ["holiday", "autumn", "leaves", "easy"] },
        medium: { id: "spring-blossom-watering-can", title: "Spring Blossom Watering Can", tags: ["holiday", "spring", "blossom", "garden"] },
        hard: { id: "intricate-autumn-harvest-mandala", title: "Intricate Autumn Harvest Mandala", tags: ["holiday", "autumn", "harvest", "intricate"] }
      }
    ]
  },
  kawaii: {
    categoryName: "Cute & Kawaii",
    subcategories: [
      {
        name: "Kawaii Animals",
        easy: { id: "chibi-kawaii-bunny", title: "Chibi Kawaii Bunny Eating Carrot", tags: ["kawaii", "chibi", "bunny", "cute"] },
        medium: { id: "cute-panda-bamboo", title: "Cute Kawaii Panda with Bamboo", tags: ["kawaii", "panda", "bamboo", "cute"] },
        hard: { id: "kawaii-animal-party-doodle", title: "Kawaii Animal Party Doodle", tags: ["kawaii", "doodle", "animals", "intricate"] }
      },
      {
        name: "Smiling Food",
        easy: { id: "happy-smiling-cupcake", title: "Happy Smiling Cupcake", tags: ["kawaii", "cupcake", "food", "cute"] },
        medium: { id: "cute-sushi-roll-friends", title: "Cute Sushi Roll Friends", tags: ["kawaii", "sushi", "food", "cute"] },
        hard: { id: "kawaii-dessert-tower", title: "Kawaii Dessert Tower Doodle", tags: ["kawaii", "dessert", "doodle", "intricate"] }
      },
      {
        name: "Cute Clouds & Stars",
        easy: { id: "happy-cloud-rainbow", title: "Happy Cloud and Rainbow", tags: ["kawaii", "cloud", "rainbow", "cute"] },
        medium: { id: "sleeping-crescent-moon", title: "Sleeping Crescent Moon with Stars", tags: ["kawaii", "moon", "stars", "cute"] },
        hard: { id: "cosmic-kawaii-constellation", title: "Cosmic Kawaii Constellation Mandala", tags: ["kawaii", "cosmic", "mandala", "intricate"] }
      },
      {
        name: "Chibi Doodles",
        easy: { id: "cute-chibi-cat", title: "Cute Chibi Cat Playing Ball", tags: ["kawaii", "chibi", "cat", "cute"] },
        medium: { id: "chibi-magical-girl", title: "Chibi Magical Girl Standing", tags: ["kawaii", "chibi", "girl", "magical"] },
        hard: { id: "kawaii-doodle-universe", title: "Kawaii Doodle Universe Full Canvas", tags: ["kawaii", "doodle", "universe", "intricate"] }
      }
    ]
  },
  superheroes: {
    categoryName: "Superheroes & Sci-Fi",
    subcategories: [
      {
        name: "Masked Heroes",
        easy: { id: "simple-flying-hero", title: "Simple Flying Masked Hero", tags: ["superhero", "flying", "masked", "easy"] },
        medium: { id: "vigilante-rooftop-pose", title: "Vigilante Rooftop Patrol Pose", tags: ["superhero", "vigilante", "rooftop", "cool"] },
        hard: { id: "detailed-superhero-cityscape", title: "Detailed Superhero Guarding Cityscape", tags: ["superhero", "cityscape", "guardian", "intricate"] }
      },
      {
        name: "Sci-Fi Robots",
        easy: { id: "friendly-toy-robot", title: "Friendly Toy Robot Smiling", tags: ["superhero", "robot", "friendly", "easy"] },
        medium: { id: "futuristic-mech-guardian", title: "Futuristic Mech Guardian", tags: ["superhero", "mech", "robot", "scifi"] },
        hard: { id: "intricate-android-schematics", title: "Intricate Android Schematics Blueprint", tags: ["superhero", "robot", "schematics", "intricate"] }
      },
      {
        name: "Action Poses",
        easy: { id: "super-punch-cartoon", title: "Super Punch Cartoon Outline", tags: ["superhero", "action", "punch", "easy"] },
        medium: { id: "heroic-landing-impact", title: "Heroic Landing Ground Impact", tags: ["superhero", "action", "landing", "cool"] },
        hard: { id: "epic-battlefield-confrontation", title: "Epic Superhero Battlefield Confrontation", tags: ["superhero", "action", "battle", "intricate"] }
      },
      {
        name: "Cosmic Battles",
        easy: { id: "simple-spaceship-laser", title: "Simple Spaceship Shooting Laser", tags: ["superhero", "spaceship", "laser", "easy"] },
        medium: { id: "starfighter-dogfight-asteroids", title: "Starfighter Dogfight in Asteroids", tags: ["superhero", "starfighter", "asteroids", "scifi"] },
        hard: { id: "detailed-interstellar-fleet-war", title: "Detailed Interstellar Fleet War Scene", tags: ["superhero", "fleet", "galaxy", "intricate"] }
      }
    ]
  },
  anime: {
    categoryName: "Anime & Manga",
    subcategories: [
      {
        name: "Chibi Characters",
        easy: { id: "cute-anime-chibi-boy", title: "Cute Anime Chibi Boy Smiling", tags: ["anime", "chibi", "boy", "cute"] },
        medium: { id: "chibi-magical-girl-staff", title: "Chibi Magical Girl holding Staff", tags: ["anime", "chibi", "girl", "magical"] },
        hard: { id: "kawaii-chibi-school-club", title: "Kawaii Chibi School Club Gathering", tags: ["anime", "chibi", "school", "intricate"] }
      },
      {
        name: "Action Anime",
        easy: { id: "ninja-running-outline", title: "Ninja Running Anime Outline", tags: ["anime", "ninja", "running", "easy"] },
        medium: { id: "anime-sword-slasher-pose", title: "Anime Sword Slasher Strike Pose", tags: ["anime", "sword", "action", "pose"] },
        hard: { id: "epic-anime-power-aura", title: "Epic Anime Power Aura Charge", tags: ["anime", "aura", "battle", "intricate"] }
      },
      {
        name: "Magical Girls",
        easy: { id: "cute-magical-mascot", title: "Cute Magical Mascot Floating", tags: ["anime", "magical", "mascot", "cute"] },
        medium: { id: "magical-girl-henshin-pose", title: "Magical Girl Henshin Transform Pose", tags: ["anime", "magical girl", "transform", "scenic"] },
        hard: { id: "intricate-celestial-magical-girl", title: "Intricate Celestial Magical Girl", tags: ["anime", "magical girl", "stars", "intricate"] }
      },
      {
        name: "Manga Eyes & Faces",
        easy: { id: "simple-manga-eyes", title: "Simple Manga Eyes Expressions", tags: ["anime", "manga", "eyes", "easy"] },
        medium: { id: "expressive-anime-portraits", title: "Expressive Anime Portraits Grid", tags: ["anime", "manga", "portraits", "faces"] },
        hard: { id: "detailed-manga-page-layout", title: "Detailed Manga Page Panel Layout", tags: ["anime", "manga", "panel", "intricate"] }
      }
    ]
  },
  food: {
    categoryName: "Food & Sweets",
    subcategories: [
      {
        name: "Cupcakes & Cakes",
        easy: { id: "simple-cherry-cupcake", title: "Simple Cupcake with Cherry", tags: ["food", "cupcake", "cherry", "easy"] },
        medium: { id: "three-tier-wedding-cake", title: "Three-Tier Floral Wedding Cake", tags: ["food", "cake", "wedding", "floral"] },
        hard: { id: "intricate-pastry-chef-display", title: "Intricate Pastry Chef Bakery Display", tags: ["food", "bakery", "pastry", "intricate"] }
      },
      {
        name: "Ice Cream & Treats",
        easy: { id: "simple-soft-serve-cone", title: "Simple Soft Serve Ice Cream Cone", tags: ["food", "ice cream", "cone", "easy"] },
        medium: { id: "giant-sundae-bowl", title: "Giant Sundae Bowl with Wafers", tags: ["food", "ice cream", "sundae", "treats"] },
        hard: { id: "detailed-candy-shop-shelves", title: "Detailed Candy Shop Shelves", tags: ["food", "candy", "sweet shop", "intricate"] }
      },
      {
        name: "Pizza & Burgers",
        easy: { id: "smiling-pizza-slice", title: "Smiling Pizza Slice Cartoon", tags: ["food", "pizza", "cartoon", "cute"] },
        medium: { id: "double-cheeseburger-platter", title: "Double Cheeseburger Platter with Fries", tags: ["food", "burger", "fries", "platter"] },
        hard: { id: "intricate-diner-kitchen-scene", title: "Intricate Diner Kitchen Pizza Making", tags: ["food", "pizza", "diner", "intricate"] }
      },
      {
        name: "Fruits & Veggies",
        easy: { id: "happy-apple-banana", title: "Happy Apple and Banana Friends", tags: ["food", "fruit", "apple", "banana"] },
        medium: { id: "basket-of-summer-fruits", title: "Basket of Fresh Summer Fruits", tags: ["food", "fruit", "basket", "harvest"] },
        hard: { id: "detailed-harvest-vegetable-cornucopia", title: "Detailed Harvest Vegetable Cornucopia", tags: ["food", "vegetables", "harvest", "intricate"] }
      }
    ]
  },
  sports: {
    categoryName: "Sports & Activities",
    subcategories: [
      {
        name: "Soccer",
        easy: { id: "simple-soccer-ball", title: "Simple Soccer Ball on Grass", tags: ["sports", "soccer", "ball", "easy"] },
        medium: { id: "soccer-player-kicking", title: "Soccer Player Kicking into Goal", tags: ["sports", "soccer", "kick", "goal"] },
        hard: { id: "crowded-stadium-championship", title: "Crowded Stadium Championship Match", tags: ["sports", "soccer", "stadium", "intricate"] }
      },
      {
        name: "Basketball",
        easy: { id: "simple-basketball-hoop", title: "Simple Basketball and Hoop", tags: ["sports", "basketball", "ball", "easy"] },
        medium: { id: "player-slam-dunking", title: "Basketball Player Slam Dunking", tags: ["sports", "basketball", "dunk", "action"] },
        hard: { id: "intricate-court-dribble-action", title: "Intricate Court Dribble Action Scene", tags: ["sports", "basketball", "dribble", "intricate"] }
      },
      {
        name: "Gymnastics",
        easy: { id: "gymnast-balancing-pose", title: "Gymnast Balancing on Beam Pose", tags: ["sports", "gymnast", "balance", "easy"] },
        medium: { id: "gymnast-ribbon-routine", title: "Gymnast Ribbon Routine Performance", tags: ["sports", "gymnast", "ribbon", "performance"] },
        hard: { id: "detailed-olympic-gymnastics-arena", title: "Detailed Olympic Gymnastics Arena", tags: ["sports", "gymnast", "olympics", "intricate"] }
      },
      {
        name: "Skateboarding",
        easy: { id: "cool-skateboard-outline", title: "Cool Skateboard Graphic Outline", tags: ["sports", "skateboard", "cool", "easy"] },
        medium: { id: "skater-doing-ollie", title: "Skater Doing Ollie on Ramp", tags: ["sports", "skateboard", "ollie", "action"] },
        hard: { id: "packed-skatepark-graffiti", title: "Packed Skatepark with Graffiti Art", tags: ["sports", "skateboard", "skatepark", "intricate"] }
      },
      {
        name: "Cycling",
        easy: { id: "simple-tricycle-cartoon", title: "Simple Tricycle Cartoon", tags: ["sports", "cycle", "tricycle", "easy"] },
        medium: { id: "mountain-biker-trail", title: "Mountain Biker Riding Down Trail", tags: ["sports", "cycle", "mountain bike", "scenic"] },
        hard: { id: "intricate-road-race-peloton", title: "Intricate Road Race Peloton", tags: ["sports", "cycle", "peloton", "intricate"] }
      }
    ]
  },
  history: {
    categoryName: "History & Mythology",
    subcategories: [
      {
        name: "Greek Gods",
        easy: { id: "zeus-lightning-bolt", title: "Zeus Holding Lightning Bolt", tags: ["history", "mythology", "zeus", "lightning"] },
        medium: { id: "poseidon-ocean-chariot", title: "Poseidon riding Ocean Chariot", tags: ["history", "mythology", "poseidon", "ocean"] },
        hard: { id: "detailed-mount-olympus-pantheon", title: "Detailed Mount Olympus Pantheon", tags: ["history", "mythology", "pantheon", "intricate"] }
      },
      {
        name: "Egyptian Pyramids",
        easy: { id: "simple-sphinx-dunes", title: "Simple Sphinx and Pyramids", tags: ["history", "egypt", "pyramid", "sphinx"] },
        medium: { id: "pharaoh-sarcophagus-tomb", title: "Pharaoh Sarcophagus Tomb", tags: ["history", "egypt", "pharaoh", "tomb"] },
        hard: { id: "intricate-hieroglyphic-mural", title: "Intricate Egyptian Hieroglyphic Mural", tags: ["history", "egypt", "hieroglyph", "intricate"] }
      },
      {
        name: "Knights & Castles",
        easy: { id: "brave-little-knight", title: "Brave Little Knight with Shield", tags: ["history", "knight", "shield", "cute"] },
        medium: { id: "knight-jousting-tournament", title: "Knight Jousting Tournament", tags: ["history", "knight", "joust", "action"] },
        hard: { id: "epic-castle-siege-battle", title: "Epic Castle Siege Battle Scene", tags: ["history", "knight", "castle", "intricate"] }
      },
      {
        name: "Vikings",
        easy: { id: "cute-viking-helmet", title: "Cute Viking Helmet and Axe", tags: ["history", "viking", "helmet", "easy"] },
        medium: { id: "viking-longship-waves", title: "Viking Longship Braving Waves", tags: ["history", "viking", "longship", "waves"] },
        hard: { id: "intricate-norse-mythology-carving", title: "Intricate Norse Mythology Carving", tags: ["history", "viking", "yggdrasil", "intricate"] }
      }
    ]
  },
  patterns: {
    categoryName: "Geometric & Patterns",
    subcategories: [
      {
        name: "Tessellations",
        easy: { id: "simple-triangles-grid", title: "Simple Geometric Triangles Grid", tags: ["patterns", "tessellation", "triangles", "easy"] },
        medium: { id: "interlocking-fish-tessellation", title: "Interlocking Fish Tessellation", tags: ["patterns", "tessellation", "fish", "symmetric"] },
        hard: { id: "complex-escher-style-lizards", title: "Complex Escher-Style Lizards", tags: ["patterns", "tessellation", "escher", "intricate"] }
      },
      {
        name: "Optical Illusions",
        easy: { id: "simple-3d-cube-illusion", title: "Simple 3D Cube Illusion Pattern", tags: ["patterns", "illusion", "3d cube", "easy"] },
        medium: { id: "spinning-wheels-illusion", title: "Spinning Wheels Optical Illusion", tags: ["patterns", "illusion", "spinning", "abstract"] },
        hard: { id: "mind-bending-impossible-staircase", title: "Mind-Bending Impossible Staircase", tags: ["patterns", "illusion", "staircase", "intricate"] }
      },
      {
        name: "Abstract Lines",
        easy: { id: "simple-wave-lines", title: "Simple Wave Lines Pattern", tags: ["patterns", "abstract", "wave", "easy"] },
        medium: { id: "flowing-geometric-waves", title: "Flowing Geometric Wave Lines", tags: ["patterns", "abstract", "geometric", "waves"] },
        hard: { id: "intricate-doodle-line-tapestry", title: "Intricate Doodle Line Tapestry", tags: ["patterns", "abstract", "doodle", "intricate"] }
      },
      {
        name: "Mosaics",
        easy: { id: "simple-stained-glass-heart", title: "Simple Stained Glass Heart", tags: ["patterns", "mosaic", "heart", "stained glass"] },
        medium: { id: "mosaic-peacock-tail", title: "Mosaic Peacock Tail Pattern", tags: ["patterns", "mosaic", "peacock", "tail"] },
        hard: { id: "dense-roman-mosaic-floor", title: "Dense Roman Mosaic Floor Mandala", tags: ["patterns", "mosaic", "roman", "intricate"] }
      }
    ]
  },
  insects: {
    categoryName: "Insects & Bugs",
    subcategories: [
      {
        name: "Butterflies",
        easy: { id: "simple-butterfly-wings", title: "Simple Butterfly Wings Outline", tags: ["insects", "butterfly", "wings", "easy"] },
        medium: { id: "butterfly-landing-flower", title: "Butterfly Landing on Meadow Flower", tags: ["insects", "butterfly", "flower", "garden"] },
        hard: { id: "intricate-monarch-symmetry", title: "Intricate Monarch Butterfly Symmetry", tags: ["insects", "butterfly", "monarch", "intricate"] }
      },
      {
        name: "Ladybugs",
        easy: { id: "cute-ladybug-leaf", title: "Cute Ladybug crawling on Leaf", tags: ["insects", "ladybug", "leaf", "cute"] },
        medium: { id: "ladybugs-crawling-garden", title: "Ladybugs Crawling in Garden Grass", tags: ["insects", "ladybug", "garden", "scenic"] },
        hard: { id: "detailed-meadow-insect-life", title: "Detailed Meadow Insect Life Scene", tags: ["insects", "ladybug", "meadow", "intricate"] }
      },
      {
        name: "Bees & Hives",
        easy: { id: "happy-honeybee-cartoon", title: "Happy Honeybee Cartoon Smiling", tags: ["insects", "bee", "honeybee", "cartoon"] },
        medium: { id: "bee-hive-honeycomb", title: "Bee Hive Hanging and Honeycomb", tags: ["insects", "bee", "hive", "honeycomb"] },
        hard: { id: "intricate-apiculture-wildflowers", title: "Intricate Honeybees on Wildflowers", tags: ["insects", "bee", "apiculture", "intricate"] }
      },
      {
        name: "Dragonflies",
        easy: { id: "simple-dragonfly-outline", title: "Simple Dragonfly Outline", tags: ["insects", "dragonfly", "easy", "water"] },
        medium: { id: "dragonflies-hovering-pond", title: "Dragonflies Hovering over Pond", tags: ["insects", "dragonfly", "pond", "scenic"] },
        hard: { id: "intricate-pond-life-mandala", title: "Intricate Pond Life Dragonfly Mandala", tags: ["insects", "dragonfly", "pond", "intricate"] }
      }
    ]
  },
  birds: {
    categoryName: "Birds & Aviary",
    subcategories: [
      {
        name: "Eagles & Hawks",
        easy: { id: "simple-eagle-head", title: "Simple Eagle Head Profile", tags: ["birds", "eagle", "head", "easy"] },
        medium: { id: "soaring-bald-eagle", title: "Soaring Bald Eagle in Sky", tags: ["birds", "eagle", "soaring", "sky"] },
        hard: { id: "detailed-raptor-hunting", title: "Detailed Raptor Hunting Landscape", tags: ["birds", "hawk", "hunting", "intricate"] }
      },
      {
        name: "Owls",
        easy: { id: "cute-baby-owl", title: "Cute Baby Owl sitting on Branch", tags: ["birds", "owl", "baby", "cute"] },
        medium: { id: "wise-owl-tree-branch", title: "Wise Owl perched on Tree Branch", tags: ["birds", "owl", "branch", "night"] },
        hard: { id: "intricate-night-owl-mandala", title: "Intricate Night Owl Mandala", tags: ["birds", "owl", "mandala", "intricate"] }
      },
      {
        name: "Parrots & Tropical",
        easy: { id: "happy-macaw-perch", title: "Happy Macaw perched on Branch", tags: ["birds", "parrot", "macaw", "cute"] },
        medium: { id: "toucan-jungle-leaves", title: "Toucan Sitting in Jungle Leaves", tags: ["birds", "toucan", "jungle", "scenic"] },
        hard: { id: "detailed-amazon-rainforest-canopy", title: "Detailed Amazon Rainforest Canopy", tags: ["birds", "parrot", "rainforest", "intricate"] }
      },
      {
        name: "Songbirds",
        easy: { id: "little-bluebird-singing", title: "Little Bluebird Singing", tags: ["birds", "bluebird", "singing", "easy"] },
        medium: { id: "robin-nest-eggs", title: "Robin guarding Nest with Eggs", tags: ["birds", "robin", "nest", "spring"] },
        hard: { id: "intricate-garden-songbirds", title: "Intricate Garden Songbirds Tree", tags: ["birds", "songbird", "garden", "intricate"] }
      }
    ]
  },
  architecture: {
    categoryName: "Architecture & Buildings",
    subcategories: [
      {
        name: "Skyscrapers",
        easy: { id: "simple-tower-blocks", title: "Simple Tower Blocks Outline", tags: ["architecture", "skyscraper", "city", "easy"] },
        medium: { id: "modern-city-skyline", title: "Modern City Skyline and River", tags: ["architecture", "skyline", "city", "scenic"] },
        hard: { id: "intricate-futuristic-metropolis", title: "Intricate Futuristic Metropolis", tags: ["architecture", "metropolis", "scifi", "intricate"] }
      },
      {
        name: "Famous Landmarks",
        easy: { id: "simple-eiffel-tower", title: "Simple Eiffel Tower Outline", tags: ["architecture", "landmark", "paris", "easy"] },
        medium: { id: "taj-mahal-reflection", title: "Taj Mahal and Reflection Pool", tags: ["architecture", "landmark", "taj mahal", "scenic"] },
        hard: { id: "detailed-gothic-cathedral", title: "Detailed Gothic Cathedral Front facade", tags: ["architecture", "cathedral", "church", "intricate"] }
      },
      {
        name: "Cozy Cottages",
        easy: { id: "simple-country-house", title: "Simple Country House Cartoon", tags: ["architecture", "cottage", "house", "easy"] },
        medium: { id: "thatch-roof-cottage-garden", title: "Thatch Roof Cottage with Garden", tags: ["architecture", "cottage", "garden", "scenic"] },
        hard: { id: "intricate-stone-village-street", title: "Intricate Stone Village Street", tags: ["architecture", "village", "street", "intricate"] }
      },
      {
        name: "Treehouses",
        easy: { id: "simple-backyard-treehouse", title: "Simple Backyard Treehouse", tags: ["architecture", "treehouse", "backyard", "easy"] },
        medium: { id: "forest-canopy-treehouse", title: "Forest Canopy Multi-Level Treehouse", tags: ["architecture", "treehouse", "forest", "woodland"] },
        hard: { id: "intricate-multi-level-treehouse", title: "Intricate Multi-Level Treehouse Palace", tags: ["architecture", "treehouse", "palace", "intricate"] }
      }
    ]
  },
  education: {
    categoryName: "School & Education",
    subcategories: [
      {
        name: "Alphabet & Letters",
        easy: { id: "abc-blocks-cartoon", title: "ABC Toy Blocks Cartoon", tags: ["education", "alphabet", "abc", "blocks"] },
        medium: { id: "fancy-illuminated-first-letter", title: "Fancy Illuminated First Letter A", tags: ["education", "alphabet", "letter", "fancy"] },
        hard: { id: "intricate-alphabet-doodle-collage", title: "Intricate Alphabet Doodle Collage", tags: ["education", "alphabet", "doodle", "intricate"] }
      },
      {
        name: "Numbers & Counting",
        easy: { id: "number-blocks-smiling", title: "Number Blocks Smiling Cartoon", tags: ["education", "numbers", "counting", "easy"] },
        medium: { id: "math-puzzle-counting-scene", title: "Math Puzzle Counting Scene", tags: ["education", "numbers", "math", "counting"] },
        hard: { id: "complex-math-equations-chalkboard", title: "Complex Math Equations on Chalkboard", tags: ["education", "math", "equations", "intricate"] }
      },
      {
        name: "Science Lab",
        easy: { id: "cute-bubbling-beaker", title: "Cute Bubbling Beaker", tags: ["education", "science", "beaker", "cute"] },
        medium: { id: "mad-scientist-laboratory", title: "Mad Scientist Chemistry Laboratory", tags: ["education", "science", "laboratory", "experiment"] },
        hard: { id: "intricate-chemistry-formulas-mandala", title: "Intricate Chemistry Formulas Mandala", tags: ["education", "science", "chemistry", "intricate"] }
      },
      {
        name: "Books & Reading",
        easy: { id: "simple-open-book", title: "Simple Open Book cartoon", tags: ["education", "books", "reading", "easy"] },
        medium: { id: "cozy-library-reading-nook", title: "Cozy Library Reading Nook", tags: ["education", "books", "library", "cozy"] },
        hard: { id: "intricate-fantasy-book-spells", title: "Intricate Fantasy Book of Spells", tags: ["education", "books", "spells", "intricate"] }
      }
    ]
  },
  fashion: {
    categoryName: "Fashion & Beauty",
    subcategories: [
      {
        name: "Elegant Dresses",
        easy: { id: "simple-princess-gown", title: "Simple Princess Gown", tags: ["fashion", "dress", "princess", "easy"] },
        medium: { id: "glamorous-runway-dress", title: "Glamorous Runway Model Dress", tags: ["fashion", "dress", "runway", "model"] },
        hard: { id: "intricate-victorian-ballgown", title: "Intricate Victorian Lace Ballgown", tags: ["fashion", "dress", "victorian", "intricate"] }
      },
      {
        name: "Makeup & Accessories",
        easy: { id: "cute-lipstick-mirror", title: "Cute Lipstick and Pocket Mirror", tags: ["fashion", "makeup", "lipstick", "cute"] },
        medium: { id: "vanity-table-cosmetics", title: "Vanity Table full of Cosmetics", tags: ["fashion", "makeup", "vanity", "cosmetics"] },
        hard: { id: "detailed-jewelry-box-treasures", title: "Detailed Jewelry Box and Treasures", tags: ["fashion", "jewelry", "box", "intricate"] }
      },
      {
        name: "Hairstyles",
        easy: { id: "simple-braided-hair", title: "Simple Braided Hair Girl Outline", tags: ["fashion", "hair", "braid", "easy"] },
        medium: { id: "retro-beehive-curls", title: "Retro Beehive Curls Portrait", tags: ["fashion", "hair", "retro", "portrait"] },
        hard: { id: "intricate-braids-floral-crown", title: "Intricate Braids with Floral Crown", tags: ["fashion", "hair", "braids", "intricate"] }
      },
      {
        name: "Shoes & Sneakers",
        easy: { id: "cute-high-top-sneaker", title: "Cute High-Top Sneaker", tags: ["fashion", "shoes", "sneaker", "easy"] },
        medium: { id: "fashionable-high-heels", title: "Fashionable Strappy High Heels", tags: ["fashion", "shoes", "heels", "stylish"] },
        hard: { id: "detailed-streetwear-sneakers-doodle", title: "Detailed Streetwear Sneakers Doodle", tags: ["fashion", "shoes", "sneakers", "intricate"] }
      }
    ]
  },
  music: {
    categoryName: "Music & Instruments",
    subcategories: [
      {
        name: "Guitars",
        easy: { id: "simple-acoustic-guitar", title: "Simple Acoustic Guitar Outline", tags: ["music", "guitar", "acoustic", "easy"] },
        medium: { id: "rock-electric-guitar", title: "Rock Electric Guitar on Stand", tags: ["music", "guitar", "electric", "rock"] },
        hard: { id: "intricate-acoustic-woodcarving", title: "Intricate Acoustic Guitar Woodcarving", tags: ["music", "guitar", "mandala", "intricate"] }
      },
      {
        name: "Pianos",
        easy: { id: "simple-piano-keys", title: "Simple Piano Keyboard Keys", tags: ["music", "piano", "keys", "easy"] },
        medium: { id: "classical-grand-piano", title: "Classical Grand Piano on Stage", tags: ["music", "piano", "grand piano", "stage"] },
        hard: { id: "detailed-concert-hall-recital", title: "Detailed Concert Hall Grand Recital", tags: ["music", "piano", "concert", "intricate"] }
      },
      {
        name: "Drums & Percussion",
        easy: { id: "simple-snare-drum", title: "Simple Snare Drum and Sticks", tags: ["music", "drums", "snare", "easy"] },
        medium: { id: "full-rock-drum-kit", title: "Full Rock Acoustic Drum Kit", tags: ["music", "drums", "drum kit", "rock"] },
        hard: { id: "intricate-marching-band-percussion", title: "Intricate Marching Band Percussion Grid", tags: ["music", "drums", "marching band", "intricate"] }
      },
      {
        name: "Music Notes & Staffs",
        easy: { id: "happy-music-notes", title: "Happy Smiling Music Notes", tags: ["music", "notes", "cartoon", "cute"] },
        medium: { id: "abstract-clef-flow", title: "Abstract Treble Clef Sound Flow", tags: ["music", "notes", "clef", "abstract"] },
        hard: { id: "intricate-classical-sheet-music", title: "Intricate Classical Sheet Music Collage", tags: ["music", "sheet music", "classical", "intricate"] }
      }
    ]
  },
  adventure: {
    categoryName: "Adventure & Camping",
    subcategories: [
      {
        name: "Hot Air Balloons",
        easy: { id: "simple-balloon-clouds", title: "Simple Hot Air Balloon in Clouds", tags: ["adventure", "balloon", "clouds", "easy"] },
        medium: { id: "balloons-over-canyon", title: "Hot Air Balloons Floating over Canyon", tags: ["adventure", "balloon", "canyon", "scenic"] },
        hard: { id: "detailed-steampunk-airship", title: "Detailed Steampunk Airship Flying", tags: ["adventure", "steampunk", "airship", "intricate"] }
      },
      {
        name: "Camping & Tents",
        easy: { id: "simple-tent-campfire", title: "Simple Pop-up Tent and Campfire", tags: ["adventure", "camping", "tent", "easy"] },
        medium: { id: "lake-campsite-pine-trees", title: "Lake Campsite surrounded by Pine Trees", tags: ["adventure", "camping", "lake", "scenic"] },
        hard: { id: "intricate-mountain-backpacking-scene", title: "Intricate Mountain Backpacking Scene", tags: ["adventure", "camping", "backpacking", "intricate"] }
      },
      {
        name: "Maps & Compasses",
        easy: { id: "simple-pirate-treasure-map", title: "Simple Pirate Treasure Map", tags: ["adventure", "map", "pirate", "easy"] },
        medium: { id: "vintage-nautical-compass", title: "Vintage Nautical Brass Compass", tags: ["adventure", "compass", "nautical", "vintage"] },
        hard: { id: "intricate-medieval-world-map", title: "Intricate Medieval World Map Tapestry", tags: ["adventure", "map", "medieval", "intricate"] }
      },
      {
        name: "Beaches & Palms",
        easy: { id: "simple-palm-tree-island", title: "Simple Palm Tree Desert Island", tags: ["adventure", "beach", "palm tree", "easy"] },
        medium: { id: "sunny-beach-chair-umbrella", title: "Sunny Beach Chair and Umbrella", tags: ["adventure", "beach", "umbrella", "scenic"] },
        hard: { id: "intricate-tropical-lagoon-paradise", title: "Intricate Tropical Lagoon Paradise", tags: ["adventure", "beach", "lagoon", "intricate"] }
      }
    ]
  },
  astrology: {
    categoryName: "Zodiac & Astrology",
    subcategories: [
      {
        name: "Zodiac Signs",
        easy: { id: "simple-leo-lion-star", title: "Simple Leo Lion Star Sign Symbol", tags: ["astrology", "zodiac", "leo", "easy"] },
        medium: { id: "zodiac-wheel-astronomy", title: "Zodiac Wheel Celestial Symbols", tags: ["astrology", "zodiac", "wheel", "symbols"] },
        hard: { id: "detailed-astrological-birth-chart", title: "Detailed Astrological Birth Chart Map", tags: ["astrology", "zodiac", "chart", "intricate"] }
      },
      {
        name: "Moon Phases",
        easy: { id: "smiling-moon-phases", title: "Smiling Moon Phases Cartoon", tags: ["astrology", "moon", "lunar", "cartoon"] },
        medium: { id: "lunar-cycle-night-sky", title: "Lunar Cycle across Starry Night Sky", tags: ["astrology", "moon", "lunar", "starfield"] },
        hard: { id: "intricate-goddess-moon-tapestry", title: "Intricate Lunar Goddess Moon Tapestry", tags: ["astrology", "moon", "goddess", "intricate"] }
      },
      {
        name: "Constellations",
        easy: { id: "simple-big-dipper", title: "Simple Big Dipper Ursa Major Stars", tags: ["astrology", "constellation", "stars", "easy"] },
        medium: { id: "starfield-constellation-overlay", title: "Starfield Constellation Figure Overlays", tags: ["astrology", "constellation", "sky", "astronomy"] },
        hard: { id: "detailed-celestial-star-map", title: "Detailed Northern Hemisphere Celestial Star Map", tags: ["astrology", "constellation", "star map", "intricate"] }
      },
      {
        name: "Tarot Motifs",
        easy: { id: "simple-tarot-card-star", title: "Simple The Star Tarot Card", tags: ["astrology", "tarot", "card", "star"] },
        medium: { id: "the-sun-tarot-card", title: "The Sun Tarot Card Classic line art", tags: ["astrology", "tarot", "card", "the sun"] },
        hard: { id: "intricate-wheel-of-fortune-tarot", title: "Intricate Wheel of Fortune Tarot Card", tags: ["astrology", "tarot", "card", "wheel", "intricate"] }
      }
    ]
  },
  monsters: {
    categoryName: "Monsters & Cute Beasts",
    subcategories: [
      {
        name: "Friendly Monsters",
        easy: { id: "cute-one-eyed-monster", title: "Cute One-Eyed Monster Smiling", tags: ["monsters", "friendly", "cartoon", "cute"] },
        medium: { id: "furry-monster-friends", title: "Furry Monster Friends playing Tag", tags: ["monsters", "friendly", "furry", "cute"] },
        hard: { id: "detailed-monster-party-doodle", title: "Detailed Monster Party Collage Doodle", tags: ["monsters", "doodle", "party", "intricate"] }
      },
      {
        name: "Mythical Beasts",
        easy: { id: "simple-cute-nessie", title: "Simple Cute Loch Ness Monster", tags: ["monsters", "mythical", "nessie", "cute"] },
        medium: { id: "griffin-nest-cliffs", title: "Griffin guarding Nest on Cliffs", tags: ["monsters", "mythical", "griffin", "nest"] },
        hard: { id: "intricate-chimera-beast", title: "Intricate Mythical Chimera Beast", tags: ["monsters", "mythical", "chimera", "intricate"] }
      },
      {
        name: "Halloween Doodles",
        easy: { id: "smiling-candy-corn", title: "Smiling Candy Corn Carton", tags: ["monsters", "halloween", "candy corn", "cute"] },
        medium: { id: "little-mummy-frankenstein", title: "Little Mummy and Frankenstein chibi", tags: ["monsters", "halloween", "mummy", "cute"] },
        hard: { id: "detailed-monsters-halloween-party", title: "Detailed Monsters Halloween Costume Party", tags: ["monsters", "halloween", "party", "intricate"] }
      }
    ]
  },
  farm: {
    categoryName: "Farm & Country",
    subcategories: [
      {
        name: "Tractors & Plows",
        easy: { id: "simple-farm-tractor", title: "Simple Cartoon Farm Tractor", tags: ["farm", "tractor", "cartoon", "easy"] },
        medium: { id: "tractor-plowing-fields", title: "Farm Tractor Plowing Sunset Fields", tags: ["farm", "tractor", "plowing", "fields"] },
        hard: { id: "detailed-vintage-harvester", title: "Detailed Vintage Harvester Machine", tags: ["farm", "harvester", "vintage", "intricate"] }
      },
      {
        name: "Barns & Silos",
        easy: { id: "simple-red-barn", title: "Simple Red Barn Outline", tags: ["farm", "barn", "silo", "easy"] },
        medium: { id: "farm-landscape-silo", title: "Farm Barn and Grain Silo Landscape", tags: ["farm", "barn", "silo", "scenic"] },
        hard: { id: "detailed-homestead-pasture", title: "Detailed Homestead Barnyard Pasture", tags: ["farm", "barnyard", "homestead", "intricate"] }
      },
      {
        name: "Cows & Pigs",
        easy: { id: "happy-spotted-cow", title: "Happy Spotted Dairy Cow", tags: ["farm", "cow", "spotted", "cute"] },
        medium: { id: "piglets-playing-mud", title: "Piglets Playing in Mud Puddle", tags: ["farm", "pig", "mud", "cute"] },
        hard: { id: "intricate-barnyard-animal-mandala", title: "Intricate Barnyard Animal Mandala", tags: ["farm", "mandala", "cow", "intricate"] }
      },
      {
        name: "Roosters & Hens",
        easy: { id: "cute-baby-chicks", title: "Cute Baby Chicks hatching", tags: ["farm", "chick", "baby", "cute"] },
        medium: { id: "rooster-crowing-fence", title: "Proud Rooster Crowing on Fence", tags: ["farm", "rooster", "fence", "morning"] },
        hard: { id: "detailed-hen-house-coop", title: "Detailed Hen House and Chicken Coop", tags: ["farm", "hen", "coop", "intricate"] }
      }
    ]
  },
  toys: {
    categoryName: "Toys & Games",
    subcategories: [
      {
        name: "Teddy Bears",
        easy: { id: "simple-fluffy-teddy", title: "Simple Fluffy Teddy Bear", tags: ["toys", "teddy bear", "fluffy", "cute"] },
        medium: { id: "teddy-bear-tea-party", title: "Teddy Bear Backyard Tea Party", tags: ["toys", "teddy bear", "tea party", "garden"] },
        hard: { id: "detailed-antique-toy-shelf", title: "Detailed Antique Toy Shelf Cabinet", tags: ["toys", "antique", "shelves", "intricate"] }
      },
      {
        name: "Board Games",
        easy: { id: "simple-dice-dominoes", title: "Simple Game Dice and Dominoes", tags: ["toys", "dice", "dominoes", "easy"] },
        medium: { id: "kids-playing-board-game", title: "Children Playing Classic Board Game", tags: ["toys", "board game", "play", "table"] },
        hard: { id: "intricate-chess-set-clash", title: "Intricate Chess Set Clash Action", tags: ["toys", "chess", "pieces", "intricate"] }
      },
      {
        name: "Toy Robots",
        easy: { id: "simple-windup-robot", title: "Simple Wind-up Key Toy Robot", tags: ["toys", "robot", "wind-up", "easy"] },
        medium: { id: "vintage-tin-robot-retro", title: "Vintage Tin Retro Toy Robot", tags: ["toys", "robot", "vintage", "retro"] },
        hard: { id: "intricate-toy-mechanic-workshop", title: "Intricate Toy Mechanic Repair Workshop", tags: ["toys", "robot", "workshop", "intricate"] }
      },
      {
        name: "Dolls & Puppets",
        easy: { id: "cute-sock-puppet", title: "Cute Smiling Sock Puppet", tags: ["toys", "puppet", "sock puppet", "cute"] },
        medium: { id: "wooden-marionette-puppet", title: "Wooden Marionette on Strings", tags: ["toys", "puppet", "marionette", "stage"] },
        hard: { id: "detailed-victorian-dollhouse", title: "Detailed Multi-Story Victorian Dollhouse", tags: ["toys", "dollhouse", "victorian", "intricate"] }
      }
    ]
  },
  quotes: {
    categoryName: "Quotes & Typography",
    subcategories: [
      {
        name: "Inspirational Quotes",
        easy: { id: "dream-big-bold-letters", title: "Dream Big Bold Bubble Letters", tags: ["quotes", "inspirational", "letters", "easy"] },
        medium: { id: "stay-positive-floral-border", title: "Stay Positive in Floral Border", tags: ["quotes", "inspirational", "floral", "message"] },
        hard: { id: "intricate-be-kind-mandala-quote", title: "Intricate Be Kind Mandala Quote", tags: ["quotes", "inspirational", "mandala", "intricate"] }
      },
      {
        name: "Holiday Greetings",
        easy: { id: "merry-christmas-bold", title: "Merry Christmas Bold Block Text", tags: ["quotes", "holiday", "christmas", "greetings"] },
        medium: { id: "happy-thanksgiving-leafy-text", title: "Happy Thanksgiving Leafy Banner Text", tags: ["quotes", "holiday", "thanksgiving", "autumn"] },
        hard: { id: "intricate-happy-new-year-fireworks", title: "Intricate Happy New Year Fireworks Calligraphy", tags: ["quotes", "holiday", "new year", "intricate"] }
      },
      {
        name: "Stylized Monograms",
        easy: { id: "bold-initial-letter-a", title: "Bold Initial Letter A Outline", tags: ["quotes", "monogram", "letter a", "easy"] },
        medium: { id: "flowery-monogram-initials", title: "Flowery Monogram Initials Frame", tags: ["quotes", "monogram", "initials", "floral"] },
        hard: { id: "intricate-celtic-monogram-crest", title: "Intricate Celtic Monogram Crest Shield", tags: ["quotes", "monogram", "celtic", "intricate"] }
      }
    ]
  },
  seafloor: {
    categoryName: "Under the Sea",
    subcategories: [
      {
        name: "Sunken Ships",
        easy: { id: "simple-pirate-shipwreck", title: "Simple Pirate Shipwreck outline", tags: ["seafloor", "shipwreck", "pirate", "easy"] },
        medium: { id: "sunken-galleon-sharks", title: "Sunken Spanish Galleon and Sharks", tags: ["seafloor", "shipwreck", "sharks", "waves"] },
        hard: { id: "intricate-underwater-shipwreck-reef", title: "Intricate Sunken Shipwreck Coral Reef", tags: ["seafloor", "shipwreck", "reef", "intricate"] }
      },
      {
        name: "Submarines",
        easy: { id: "simple-yellow-submarine", title: "Simple Yellow Submarine Cartoon", tags: ["seafloor", "submarine", "yellow", "cute"] },
        medium: { id: "deep-sea-sub-trench", title: "Deep Sea Submarine exploring Trench", tags: ["seafloor", "submarine", "deep sea", "trench"] },
        hard: { id: "detailed-futuristic-sub-hangar", title: "Detailed Futuristic Underwater Sub Hangar", tags: ["seafloor", "submarine", "hangar", "intricate"] }
      },
      {
        name: "Treasure Chests",
        easy: { id: "open-treasure-chest", title: "Open Wooden Treasure Chest Cartoon", tags: ["seafloor", "treasure", "chest", "easy"] },
        medium: { id: "sunken-chest-gold-coins", title: "Sunken Chest spilling Gold Coins", tags: ["seafloor", "treasure", "chest", "gold"] },
        hard: { id: "detailed-mermaid-treasure-hoard", title: "Detailed Mermaid Treasure Hoard Cave", tags: ["seafloor", "treasure", "mermaid", "intricate"] }
      },
      {
        name: "Mermaid Citadels",
        easy: { id: "simple-mermaid-castle", title: "Simple Mermaid Sand Castle outline", tags: ["seafloor", "mermaid", "castle", "easy"] },
        medium: { id: "underwater-palace-dolphins", title: "Underwater Pearl Palace with Dolphins", tags: ["seafloor", "mermaid", "palace", "dolphin"] },
        hard: { id: "intricate-atlantis-sunken-city", title: "Intricate Atlantis Sunken City Ruins", tags: ["seafloor", "mermaid", "atlantis", "intricate"] }
      }
    ]
  }
};

console.log('=== Starting Massive Taxonomy Scaffolding Pipeline ===');
let scaffoldedCount = 0;
let skippedCount = 0;

for (const [catId, catInfo] of Object.entries(taxonomy)) {
  const catPath = path.join(CONTENT_DIR, catId);

  // 1. Ensure category folder and category.json exists
  if (!fs.existsSync(catPath)) {
    fs.mkdirSync(catPath, { recursive: true });
    console.log(`Created Category Directory: [${catId}]`);
  }

  const categoryJsonPath = path.join(catPath, 'category.json');
  if (!fs.existsSync(categoryJsonPath)) {
    const defaultMeta = {
      name: catInfo.categoryName,
      description: `Free printable ${catInfo.categoryName} coloring pages for kids and adults.`,
      icon: "🎨"
    };
    fs.writeFileSync(categoryJsonPath, JSON.stringify(defaultMeta, null, 2), 'utf8');
    console.log(`  └─ Created category.json`);
  }

  // 2. Loop through subcategories
  for (const subInfo of catInfo.subcategories) {
    const subName = subInfo.name;

    // A subcategory contains exactly an Easy, Medium, and Hard sheet
    const pages = [
      { key: 'easy', difficulty: 'Easy' },
      { key: 'medium', difficulty: 'Medium' },
      { key: 'hard', difficulty: 'Hard' }
    ];

    for (const pageObj of pages) {
      const pageData = subInfo[pageObj.key];
      if (!pageData) continue;

      const pageId = pageData.id;
      const pagePath = path.join(catPath, pageId);
      
      // 3. Skip existing pages to protect generated drawings
      if (fs.existsSync(pagePath) && fs.existsSync(path.join(pagePath, 'metadata.json'))) {
        skippedCount++;
        continue;
      }

      // 4. Scaffold the page
      if (!fs.existsSync(pagePath)) {
        fs.mkdirSync(pagePath, { recursive: true });
      }

      // Prepare metadata.json content
      const title = `${pageData.title} Coloring Page`;
      const seoTitle = `${pageObj.difficulty} ${pageData.title} Coloring Page - Free PDF | ColoringPalace`;
      
      let seoDescription = `Download and print this ${pageObj.difficulty.toLowerCase()} ${pageData.title.toLowerCase()} coloring sheet. `;
      if (pageObj.difficulty === 'Easy') {
        seoDescription += `Perfect for toddlers and young kids with thick outlines and large coloring spaces. High-resolution free vector PDF.`;
      } else if (pageObj.difficulty === 'Medium') {
        seoDescription += `Ideal for kids and teens with balanced outlines, natural textures, and a beautiful scenic background. Free printable PDF.`;
      } else {
        seoDescription += `Densely packed mandala and intricate patterns designed for adult mindfulness and stress relief. Free high-res printable PDF.`;
      }

      const metadata = {
        id: pageId,
        title: title,
        category: catInfo.categoryName,
        subcategory: subName,
        tags: pageData.tags,
        seoTitle: seoTitle,
        seoDescription: seoDescription,
        difficulty: pageObj.difficulty,
        author: "Antigravity Agent"
      };

      // Write metadata.json
      fs.writeFileSync(path.join(pagePath, 'metadata.json'), JSON.stringify(metadata, null, 2), 'utf8');

      // Write printable.pdf mock
      fs.writeFileSync(path.join(pagePath, 'printable.pdf'), 'MOCK PDF CONTENT\n', 'utf8');

      // Copy standard placeholder image
      const targetImage = path.join(pagePath, 'image.png');
      fs.copyFileSync(PLACEHOLDER_SOURCE, targetImage);

      scaffoldedCount++;
    }
  }
}

console.log(`\n=== Scaffolding Complete ===`);
console.log(`Scaffolded: ${scaffoldedCount} new pages.`);
console.log(`Skipped (already exists): ${skippedCount} pages.`);
console.log('============================');
