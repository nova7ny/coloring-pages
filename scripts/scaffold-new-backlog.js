const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '../public/content');
const COMING_SOON_SRC = path.join(__dirname, '../public/images/coming-soon.png');

if (!fs.existsSync(COMING_SOON_SRC)) {
  console.error(`Base placeholder image not found at ${COMING_SOON_SRC}`);
  process.exit(1);
}

const placeholderBuffer = fs.readFileSync(COMING_SOON_SRC);

// Define 90 pages (1 Easy, 2 Medium per category across 30 categories)
const newPagesList = [
  // 1. animals
  {
    id: "playful-puppy",
    categoryId: "animals",
    categoryName: "Animals",
    title: "Playful Puppy Coloring Page",
    subcategory: "Dogs",
    tags: ["dog", "puppy", "cute", "pets"],
    difficulty: "Easy",
    seoTitle: "Free Playful Puppy Coloring Page (Printable PDF)",
    seoDescription: "Download and print this cute playful puppy coloring page. High-resolution free printable PDF for kids and puppy lovers."
  },
  {
    id: "howling-wolf-forest",
    categoryId: "animals",
    categoryName: "Animals",
    title: "Howling Wolf in Forest Coloring Page",
    subcategory: "Forest Wildlife",
    tags: ["wolf", "forest", "wildlife", "howling"],
    difficulty: "Medium",
    seoTitle: "Howling Wolf in Forest Coloring Page - Free PDF Print",
    seoDescription: "Get creative with this medium difficulty howling wolf in a forest scene coloring sheet. Free printable high-res PDF."
  },
  {
    id: "running-cheetah-savannah",
    categoryId: "animals",
    categoryName: "Animals",
    title: "Running Cheetah in Savannah Coloring Page",
    subcategory: "Jungle & Safari",
    tags: ["cheetah", "safari", "savannah", "running"],
    difficulty: "Medium",
    seoTitle: "Running Cheetah Savannah Coloring Page - Free PDF",
    seoDescription: "Download and print this running cheetah coloring page. Perfect for kids who love fast safari animals. Free high-res PDF."
  },

  // 2. mandalas
  {
    id: "simple-heart-mandala",
    categoryId: "mandalas",
    categoryName: "Mandalas",
    title: "Simple Heart Mandala Coloring Page",
    subcategory: "Abstract Circular",
    tags: ["mandala", "heart", "love", "easy"],
    difficulty: "Easy",
    seoTitle: "Simple Heart Mandala Coloring Page - Free PDF",
    seoDescription: "Relax with this easy heart mandala coloring page. High-resolution free printable PDF for kids and beginners."
  },
  {
    id: "blooming-lotus-mandala",
    categoryId: "mandalas",
    categoryName: "Mandalas",
    title: "Blooming Lotus Mandala Coloring Page",
    subcategory: "Floral",
    tags: ["mandala", "lotus", "flower", "mindfulness"],
    difficulty: "Medium",
    seoTitle: "Blooming Lotus Mandala Coloring Page - Free PDF Print",
    seoDescription: "Download and print this beautiful blooming lotus mandala sheet for meditative mindfulness. Free high-quality PDF."
  },
  {
    id: "geometric-stars-mandala",
    categoryId: "mandalas",
    categoryName: "Mandalas",
    title: "Geometric Stars Mandala Coloring Page",
    subcategory: "Geometric",
    tags: ["mandala", "stars", "geometric", "pattern"],
    difficulty: "Medium",
    seoTitle: "Geometric Stars Mandala Coloring Page - Free PDF",
    seoDescription: "Enjoy coloring this medium geometric stars mandala page. Free high-resolution printable PDF for kids and adults."
  },

  // 3. nature
  {
    id: "simple-desert-cactus",
    categoryId: "nature",
    categoryName: "Nature & Landscapes",
    title: "Simple Desert Cactus Coloring Page",
    subcategory: "Deserts",
    tags: ["cactus", "desert", "nature", "easy"],
    difficulty: "Easy",
    seoTitle: "Simple Desert Cactus Coloring Page - Free PDF",
    seoDescription: "Download this simple desert cactus coloring sheet for kids. High-resolution free printable PDF."
  },
  {
    id: "rocky-mountain-trail",
    categoryId: "nature",
    categoryName: "Nature & Landscapes",
    title: "Rocky Mountain Trail Coloring Page",
    subcategory: "Mountains",
    tags: ["mountain", "trail", "hiking", "scenic"],
    difficulty: "Medium",
    seoTitle: "Rocky Mountain Trail Landscape Coloring Page - Free PDF",
    seoDescription: "Explore nature with this rocky mountain trail landscape coloring page. Free high-resolution printable PDF."
  },
  {
    id: "forest-river-bridge",
    categoryId: "nature",
    categoryName: "Nature & Landscapes",
    title: "Forest River Bridge Coloring Page",
    subcategory: "Lakes & Rivers",
    tags: ["river", "bridge", "forest", "nature"],
    difficulty: "Medium",
    seoTitle: "Forest River Bridge Coloring Page - Free PDF Print",
    seoDescription: "Color a beautiful scenic forest river and bridge. Free high-quality printable PDF for kids and adults."
  },

  // 4. space
  {
    id: "happy-little-alien",
    categoryId: "space",
    categoryName: "Space & Astronomy",
    title: "Happy Little Alien Coloring Page",
    subcategory: "Planets",
    tags: ["alien", "space", "ufo", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Happy Little Alien Cartoon Coloring Page - Free PDF",
    seoDescription: "Have fun with this cute, simple cartoon alien in space coloring sheet. Free high-res printable PDF."
  },
  {
    id: "astronaut-floating-tether",
    categoryId: "space",
    categoryName: "Space & Astronomy",
    title: "Astronaut Floating with Tether Coloring Page",
    subcategory: "Astronauts",
    tags: ["astronaut", "space", "spacewalk", "tether"],
    difficulty: "Medium",
    seoTitle: "Astronaut Floating Space Walk Coloring Page - Free PDF",
    seoDescription: "Download this medium difficulty spacewalking astronaut coloring page. Free high-resolution printable PDF."
  },
  {
    id: "deep-space-probe",
    categoryId: "space",
    categoryName: "Space & Astronomy",
    title: "Deep Space Probe Coloring Page",
    subcategory: "Spacecraft",
    tags: ["probe", "satellite", "spacecraft", "galaxy"],
    difficulty: "Medium",
    seoTitle: "Deep Space Probe Satellite Coloring Page - Free PDF",
    seoDescription: "Color a deep space probe satellite traveling through the stars. Free high-resolution printable PDF."
  },

  // 5. fantasy
  {
    id: "cute-castle-drawbridge",
    categoryId: "fantasy",
    categoryName: "Fantasy & Fairy Tales",
    title: "Cute Castle Drawbridge Coloring Page",
    subcategory: "Castles",
    tags: ["castle", "drawbridge", "fairytale", "easy"],
    difficulty: "Easy",
    seoTitle: "Cute Castle Drawbridge Coloring Page - Free PDF",
    seoDescription: "Download this easy fairytale castle drawbridge coloring sheet. Perfect for kids. Free printable PDF."
  },
  {
    id: "friendly-swamp-monster",
    categoryId: "fantasy",
    categoryName: "Fantasy & Fairy Tales",
    title: "Friendly Swamp Monster Coloring Page",
    subcategory: "Mythical Creatures",
    tags: ["monster", "swamp", "fantasy", "cute"],
    difficulty: "Medium",
    seoTitle: "Friendly Swamp Monster Fantasy Coloring Page - Free PDF",
    seoDescription: "Color a friendly swamp monster in an enchanted mythical setting. Free high-resolution printable PDF."
  },
  {
    id: "fairy-riding-butterfly",
    categoryId: "fantasy",
    categoryName: "Fantasy & Fairy Tales",
    title: "Fairy Riding a Butterfly Coloring Page",
    subcategory: "Fairies",
    tags: ["fairy", "butterfly", "magic", "garden"],
    difficulty: "Medium",
    seoTitle: "Fairy Riding a Butterfly Coloring Page - Free PDF",
    seoDescription: "Bring magic to life with this fairy riding a butterfly coloring sheet. Free high-quality printable PDF."
  },

  // 6. flowers
  {
    id: "simple-potted-tulip",
    categoryId: "flowers",
    categoryName: "Flowers & Plants",
    title: "Simple Potted Tulip Coloring Page",
    subcategory: "Succulents & Cacti",
    tags: ["tulip", "flower", "pot", "easy"],
    difficulty: "Easy",
    seoTitle: "Simple Potted Tulip Flower Coloring Page - Free PDF",
    seoDescription: "Download this simple potted tulip flower coloring sheet. Great for classroom activities. Free PDF."
  },
  {
    id: "wildflower-meadow-stream",
    categoryId: "flowers",
    categoryName: "Flowers & Plants",
    title: "Wildflower Meadow Stream Coloring Page",
    subcategory: "Wildflowers",
    tags: ["wildflower", "meadow", "stream", "nature"],
    difficulty: "Medium",
    seoTitle: "Wildflower Meadow Stream Coloring Page - Free PDF",
    seoDescription: "Color a serene stream flowing through a wildflower meadow. Free high-resolution printable PDF."
  },
  {
    id: "rose-garden-arbor",
    categoryId: "flowers",
    categoryName: "Flowers & Plants",
    title: "Rose Garden Arbor Coloring Page",
    subcategory: "Roses",
    tags: ["rose", "garden", "arbor", "floral"],
    difficulty: "Medium",
    seoTitle: "Rose Garden Arbor Floral Coloring Page - Free PDF",
    seoDescription: "Download and print this beautiful rose garden arbor scene coloring sheet. Free high-resolution PDF."
  },

  // 7. dinosaurs
  {
    id: "cute-dino-hatched-egg",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Cute Dino Hatched from Egg Coloring Page",
    subcategory: "Prehistoric",
    tags: ["dinosaur", "egg", "baby", "cute"],
    difficulty: "Easy",
    seoTitle: "Cute Baby Dino Hatched Egg Coloring Page - Free PDF",
    seoDescription: "Download this cute baby dinosaur hatching from an egg coloring page. Free high-res printable PDF."
  },
  {
    id: "velociraptor-chasing-prey",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Velociraptor Chasing Prey Coloring Page",
    subcategory: "Predators",
    tags: ["dinosaur", "velociraptor", "chase", "prehistoric"],
    difficulty: "Medium",
    seoTitle: "Velociraptor Chasing Prey Dinosaur Coloring Page - Free PDF",
    seoDescription: "Get creative with this active velociraptor hunting scene coloring sheet. Free high-quality printable PDF."
  },
  {
    id: "stegosaurus-river-drink",
    categoryId: "dinosaurs",
    categoryName: "Dinosaurs",
    title: "Stegosaurus Drinking from River Coloring Page",
    subcategory: "Herbivores",
    tags: ["dinosaur", "stegosaurus", "river", "prehistoric"],
    difficulty: "Medium",
    seoTitle: "Stegosaurus River Drinking Coloring Page - Free PDF",
    seoDescription: "Print this prehistoric stegosaurus drinking from a river coloring page. Free high-resolution PDF."
  },

  // 8. ocean
  {
    id: "simple-smiling-whale",
    categoryId: "ocean",
    categoryName: "Ocean & Marine Life",
    title: "Simple Smiling Whale Coloring Page",
    subcategory: "Sea Creatures",
    tags: ["whale", "ocean", "cartoon", "cute"],
    difficulty: "Easy",
    seoTitle: "Simple Smiling Whale Cartoon Coloring Page - Free PDF",
    seoDescription: "Download this simple cartoon smiling whale coloring page. Ideal for kids. Free printable PDF."
  },
  {
    id: "coral-reef-octopus",
    categoryId: "ocean",
    categoryName: "Ocean & Marine Life",
    title: "Coral Reef Octopus Coloring Page",
    subcategory: "Coral Reefs",
    tags: ["octopus", "coral", "reef", "ocean"],
    difficulty: "Medium",
    seoTitle: "Coral Reef Octopus Marine Life Coloring Page - Free PDF",
    seoDescription: "Download and print this coral reef octopus scene coloring page. Free high-resolution PDF."
  },
  {
    id: "playful-sea-otter",
    categoryId: "ocean",
    categoryName: "Ocean & Marine Life",
    title: "Playful Sea Otter Coloring Page",
    subcategory: "Sea Creatures",
    tags: ["otter", "ocean", "sea life", "cute"],
    difficulty: "Medium",
    seoTitle: "Playful Sea Otter Coloring Page - Free High-Res PDF",
    seoDescription: "Color a cute sea otter floating on its back in the ocean water. Free high-quality printable PDF."
  },

  // 9. vehicles
  {
    id: "simple-cartoon-tugboat",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Simple Cartoon Tugboat Coloring Page",
    subcategory: "Watercraft",
    tags: ["boat", "tugboat", "water", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Simple Cartoon Tugboat Watercraft Coloring Page - Free PDF",
    seoDescription: "Download this simple cartoon tugboat coloring sheet. Ideal for young children. Free PDF print file."
  },
  {
    id: "classic-muscle-car",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Classic Muscle Car Coloring Page",
    subcategory: "Vintage & Classics",
    tags: ["car", "muscle car", "classic", "vintage"],
    difficulty: "Medium",
    seoTitle: "Classic Muscle Car Coloring Page - Free PDF Download",
    seoDescription: "Print this classic vintage muscle car hot rod coloring sheet. Free high-resolution printable PDF."
  },
  {
    id: "modern-sports-motorcycle",
    categoryId: "vehicles",
    categoryName: "Vehicles & Transport",
    title: "Modern Sports Motorcycle Coloring Page",
    subcategory: "Sports Cars",
    tags: ["motorcycle", "bike", "sports", "speed"],
    difficulty: "Medium",
    seoTitle: "Modern Sports Motorcycle Coloring Page - Free PDF",
    seoDescription: "Color a fast, modern sports motorcycle/street bike design. Free high-resolution printable PDF."
  },

  // 10. holidays
  {
    id: "happy-easter-chick",
    categoryId: "holidays",
    categoryName: "Holidays & Seasons",
    title: "Happy Easter Chick Coloring Page",
    subcategory: "Easter",
    tags: ["easter", "chick", "egg", "cute"],
    difficulty: "Easy",
    seoTitle: "Happy Easter Chick and Eggs Coloring Page - Free PDF",
    seoDescription: "Get festive with this cute happy Easter chick and painted eggs coloring page. Free high-res PDF."
  },
  {
    id: "santa-filling-stockings",
    categoryId: "holidays",
    categoryName: "Holidays & Seasons",
    title: "Santa Filling Stockings Coloring Page",
    subcategory: "Christmas",
    tags: ["christmas", "santa", "stocking", "holiday"],
    difficulty: "Medium",
    seoTitle: "Santa Claus Filling Stockings Coloring Page - Free PDF",
    seoDescription: "Print this medium difficulty Santa Claus stocking stuffer scene coloring sheet. Free high-res PDF."
  },
  {
    id: "thanksgiving-pumpkin-pie",
    categoryId: "holidays",
    categoryName: "Holidays & Seasons",
    title: "Thanksgiving Pumpkin Pie Coloring Page",
    subcategory: "Thanksgiving",
    tags: ["thanksgiving", "pumpkin pie", "harvest", "holiday"],
    difficulty: "Medium",
    seoTitle: "Thanksgiving Autumn Pumpkin Pie Coloring Page - Free PDF",
    seoDescription: "Celebrate harvest with this Thanksgiving pumpkin pie dessert coloring sheet. Free printable PDF."
  },

  // 11. kawaii
  {
    id: "happy-toast-slice",
    categoryId: "kawaii",
    categoryName: "Cute & Kawaii",
    title: "Happy Toast Slice Coloring Page",
    subcategory: "Smiling Food",
    tags: ["kawaii", "toast", "breakfast", "cute"],
    difficulty: "Easy",
    seoTitle: "Happy Toast Slice Cute Kawaii Coloring Page - Free PDF",
    seoDescription: "Download this cute cartoon happy toast slice coloring sheet. High-resolution free printable PDF."
  },
  {
    id: "kawaii-boba-tea",
    categoryId: "kawaii",
    categoryName: "Cute & Kawaii",
    title: "Kawaii Boba Tea Cup Coloring Page",
    subcategory: "Smiling Food",
    tags: ["kawaii", "boba", "tea", "drink"],
    difficulty: "Medium",
    seoTitle: "Kawaii Boba Bubble Tea Cup Coloring Page - Free PDF",
    seoDescription: "Color a smiling bubble boba tea cup with cute stars and bubbles. Free high-resolution printable PDF."
  },
  {
    id: "cute-kawaii-avocado",
    categoryId: "kawaii",
    categoryName: "Cute & Kawaii",
    title: "Cute Kawaii Avocado Friends Coloring Page",
    subcategory: "Smiling Food",
    tags: ["kawaii", "avocado", "fruit", "cute"],
    difficulty: "Medium",
    seoTitle: "Cute Kawaii Avocado Friends Coloring Page - Free PDF",
    seoDescription: "Print this cute smiling kawaii avocado friends coloring page. High-resolution free printable PDF."
  },

  // 12. superheroes
  {
    id: "cute-hero-flying-cat",
    categoryId: "superheroes",
    categoryName: "Superheroes & Sci-Fi",
    title: "Cute Hero Saving Flying Cat Coloring Page",
    subcategory: "Masked Heroes",
    tags: ["superhero", "cat", "flying", "cute"],
    difficulty: "Easy",
    seoTitle: "Cute Kid Superhero Saving Flying Cat Coloring Page - Free PDF",
    seoDescription: "Download this cute kid superhero saving a kitten coloring sheet. Free high-res printable PDF."
  },
  {
    id: "futuristic-hover-car",
    categoryId: "superheroes",
    categoryName: "Superheroes & Sci-Fi",
    title: "Futuristic Hover Car Coloring Page",
    subcategory: "Sci-Fi Robots",
    tags: ["hover car", "future", "scifi", "vehicle"],
    difficulty: "Medium",
    seoTitle: "Futuristic Hover Car Sci-Fi Vehicle Coloring Page - Free PDF",
    seoDescription: "Color a futuristic sci-fi flying hover car design. Free high-resolution printable PDF."
  },
  {
    id: "superhero-deflecting-lasers",
    categoryId: "superheroes",
    categoryName: "Superheroes & Sci-Fi",
    title: "Superhero Deflecting Lasers Coloring Page",
    subcategory: "Action Poses",
    tags: ["superhero", "lasers", "shield", "action"],
    difficulty: "Medium",
    seoTitle: "Superhero Deflecting Lasers with Shield Coloring Page - Free PDF",
    seoDescription: "Print this active superhero deflecting laser beams with a shield coloring sheet. Free high-res PDF."
  },

  // 13. anime
  {
    id: "cute-anime-mascot-flying",
    categoryId: "anime",
    categoryName: "Anime & Manga",
    title: "Cute Anime Mascot Flying Coloring Page",
    subcategory: "Chibi Characters",
    tags: ["anime", "mascot", "chibi", "cute"],
    difficulty: "Easy",
    seoTitle: "Cute Anime Mascot Flying Creature Coloring Page - Free PDF",
    seoDescription: "Download this cute flying chibi anime mascot fantasy companion coloring sheet. Free printable PDF."
  },
  {
    id: "anime-warrior-holding-shield",
    categoryId: "anime",
    categoryName: "Anime & Manga",
    title: "Anime Warrior Holding Shield Coloring Page",
    subcategory: "Action Anime",
    tags: ["anime", "warrior", "shield", "action"],
    difficulty: "Medium",
    seoTitle: "Anime Warrior Knight holding Shield Coloring Page - Free PDF",
    seoDescription: "Color an active anime knight warrior holding a shield in a combat pose. Free high-quality PDF."
  },
  {
    id: "magical-girl-casting-spell",
    categoryId: "anime",
    categoryName: "Anime & Manga",
    title: "Magical Girl Casting Spell Coloring Page",
    subcategory: "Magical Girls",
    tags: ["anime", "magical girl", "spell", "magic"],
    difficulty: "Medium",
    seoTitle: "Anime Magical Girl Casting Star Spell Coloring Page - Free PDF",
    seoDescription: "Download and print this anime magical girl casting a star spark spell. Free high-resolution PDF."
  },

  // 14. food
  {
    id: "simple-glazed-donut",
    categoryId: "food",
    categoryName: "Food & Sweets",
    title: "Simple Glazed Donut Coloring Page",
    subcategory: "Ice Cream & Treats",
    tags: ["donut", "glazed", "sweet", "easy"],
    difficulty: "Easy",
    seoTitle: "Simple Glazed Donut Sweet Pastry Coloring Page - Free PDF",
    seoDescription: "Download this simple cartoon glazed donut coloring sheet. Ideal for young kids. Free PDF."
  },
  {
    id: "tall-pancake-stack",
    categoryId: "food",
    categoryName: "Food & Sweets",
    title: "Tall Pancake Stack with Syrup Coloring Page",
    subcategory: "Ice Cream & Treats",
    tags: ["pancakes", "breakfast", "syrup", "sweet"],
    difficulty: "Medium",
    seoTitle: "Tall Stack of Pancakes with Butter and Syrup Coloring Page",
    seoDescription: "Print this delicious stack of breakfast pancakes with dripping syrup. Free high-res printable PDF."
  },
  {
    id: "delicious-pepperoni-pizza",
    categoryId: "food",
    categoryName: "Food & Sweets",
    title: "Delicious Pepperoni Pizza Coloring Page",
    subcategory: "Pizza & Burgers",
    tags: ["pizza", "pepperoni", "cheese", "food"],
    difficulty: "Medium",
    seoTitle: "Delicious Whole Pepperoni Pizza Coloring Page - Free PDF",
    seoDescription: "Get creative with this pepperoni pizza pie coloring sheet. Free high-resolution printable PDF."
  },

  // 15. sports
  {
    id: "simple-tennis-racket",
    categoryId: "sports",
    categoryName: "Sports & Activities",
    title: "Simple Tennis Racket and Ball Coloring Page",
    subcategory: "Tennis",
    tags: ["tennis", "racket", "ball", "easy"],
    difficulty: "Easy",
    seoTitle: "Simple Tennis Racket and Ball Sports Coloring Page - Free PDF",
    seoDescription: "Download this simple tennis racket and tennis ball coloring page. Free high-res printable PDF."
  },
  {
    id: "soccer-goalie-saving",
    categoryId: "sports",
    categoryName: "Sports & Activities",
    title: "Soccer Goalie Saving Goal Coloring Page",
    subcategory: "Soccer",
    tags: ["soccer", "goalie", "save", "action"],
    difficulty: "Medium",
    seoTitle: "Soccer Goalie Diving to Save Goal Coloring Page - Free PDF",
    seoDescription: "Color an active soccer goalie diving to block a shot into the net. Free high-quality printable PDF."
  },
  {
    id: "skateboarder-riding-rail",
    categoryId: "sports",
    categoryName: "Sports & Activities",
    title: "Skateboarder Riding Railing Coloring Page",
    subcategory: "Skateboarding",
    tags: ["skateboard", "rail", "grind", "action"],
    difficulty: "Medium",
    seoTitle: "Skateboarder Grinding Railing Action Coloring Page - Free PDF",
    seoDescription: "Print this active skateboarder doing a rail grind trick. Free high-resolution printable PDF."
  },

  // 16. history
  {
    id: "simple-knight-helmet",
    categoryId: "history",
    categoryName: "History & Mythology",
    title: "Simple Medieval Knight Helmet Coloring Page",
    subcategory: "Knights & Castles",
    tags: ["history", "knight", "helmet", "easy"],
    difficulty: "Easy",
    seoTitle: "Simple Medieval Knight Armor Helmet Coloring Page - Free PDF",
    seoDescription: "Download this simple medieval knight helmet armor drawing. Free high-res printable PDF."
  },
  {
    id: "egyptian-pharaoh-profile",
    categoryId: "history",
    categoryName: "History & Mythology",
    title: "Egyptian Pharaoh Head Profile Coloring Page",
    subcategory: "Egyptian Pyramids",
    tags: ["history", "egypt", "pharaoh", "profile"],
    difficulty: "Medium",
    seoTitle: "Egyptian Pharaoh Head Crown Profile Coloring Page - Free PDF",
    seoDescription: "Download and print this ancient Egyptian pharaoh profile head portrait. Free high-quality PDF."
  },
  {
    id: "greek-god-hermes",
    categoryId: "history",
    categoryName: "History & Mythology",
    title: "Greek God Hermes Winged Sandals Coloring Page",
    subcategory: "Greek Gods",
    tags: ["history", "mythology", "hermes", "greece"],
    difficulty: "Medium",
    seoTitle: "Greek God Hermes messenger Winged Sandals Coloring Page - Free PDF",
    seoDescription: "Color the Greek god messenger Hermes running with winged sandals. Free high-resolution PDF."
  },

  // 17. patterns
  {
    id: "simple-chevron-stripes",
    categoryId: "patterns",
    categoryName: "Geometric & Patterns",
    title: "Simple Chevron Stripes Pattern Coloring Page",
    subcategory: "Abstract Lines",
    tags: ["pattern", "chevron", "stripes", "easy"],
    difficulty: "Easy",
    seoTitle: "Simple Chevron Stripes Geometric Pattern Coloring Page - Free PDF",
    seoDescription: "Download this simple repeating chevron zig-zag stripes pattern. Free high-res printable PDF."
  },
  {
    id: "tessellating-honeycomb-pattern",
    categoryId: "patterns",
    categoryName: "Geometric & Patterns",
    title: "Tessellating Honeycomb Pattern Coloring Page",
    subcategory: "Tessellations",
    tags: ["pattern", "tessellation", "honeycomb", "geometric"],
    difficulty: "Medium",
    seoTitle: "Tessellating Hexagon Honeycomb Pattern Coloring Page - Free PDF",
    seoDescription: "Enjoy coloring this geometric repeating hexagon honeycomb tile pattern. Free printable PDF."
  },
  {
    id: "illusion-impossible-triangle",
    categoryId: "patterns",
    categoryName: "Geometric & Patterns",
    title: "Impossible Triangle Illusion Coloring Page",
    subcategory: "Optical Illusions",
    tags: ["pattern", "illusion", "triangle", "impossible"],
    difficulty: "Medium",
    seoTitle: "Mind-Bending Impossible Penrose Triangle Illusion Coloring Page",
    seoDescription: "Print this classic optical illusion impossible Penrose triangle design. Free high-res PDF."
  },

  // 18. insects
  {
    id: "simple-smiling-caterpillar",
    categoryId: "insects",
    categoryName: "Insects & Bugs",
    title: "Simple Smiling Caterpillar Coloring Page",
    subcategory: "Ladybugs",
    tags: ["caterpillar", "bug", "garden", "cute"],
    difficulty: "Easy",
    seoTitle: "Simple Smiling Cartoon Caterpillar Coloring Page - Free PDF",
    seoDescription: "Download this cute cartoon smiling caterpillar crawling on a branch. Free printable PDF."
  },
  {
    id: "busy-ant-colony",
    categoryId: "insects",
    categoryName: "Insects & Bugs",
    title: "Busy Ant Colony Tunnels Coloring Page",
    subcategory: "Ladybugs",
    tags: ["ant", "colony", "tunnel", "nature"],
    difficulty: "Medium",
    seoTitle: "Busy Ant Colony Underground Tunnels Coloring Page - Free PDF",
    seoDescription: "Color an underground ant colony with tunnels, workers, and food. Free high-resolution PDF."
  },
  {
    id: "beautiful-monarch-butterfly",
    categoryId: "insects",
    categoryName: "Insects & Bugs",
    title: "Beautiful Monarch Butterfly Coloring Page",
    subcategory: "Butterflies",
    tags: ["butterfly", "monarch", "garden", "nature"],
    difficulty: "Medium",
    seoTitle: "Beautiful Monarch Butterfly Floral Coloring Page - Free PDF",
    seoDescription: "Download and print this stunning monarch butterfly on a garden flower. Free high-res PDF."
  },

  // 19. birds
  {
    id: "simple-standing-penguin",
    categoryId: "birds",
    categoryName: "Birds & Aviary",
    title: "Simple Standing Penguin Coloring Page",
    subcategory: "Songbirds",
    tags: ["penguin", "standing", "ice", "cute"],
    difficulty: "Easy",
    seoTitle: "Simple Standing Cartoon Penguin Coloring Page - Free PDF",
    seoDescription: "Download this simple standing cartoon penguin coloring sheet. Free high-resolution PDF."
  },
  {
    id: "majestic-flying-falcon",
    categoryId: "birds",
    categoryName: "Birds & Aviary",
    title: "Majestic Flying Falcon Coloring Page",
    subcategory: "Eagles & Hawks",
    tags: ["falcon", "flying", "raptor", "wildlife"],
    difficulty: "Medium",
    seoTitle: "Majestic Flying Falcon Raptor Bird Coloring Page - Free PDF",
    seoDescription: "Color a majestic peregrine falcon soaring through the mountain sky. Free high-quality PDF."
  },
  {
    id: "colorful-toucan-branch",
    categoryId: "birds",
    categoryName: "Birds & Aviary",
    title: "Toucan Perched on Jungle Branch Coloring Page",
    subcategory: "Parrots & Tropical",
    tags: ["toucan", "branch", "jungle", "tropical"],
    difficulty: "Medium",
    seoTitle: "Toucan Bird perched on Jungle Branch Coloring Page - Free PDF",
    seoDescription: "Print this exotic toucan bird sitting in tropical jungle leaves. Free high-resolution PDF."
  },

  // 20. architecture
  {
    id: "simple-suburban-house",
    categoryId: "architecture",
    categoryName: "Architecture & Buildings",
    title: "Simple Suburban House Coloring Page",
    subcategory: "Cozy Cottages",
    tags: ["house", "suburban", "home", "easy"],
    difficulty: "Easy",
    seoTitle: "Simple Suburban Family House Cartoon Coloring Page - Free PDF",
    seoDescription: "Download this simple cartoon suburban family house with a garden. Free printable PDF."
  },
  {
    id: "detailed-windmill-fields",
    categoryId: "architecture",
    categoryName: "Architecture & Buildings",
    title: "Windmill in Rural Fields Coloring Page",
    subcategory: "Cozy Cottages",
    tags: ["windmill", "fields", "farm", "scenic"],
    difficulty: "Medium",
    seoTitle: "Classic Windmill in Rural Farm Fields Coloring Page - Free PDF",
    seoDescription: "Color a beautiful classic windmill set in rural farming fields. Free high-resolution PDF."
  },
  {
    id: "modern-skyscraper-tower",
    categoryId: "architecture",
    categoryName: "Architecture & Buildings",
    title: "Modern Skyscraper Tower Cityscape Coloring Page",
    subcategory: "Skyscrapers",
    tags: ["skyscraper", "city", "tower", "modern"],
    difficulty: "Medium",
    seoTitle: "Modern Skyscraper Tower and Cityscape Coloring Page - Free PDF",
    seoDescription: "Download this modern city skyscraper tower architecture coloring sheet. Free high-res PDF."
  },

  // 21. education
  {
    id: "smiling-globe-cartoon",
    categoryId: "education",
    categoryName: "School & Education",
    title: "Smiling Earth Globe Cartoon Coloring Page",
    subcategory: "Science Lab",
    tags: ["globe", "earth", "geography", "cartoon"],
    difficulty: "Easy",
    seoTitle: "Smiling Earth Globe Geography Cartoon Coloring Page - Free PDF",
    seoDescription: "Download this cute smiling cartoon earth globe geography map. Free printable PDF for classrooms."
  },
  {
    id: "stacked-school-textbooks",
    categoryId: "education",
    categoryName: "School & Education",
    title: "Stacked School Textbooks Coloring Page",
    subcategory: "Books & Reading",
    tags: ["books", "textbooks", "school", "library"],
    difficulty: "Medium",
    seoTitle: "Stacked School Textbooks and Apple Coloring Page - Free PDF",
    seoDescription: "Color a stack of study textbooks with an apple on top. Free high-resolution printable PDF."
  },
  {
    id: "chemistry-beaker-bubbles",
    categoryId: "education",
    categoryName: "School & Education",
    title: "Chemistry Beaker and Bubbles Coloring Page",
    subcategory: "Science Lab",
    tags: ["chemistry", "beaker", "science", "bubbles"],
    difficulty: "Medium",
    seoTitle: "Chemistry Science Beaker Bubbling Experiment Coloring Page - Free PDF",
    seoDescription: "Print this chemistry lab experiment bubbling beaker coloring sheet. Free high-res PDF."
  },

  // 22. fashion
  {
    id: "simple-high-heel-shoe",
    categoryId: "fashion",
    categoryName: "Fashion & Beauty",
    title: "Simple High Heel Shoe Coloring Page",
    subcategory: "Elegant Dresses",
    tags: ["shoe", "high heel", "fashion", "easy"],
    difficulty: "Easy",
    seoTitle: "Simple High Heel Shoe Accessory Fashion Coloring Page - Free PDF",
    seoDescription: "Download this simple elegant high heel shoe accessory line drawing. Free printable PDF."
  },
  {
    id: "vintage-hat-makeup-kit",
    categoryId: "fashion",
    categoryName: "Fashion & Beauty",
    title: "Vintage Hat and Makeup Kit Coloring Page",
    subcategory: "Elegant Dresses",
    tags: ["makeup", "hat", "vintage", "beauty"],
    difficulty: "Medium",
    seoTitle: "Vintage Ladies Hat and Vanity Makeup Kit Coloring Page - Free PDF",
    seoDescription: "Color a vintage sun hat and vanity makeup kit counter. Free high-resolution printable PDF."
  },
  {
    id: "stylish-summer-dress",
    categoryId: "fashion",
    categoryName: "Fashion & Beauty",
    title: "Stylish Summer Dress Coloring Page",
    subcategory: "Elegant Dresses",
    tags: ["dress", "summer", "fashion", "stylish"],
    difficulty: "Medium",
    seoTitle: "Stylish Floral Summer Dress Fashion Coloring Page - Free PDF",
    seoDescription: "Download this stylish floral patterned summer dress drawing. Free high-resolution printable PDF."
  },

  // 23. toys
  {
    id: "simple-rocking-horse",
    categoryId: "toys",
    categoryName: "Toys & Games",
    title: "Simple Rocking Horse Coloring Page",
    subcategory: "Toys & Games",
    tags: ["rocking horse", "toy", "wood", "easy"],
    difficulty: "Easy",
    seoTitle: "Simple Wooden Rocking Horse Toy Coloring Page - Free PDF",
    seoDescription: "Download this simple wooden rocking horse vintage nursery toy drawing. Free printable PDF."
  },
  {
    id: "detailed-wooden-train-set",
    categoryId: "toys",
    categoryName: "Toys & Games",
    title: "Detailed Wooden Train Set Coloring Page",
    subcategory: "Toys & Games",
    tags: ["train set", "wooden", "tracks", "play"],
    difficulty: "Medium",
    seoTitle: "Detailed Wooden Toy Train Set on Tracks Coloring Page - Free PDF",
    seoDescription: "Color a detailed wooden toy train set rolling on tracks. Free high-resolution printable PDF."
  },
  {
    id: "vintage-windup-car",
    categoryId: "toys",
    categoryName: "Toys & Games",
    title: "Vintage Windup Key Toy Car Coloring Page",
    subcategory: "Toys & Games",
    tags: ["car", "windup", "retro", "toy"],
    difficulty: "Medium",
    seoTitle: "Vintage Windup Key Toy Car Retro Vehicle Coloring Page - Free PDF",
    seoDescription: "Download this vintage retro windup toy car with key drawing. Free high-res printable PDF."
  },

  // 24. adventure
  {
    id: "simple-camp-campfire",
    categoryId: "adventure",
    categoryName: "Adventure & Camping",
    title: "Simple Camp Campfire Coloring Page",
    subcategory: "Camping",
    tags: ["campfire", "camping", "fire", "easy"],
    difficulty: "Easy",
    seoTitle: "Simple Camp Campfire Logs Outdoor Coloring Page - Free PDF",
    seoDescription: "Download this simple outdoor campfire log fire drawing. Ideal for young kids. Free PDF."
  },
  {
    id: "scenic-mountain-camping",
    categoryId: "adventure",
    categoryName: "Adventure & Camping",
    title: "Scenic Mountain Camping Tent Coloring Page",
    subcategory: "Camping",
    tags: ["camping", "tent", "mountain", "scenic"],
    difficulty: "Medium",
    seoTitle: "Scenic Mountain Camping Tent and Pine Trees Coloring Page - Free PDF",
    seoDescription: "Color a cozy tent pitched in front of majestic pine forests and mountains. Free high-res PDF."
  },
  {
    id: "kayak-paddling-river",
    categoryId: "adventure",
    categoryName: "Adventure & Camping",
    title: "Kayak Paddling Down River Coloring Page",
    subcategory: "Camping",
    tags: ["kayak", "river", "paddling", "adventure"],
    difficulty: "Medium",
    seoTitle: "Kayak Paddling Down Wild River Scenic Coloring Page - Free PDF",
    seoDescription: "Print this active kayak paddling down a river outdoor adventure scene. Free high-resolution PDF."
  },

  // 25. astrology
  {
    id: "simple-aries-ram",
    categoryId: "astrology",
    categoryName: "Zodiac & Astrology",
    title: "Simple Aries Ram Zodiac Coloring Page",
    subcategory: "Constellations",
    tags: ["aries", "ram", "zodiac", "easy"],
    difficulty: "Easy",
    seoTitle: "Simple Aries Ram Zodiac Sign Outline Coloring Page - Free PDF",
    seoDescription: "Download this simple Aries ram zodiac sign glyph outline. Free high-resolution printable PDF."
  },
  {
    id: "majestic-leo-lion-stars",
    categoryId: "astrology",
    categoryName: "Zodiac & Astrology",
    title: "Majestic Leo Lion with Stars Coloring Page",
    subcategory: "Constellations",
    tags: ["leo", "lion", "zodiac", "constellation"],
    difficulty: "Medium",
    seoTitle: "Majestic Leo Lion and Celestial Stars Coloring Page - Free PDF",
    seoDescription: "Color a majestic celestial Leo lion head surrounded by night stars. Free high-quality PDF."
  },
  {
    id: "taurus-bull-constellation",
    categoryId: "astrology",
    categoryName: "Zodiac & Astrology",
    title: "Taurus Bull and Constellation Coloring Page",
    subcategory: "Constellations",
    tags: ["taurus", "bull", "zodiac", "constellation"],
    difficulty: "Medium",
    seoTitle: "Taurus Bull and Celestial Star Constellation Coloring Page - Free PDF",
    seoDescription: "Download this celestial Taurus bull and stars constellation drawing. Free high-resolution PDF."
  },

  // 26. farm
  {
    id: "simple-windmill-hill",
    categoryId: "farm",
    categoryName: "Farm & Country",
    title: "Simple Windmill on Hill Coloring Page",
    subcategory: "Farm & Country",
    tags: ["windmill", "farm", "hill", "easy"],
    difficulty: "Easy",
    seoTitle: "Simple Farm Windmill on Grass Hill Coloring Page - Free PDF",
    seoDescription: "Download this simple farm windmill on a grassy hill cartoon drawing. Free printable PDF."
  },
  {
    id: "farm-tractor-barn",
    categoryId: "farm",
    categoryName: "Farm & Country",
    title: "Farm Tractor in Front of Barn Coloring Page",
    subcategory: "Farm & Country",
    tags: ["tractor", "farm", "barn", "scenic"],
    difficulty: "Medium",
    seoTitle: "Farm Tractor parked in front of Barn Coloring Page - Free PDF",
    seoDescription: "Color a vintage farm tractor parked in front of a rustic country barn. Free high-res PDF."
  },
  {
    id: "rooster-perched-fence",
    categoryId: "farm",
    categoryName: "Farm & Country",
    title: "Rooster Perched on Fence Coloring Page",
    subcategory: "Farm & Country",
    tags: ["rooster", "fence", "farm", "morning"],
    difficulty: "Medium",
    seoTitle: "Farm Rooster Crowing perched on Fence Coloring Page - Free PDF",
    seoDescription: "Download this morning country farm rooster perched on a fence line drawing. Free printable PDF."
  },

  // 27. monsters
  {
    id: "simple-smiling-one-eye-monster",
    categoryId: "monsters",
    categoryName: "Monsters & Cute Beasts",
    title: "Simple Smiling One-Eyed Monster Coloring Page",
    subcategory: "Monsters & Cute Beasts",
    tags: ["monster", "one eye", "smiling", "cute"],
    difficulty: "Easy",
    seoTitle: "Simple Smiling One-Eyed Cartoon Monster Coloring Page - Free PDF",
    seoDescription: "Download this cute, easy smiling one-eyed cartoon monster drawing. Free printable PDF for kids."
  },
  {
    id: "playful-furry-monster-friends",
    categoryId: "monsters",
    categoryName: "Monsters & Cute Beasts",
    title: "Playful Furry Monster Friends Coloring Page",
    subcategory: "Monsters & Cute Beasts",
    tags: ["monsters", "friends", "furry", "playful"],
    difficulty: "Medium",
    seoTitle: "Playful Furry Monster Friends Cartoon Coloring Page - Free PDF",
    seoDescription: "Color a group of cute, playful furry monster friends playing. Free high-resolution PDF."
  },
  {
    id: "monster-eating-cookie",
    categoryId: "monsters",
    categoryName: "Monsters & Cute Beasts",
    title: "Monster Eating Large Cookie Coloring Page",
    subcategory: "Monsters & Cute Beasts",
    tags: ["monster", "cookie", "eating", "cute"],
    difficulty: "Medium",
    seoTitle: "Cute Cartoon Monster Eating Large Chocolate Cookie Coloring Page",
    seoDescription: "Print this cute cartoon monster happily munching on a giant cookie. Free high-res PDF."
  },

  // 28. music
  {
    id: "simple-wooden-violin",
    categoryId: "music",
    categoryName: "Music & Instruments",
    title: "Simple Wooden Violin Coloring Page",
    subcategory: "Music & Instruments",
    tags: ["violin", "instrument", "wood", "easy"],
    difficulty: "Easy",
    seoTitle: "Simple Wooden Violin and Bow Music Coloring Page - Free PDF",
    seoDescription: "Download this simple classical wooden violin and bow instrument drawing. Free printable PDF."
  },
  {
    id: "grand-piano-stage",
    categoryId: "music",
    categoryName: "Music & Instruments",
    title: "Grand Piano on Concert Stage Coloring Page",
    subcategory: "Music & Instruments",
    tags: ["piano", "grand piano", "stage", "concert"],
    difficulty: "Medium",
    seoTitle: "Grand Piano on Concert Recital Stage Coloring Page - Free PDF",
    seoDescription: "Color a beautiful grand piano resting on a recital theater stage. Free high-resolution PDF."
  },
  {
    id: "cool-electric-guitar",
    categoryId: "music",
    categoryName: "Music & Instruments",
    title: "Cool Rock Electric Guitar Coloring Page",
    subcategory: "Music & Instruments",
    tags: ["guitar", "electric", "instrument", "cool"],
    difficulty: "Medium",
    seoTitle: "Cool Rock Electric Guitar Musical Instrument Coloring Page - Free PDF",
    seoDescription: "Download this cool rock-and-roll electric guitar design coloring sheet. Free high-res PDF."
  },

  // 29. quotes
  {
    id: "simple-thank-you-stars",
    categoryId: "quotes",
    categoryName: "Quotes & Typography",
    title: "Simple Thank You Quote Coloring Page",
    subcategory: "Quotes & Typography",
    tags: ["quote", "thank you", "stars", "typography"],
    difficulty: "Easy",
    seoTitle: "Simple Thank You Lettering Stars Coloring Page - Free PDF",
    seoDescription: "Download this easy bubble lettered 'Thank You' quote surrounded by stars. Free printable PDF."
  },
  {
    id: "be-kind-floral-frame",
    categoryId: "quotes",
    categoryName: "Quotes & Typography",
    title: "Be Kind Quote with Floral Frame Coloring Page",
    subcategory: "Quotes & Typography",
    tags: ["quote", "be kind", "floral", "typography"],
    difficulty: "Medium",
    seoTitle: "Be Kind Typography Quote with Floral Frame Coloring Page - Free PDF",
    seoDescription: "Print this motivational 'Be Kind' quote set inside a beautiful floral wreath frame. Free PDF."
  },
  {
    id: "stay-positive-sunflower",
    categoryId: "quotes",
    categoryName: "Quotes & Typography",
    title: "Stay Positive Sunflower Quote Coloring Page",
    subcategory: "Quotes & Typography",
    tags: ["quote", "stay positive", "sunflower", "typography"],
    difficulty: "Medium",
    seoTitle: "Stay Positive Typography Quote with Sunflower Coloring Page - Free PDF",
    seoDescription: "Download this inspirational 'Stay Positive' quote backed by a large sunflower bloom. Free PDF."
  },

  // 30. seafloor
  {
    id: "simple-sunken-anchor",
    categoryId: "seafloor",
    categoryName: "Under the Sea",
    title: "Simple Sunken Ship Anchor Coloring Page",
    subcategory: "Under the Sea",
    tags: ["anchor", "seafloor", "ocean", "easy"],
    difficulty: "Easy",
    seoTitle: "Simple Sunken Ship Anchor on Ocean Seafloor Coloring Page - Free PDF",
    seoDescription: "Download this simple cartoon ship anchor resting on the ocean floor. Free high-res PDF."
  },
  {
    id: "octopus-guarding-chest",
    categoryId: "seafloor",
    categoryName: "Under the Sea",
    title: "Octopus Guarding Treasure Chest Coloring Page",
    subcategory: "Under the Sea",
    tags: ["octopus", "treasure chest", "seafloor", "ocean"],
    difficulty: "Medium",
    seoTitle: "Octopus Guarding Sunken Gold Treasure Chest Coloring Page - Free PDF",
    seoDescription: "Color a detailed cartoon octopus guarding a sunken gold treasure chest on the seabed. Free PDF."
  },
  {
    id: "deep-sea-diver-submarine",
    categoryId: "seafloor",
    categoryName: "Under the Sea",
    title: "Deep Sea Diver and Submarine Coloring Page",
    subcategory: "Under the Sea",
    tags: ["diver", "submarine", "deep sea", "ocean"],
    difficulty: "Medium",
    seoTitle: "Deep Sea Diver and Research Submarine Seafloor Coloring Page - Free PDF",
    seoDescription: "Print this undersea research scene showing a deep sea diver and a submarine explore. Free PDF."
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
