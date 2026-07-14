const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '../public/content');

const categoryMap = {
  adventure: "Embark on exciting journeys and heroic expeditions with our adventure coloring sheets. This collection features brave explorers, pirate ships sailing stormy seas, treasure hunts in ancient ruins, and daring mountain climbers. Perfect for kids who love action, storytelling, and imaginative outdoor exploration.",
  animals: "Discover a vibrant world of animal coloring pages featuring cute domestic pets like puppies and kittens, majestic safari animals like lions and elephants, and gorgeous tropical birds. Designed with varying line densities, these sheets are perfect for classrooms, pet lovers, and teaching children about wildlife.",
  anime: "Explore our collection of Japanese anime-style line art coloring pages. Featuring cute chibi mascots, flying fantasy creatures, magical girls casting spells, and heroic armored warriors with shields, this section offers a perfect blend of modern pop culture and detailed illustrations for teens and young artists.",
  architecture: "Celebrate structure and design with our architecture coloring collection. From towering modern skyscrapers and intricate medieval castles with drawbridges to cozy rustic cottages and famous global landmarks, these sheets offer a satisfying, structured coloring experience for future architects and detail-oriented artists.",
  astrology: "Unlock the mysteries of the cosmos with our zodiac and astrology coloring templates. Discover beautiful, detailed illustrations of all twelve zodiac signs, from Aries the ram to Pisces the fish, surrounded by stars, lunar phases, and celestial coordinate grids. Great for horoscope fans and cosmic coloring.",
  birds: "Take flight with our beautiful collection of bird coloring sheets. Featuring cute garden songbirds, soaring birds of prey like eagles and falcons, and colorful tropical parrots perched on leafy branches. Ideal for nature lovers and birdwatchers who want to explore different coloring mediums.",
  dinosaurs: "Travel back in time with our prehistoric dinosaur coloring pages. This collection features a diverse range of fossil giants, from the mighty Tyrannosaurus Rex and horned Triceratops to armored Ankylosaurs, long-necked Sauropods, flying Pterodactyls, and marine predators like Mosasaurus. Excellent for science classrooms.",
  education: "Make learning fun with our educational coloring templates. This section contains printable sheets for learning the alphabet with bold letters, simple math counting games, and science diagrams like laboratory beakers and magnifying glasses. A perfect resource for pre-school teachers and homeschooling parents.",
  fantasy: "Enter a magical realm of myth and wonder with our fantasy coloring book. Discover enchanted fairy gardens, mystical wizards, elegant fairies, and legendary beasts like unicorns, griffins, and friendly swamp monsters. Perfect for sparking creative storytelling and artistic exploration in colorists of all ages.",
  farm: "Experience country life with our charming farm coloring pages. Featuring red barns, rolling pastures, crops, and friendly farm animals like tractors, cows, horses, pigs, and sheep. Ideal for young children learning about agriculture, seasons, and rural life.",
  fashion: "Step into the glamorous world of design with our fashion coloring templates. Featuring elegant dresses, high-heel shoes, vintage hats, makeup kits, and modern runway outfits. This collection offers a creative space for aspiring fashion designers to experiment with colors, patterns, and textiles.",
  flowers: "Bring a beautiful garden of flora to life with our botanical coloring pages. Discover blooming sunflowers, elegant roses, wildflowers, and delicate wildflower gardens with fluttering butterflies. A peaceful and relaxing theme suitable for all ages and art mediums.",
  food: "Indulge your creative appetite with our delicious food coloring pages. From sweet treats like glazed donuts, smiling cupcakes, and giant sundae bowls to savory classics like double cheeseburgers and fresh pizza slices. Fun, easy-to-color designs that kids and foodies will love.",
  history: "Step into the past with our educational history coloring pages. Discover ancient Egyptian pharaoh sarcophagi, majestic Roman coloseums, medieval knights in jousting tournaments, and historical viking longships. An engaging way to teach children about ancient civilizations and world history.",
  holidays: "Celebrate festive occasions year-round with our seasonal holiday coloring pages. Featuring spooky Halloween pumpkins and haunted houses, cheerful Easter bunnies and chick baskets, warm Thanksgiving feasts, and festive Christmas scenes with Santa filling stockings.",
  insects: "Explore the fascinating world of creepy-crawlies with our insect coloring templates. Discover detailed butterflies landing on wildflowers, busy honeybees around honeycombs, cute ladybugs on leaves, and hovering dragonflies. Great for lessons on biology and garden ecology.",
  kawaii: "SMILE with our adorable kawaii coloring sheets. Featuring cute smiling toast slices, boba cups, avocados, friendly ghosts, and cuddly panda bears. These minimalist, toddler-friendly designs use extra-bold outlines and large open zones to ensure a happy, easy coloring experience.",
  mandalas: "Find peace and focus with our collection of geometric and floral mandalas. These symmetrical circular designs are meticulously crafted to provide a relaxing, therapeutic coloring experience for teens and adults. Perfect for mindfulness meditation, stress relief, and coloring with fine gel pens.",
  monsters: "Meet our collection of friendly and silly monsters! From cute one-eyed creatures and furry monster friends playing tag to legendary beasts like the Loch Ness monster, these non-spooky outlines are designed to make children laugh while exploring bold color combinations.",
  music: "Unleash your inner rock star with our music coloring pages. Featuring detailed acoustic and electric guitars, full drum kits, classical grand pianos on stage, and abstract flowing treble clefs with staff lines. Perfect for music students and instrumentalists.",
  nature: "Bring the beauty of the outdoors inside with our nature and landscape coloring pages. Featuring towering mountain ranges, serene river bridges, forest pathways, and tranquil lake horizons. A calming escape designed for landscape coloring and shading.",
  ocean: "Dive into the deep blue sea with our marine life coloring pages. Swim with gentle sea turtles, playful dolphins, colorful tropical clownfish, and detailed deep-sea creatures like anglerfish, giant squids, and chambered nautiluses. Ideal for lessons on ocean conservation.",
  patterns: "Get lost in a world of repetition with our repeating pattern coloring sheets. From clean geometric grids and tessellating fish scales to abstract waves, these pages offer a focused coloring canvas that helps colorists practice color coordination and shading.",
  quotes: "Color your way to inspiration with our positive quotes coloring pages. Featuring motivational phrases like 'Be Kind' and 'Dream Big' surrounded by beautiful floral frames, stars, and playful borders. A satisfying way to create personalized, encouraging wall art.",
  seafloor: "Explore the mysterious ocean floor with our seafloor coloring templates. Discover shipwrecks guarded by sharks, detailed coral gardens, sea anemones, spiky sea urchins, and lobsters crawling on the seabed. Ideal for classroom projects on ocean environments.",
  space: "Blast off into the cosmos with our space and astronomy collection. Featuring astronauts performing moonwalks, futuristic space probes, retro rocket ships, and distant alien planets surrounded by celestial stars and galaxies. An excellent resource for kids curious about science and the universe.",
  sports: "Vroom, splash, and jump with our action-packed sports coloring pages. Featuring basketball hoops, soccer balls on fields, gymnasts performing beam and ribbon routines, and high-speed race cars. Exciting designs that celebrate athleticism and movement.",
  superheroes: "Save the day with our heroic coloring collection. Featuring brave superheroes flying through city skylines, performing heroic landings, guarding high-tech control panels, and cool gadget vehicles. Perfect for kids who love comic books and action heroes.",
  toys: "Unbox hours of fun with our classic toy coloring pages. Featuring detailed wooden train sets, vintage tin robots, rocking horses, wind-up key cars, and teddy bears having tea parties. Easy, nostalgic designs that are highly accessible for toddlers and young children.",
  vehicles: "Vroom into a high-powered coloring adventure with our vehicles and transport collection. This section is packed with high-speed modern sports cars, drifting JDM racecars, classic vintage automobiles, soaring commercial jets, and heavy-duty construction vehicles like excavators, bulldozers, and monster trucks."
};

function run() {
  console.log('=== Updating Category Descriptions on Disk ===');
  
  if (!fs.existsSync(CONTENT_DIR)) {
    console.error('Content directory not found!');
    process.exit(1);
  }

  const categoriesOnDisk = fs.readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  categoriesOnDisk.forEach(catId => {
    const catPath = path.join(CONTENT_DIR, catId);
    const catJsonPath = path.join(catPath, 'category.json');

    let catMeta = {};
    if (fs.existsSync(catJsonPath)) {
      try {
        catMeta = JSON.parse(fs.readFileSync(catJsonPath, 'utf8'));
      } catch (e) {
        console.warn(`Error reading ${catJsonPath}, resetting file: ${e.message}`);
      }
    }

    // Update fields
    catMeta.name = catMeta.name || catId.charAt(0).toUpperCase() + catId.slice(1);
    catMeta.icon = catMeta.icon || '🎨';
    
    // Inject the deep description paragraph
    if (categoryMap[catId]) {
      catMeta.description = categoryMap[catId];
      console.log(`Updating description for [${catId}]`);
    } else {
      catMeta.description = catMeta.description || `Free printable ${catMeta.name} coloring pages.`;
      console.log(`No custom description found for [${catId}]. Using default.`);
    }

    fs.writeFileSync(catJsonPath, JSON.stringify(catMeta, null, 2), 'utf8');
  });

  console.log('=== Category Descriptions Updated Successfully ===');
}

run();
