const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '../public/content');

const categories = {
  animals: {
    name: "Animals",
    description: "Discover cute puppies, majestic lions, kittens, and gorgeous birds. High-resolution free coloring sheets for kids.",
    icon: "🦁"
  },
  mandalas: {
    name: "Mandalas",
    description: "Beautiful, intricate geometric and floral mandala coloring pages. Perfect for mindfulness, meditation, and stress relief.",
    icon: "💮"
  },
  nature: {
    name: "Nature & Landscapes",
    description: "Scenic mountain ranges, serene forests, and beautiful garden landscapes.",
    icon: "🏔️"
  },
  space: {
    name: "Space & Astronomy",
    description: "Out-of-this-world rockets, planets, galaxies, and celestial adventures.",
    icon: "🚀"
  },
  fantasy: {
    name: "Fantasy & Fairy Tales",
    description: "Magical castles, mystical unicorns, playful fairies, and legendary dragons.",
    icon: "🦄"
  },
  flowers: {
    name: "Flowers & Plants",
    description: "Gorgeous bouquets, blooming sunflowers, and intricate botanical drawings.",
    icon: "🌻"
  },
  dinosaurs: {
    name: "Dinosaurs",
    description: "Roaring T-Rex, towering Brachiosaurus, and prehistoric volcanic scenes.",
    icon: "🦖"
  },
  ocean: {
    name: "Ocean & Marine Life",
    description: "Deep sea creatures, colorful coral reefs, friendly dolphins, and majestic whales.",
    icon: "🐢"
  },
  vehicles: {
    name: "Vehicles & Transport",
    description: "Fast sports cars, steam trains, giant monster trucks, and flying airplanes.",
    icon: "🏎️"
  },
  holidays: {
    name: "Holidays & Seasons",
    description: "Festive Christmas ornaments, spooky Halloween pumpkins, and seasonal decorations.",
    icon: "🎃"
  },
  kawaii: {
    name: "Cute & Kawaii",
    description: "Adorable kawaii food, cute animals, smiling stars, and sweet chibi doodles.",
    icon: "💖"
  },
  superheroes: {
    name: "Superheroes & Sci-Fi",
    description: "Action-packed superheroes, futuristic robots, and epic cosmic battle scenes.",
    icon: "⚡"
  },
  anime: {
    name: "Anime & Manga",
    description: "Beautiful anime characters, cute chibi poses, and dynamic Japanese manga styles.",
    icon: "🎌"
  },
  food: {
    name: "Food & Sweets",
    description: "Delicious cupcakes, colorful ice creams, yummy pizzas, and fresh fruits to color.",
    icon: "🍩"
  },
  sports: {
    name: "Sports & Activities",
    description: "Exciting action shots of soccer, basketball, skateboarding, and cool gymnastics.",
    icon: "⚽"
  },
  history: {
    name: "History & Mythology",
    description: "Majestic Greek gods, ancient Egyptian pyramids, and medieval knights in armor.",
    icon: "🏛️"
  },
  patterns: {
    name: "Geometric & Patterns",
    description: "Mind-bending optical illusions, abstract repeating patterns, and mosaic tile layouts.",
    icon: "🌀"
  },
  insects: {
    name: "Insects & Bugs",
    description: "Delicate butterflies, cute ladybugs, busy honeybees, and gorgeous dragonflies.",
    icon: "🦋"
  },
  birds: {
    name: "Birds & Aviary",
    description: "Beautiful eagles, wise owls, tropical parrots, and singing backyard birds.",
    icon: "🦅"
  },
  architecture: {
    name: "Architecture & Buildings",
    description: "Towering skyscrapers, famous global landmarks, cozy cottages, and treehouses.",
    icon: "🏡"
  },
  education: {
    name: "School & Education",
    description: "Fun alphabet letters, numbers, science lab experiments, and reading books.",
    icon: "✏️"
  },
  fashion: {
    name: "Fashion & Beauty",
    description: "Gorgeous dresses, retro sneakers, stylish hairstyles, and makeup accessories.",
    icon: "👗"
  },
  music: {
    name: "Music & Instruments",
    description: "Cool electric guitars, elegant grand pianos, drums, and abstract music notes.",
    icon: "🎵"
  },
  adventure: {
    name: "Adventure & Camping",
    description: "Floating hot air balloons, cozy campfires, secret maps, and sandy beaches.",
    icon: "⛺"
  },
  astrology: {
    name: "Zodiac & Astrology",
    description: "Mystic zodiac signs, glowing constellations, moon phases, and tarot card layouts.",
    icon: "🌙"
  },
  monsters: {
    name: "Monsters & Cute Beasts",
    description: "Furry friendly monsters, cute sea beasts, and funny Halloween cartoon doodles.",
    icon: "👾"
  },
  farm: {
    name: "Farm & Country",
    description: "Sturdy tractors, old red barns, friendly cows, pigs, and morning roosters.",
    icon: "🚜"
  },
  toys: {
    name: "Toys & Games",
    description: "Soft teddy bears, vintage tin robots, classic board games, and puppet theaters.",
    icon: "🧸"
  },
  quotes: {
    name: "Quotes & Typography",
    description: "Inspirational sayings, beautiful cursive holiday greetings, and fancy monograms.",
    icon: "✍️"
  },
  seafloor: {
    name: "Under the Sea",
    description: "Sunken pirate shipwrecks, deep submarines, treasure chests, and mermaid castles.",
    icon: "⚓"
  }
};

function run() {
  console.log('=== Scaffolding 30 Categories Directory Structures ===');
  
  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true });
  }

  let createdCount = 0;
  let updatedCount = 0;

  for (const [id, catInfo] of Object.entries(categories)) {
    const catPath = path.join(CONTENT_DIR, id);
    const catJsonPath = path.join(catPath, 'category.json');
    
    if (!fs.existsSync(catPath)) {
      fs.mkdirSync(catPath, { recursive: true });
      createdCount++;
    }

    fs.writeFileSync(catJsonPath, JSON.stringify(catInfo, null, 2), 'utf8');
    updatedCount++;
    console.log(`- Configured [${id}] with icon: ${catInfo.icon}`);
  }

  console.log(`\nSuccess! Created ${createdCount} new folders and configured all ${updatedCount} category.json files.`);
  console.log('=== Directory Scaffolding Complete ===');
}

run();
