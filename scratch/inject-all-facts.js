const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '../public/content');

const keywordFactsMap = {
  dog: [
    "Dogs possess up to 300 million olfactory receptors in their noses, making their sense of smell 10,000 to 100,000 times more acute than ours.",
    "A dog's nose print is completely unique, just like a human fingerprint, and can be used to identify them.",
    "Coloring domestic pets helps kids build empathy, emotional connection, and pet care responsibility."
  ],
  puppy: [
    "Dogs possess up to 300 million olfactory receptors in their noses, making their sense of smell 10,000 to 100,000 times more acute than ours.",
    "A dog's nose print is completely unique, just like a human fingerprint, and can be used to identify them.",
    "Coloring domestic pets helps kids build empathy, emotional connection, and pet care responsibility."
  ],
  cat: [
    "Cats have a specialized reflective layer in their eyes called the tapetum lucidum, allowing them to see in near-total darkness.",
    "Domestic cats share 95.6% of their genetic makeup with wild tigers, displaying many of the same stalking and instincts.",
    "Coloring kittens and cats stimulates creativity and recognition of feline body language."
  ],
  kitten: [
    "Cats have a specialized reflective layer in their eyes called the tapetum lucidum, allowing them to see in near-total darkness.",
    "Domestic cats share 95.6% of their genetic makeup with wild tigers, displaying many of the same stalking and instincts.",
    "Coloring kittens and cats stimulates creativity and recognition of feline body language."
  ],
  butterfly: [
    "Butterflies taste their food using sensory receptors located on their feet, helping them find host plants to lay eggs.",
    "Their wings are actually transparent, covered in thousands of microscopic scales that reflect light to create vibrant colors.",
    "Coloring butterflies helps children practice bilateral symmetry and fine motor coordination."
  ],
  bee: [
    "Honeybees communicate the location of flowers to their hive mates by performing a specialized 'waggle dance'.",
    "A single honeybee visits between 50 and 100 flowers during one collection trip, acting as a crucial pollinator.",
    "Coloring honeybee scenes promotes awareness of garden ecology and agricultural pollination."
  ],
  honeycomb: [
    "Honeybees communicate the location of flowers to their hive mates by performing a specialized 'waggle dance'.",
    "A single honeybee visits between 50 and 100 flowers during one collection trip, acting as a crucial pollinator.",
    "Coloring honeybee scenes promotes awareness of garden ecology and agricultural pollination."
  ],
  ladybug: [
    "Ladybugs are natural pest controllers, eating thousands of aphids and crop-destroying insects during their lifetime.",
    "The bright red and black colors of a ladybug act as a warning signal (aposematism) to keep predators away.",
    "Coloring ladybugs is a fun way for toddlers to practice counting dots and coloring simple round shapes."
  ],
  shark: [
    "Sharks have been swimming in the Earth's oceans for over 400 million years, surviving five mass extinction events.",
    "They possess an extraordinary sensory organ called the Ampullae of Lorenzini, allowing them to detect electromagnetic fields.",
    "Coloring sharks helps dispel fear, encouraging interest in ocean conservation and marine ecosystems."
  ],
  turtle: [
    "Sea turtles have lived in our oceans for over 110 million years, traveling thousands of miles across ocean basins.",
    "The shell of a turtle is actually part of its skeleton, composed of over 50 bones fused to its ribs and spine.",
    "Coloring sea turtles promotes awareness of marine biology and marine habitat preservation."
  ],
  dolphin: [
    "Dolphins are highly intelligent marine mammals that use echolocation—sonar clicks—to navigate and hunt in deep waters.",
    "Each dolphin has a unique signature whistle that acts like a name, allowing them to call and recognize group members.",
    "Coloring dolphins promotes recognition of friendly marine mammals and aquatic playfulness."
  ],
  unicorn: [
    "The unicorn is a legendary creature described since antiquity, symbolizing purity, magic, and untamed strength.",
    "It is the official national animal of Scotland, reflecting the country's love for mythical heritage and independence.",
    "Coloring unicorns encourages creative writing, imagination, and fantasy worldbuilding."
  ],
  dragon: [
    "Dragons are mythological creatures found in the legends of many cultures, from European fire-breathers to Asian river guardians.",
    "In Asian folklore, dragons are symbols of good luck, power, wisdom, and control over wind and rain.",
    "Coloring dragons stimulates bold color experiments and fantasy storytelling."
  ],
  fairy: [
    "Fairies are mythical spirits of nature originating from European folklore, believed to protect plants and forests.",
    "They are traditionally depicted with butterfly or dragonfly wings, carrying wands to cast magical spells.",
    "Coloring fairies helps colorists practice blending pastel tones and highlighting magical details."
  ],
  castle: [
    "Medieval castles were built not just as royal residences, but as military fortresses with drawbridges, moats, and stone battlements.",
    "The spiral staircases in castles were almost always built winding clockwise to favor right-handed defenders fighting downwards.",
    "Coloring detailed castles helps children learn about medieval history and historic architecture."
  ],
  halloween: [
    "The tradition of carving jack-o'-lanterns began in Ireland, where people originally carved turnips and potatoes to ward off spirits.",
    "Halloween originated from the ancient Celtic festival of Samhain, marking the harvest end and winter start.",
    "Coloring spooky holiday scenes stimulates the use of vibrant warm colors like orange and deep purple."
  ],
  pumpkin: [
    "The tradition of carving jack-o'-lanterns began in Ireland, where people originally carved turnips and potatoes to ward off spirits.",
    "Halloween originated from the ancient Celtic festival of Samhain, marking the harvest end and winter start.",
    "Coloring spooky holiday scenes stimulates the use of vibrant warm colors like orange and deep purple."
  ],
  christmas: [
    "The modern image of Santa Claus in a red suit was popularized by illustrations and holiday advertisements in the 19th and 20th centuries.",
    "Decorating evergreen trees during winter began in Germany as a celebration of life and hope.",
    "Coloring Christmas templates encourages festive cheer, family bonding, and holiday preparations."
  ],
  easter: [
    "The Easter Bunny origin dates back to German immigrants who brought stories of an egg-laying hare called 'Oschter Haws'.",
    "Eggs have been decorated since ancient times to symbolize new life, rebirth, and spring renewal.",
    "Coloring pastel Easter eggs and chicks is an excellent spring activity for preschool kids."
  ],
  rose: [
    "Fossil records show that roses have existed on Earth for over 35 million years, making them one of the oldest flowers.",
    "Different rose colors carry symbolic meanings: red symbolizes love, yellow represents friendship, and white denotes purity.",
    "Coloring roses encourages colorists to practice shading, gradients, and natural botanical color schemes."
  ],
  sunflower: [
    "Young sunflowers exhibit heliotropism, meaning their flower buds track the sun from east to west throughout the day.",
    "A single sunflower head is actually made of thousands of tiny individual flowers blooming together.",
    "Coloring sunflowers is a bright, cheerful activity that helps kids learn about botany and agriculture."
  ],
  astronaut: [
    "In space, astronauts grow up to 2 inches taller because the lack of gravity allows their spinal column to expand.",
    "Space suits are pressurized garments that shield astronauts from cosmic radiation, extreme temperatures, and vacuum.",
    "Coloring astronauts stimulates dreams of space exploration, science careers, and cosmic discovery."
  ],
  rocket: [
    "Rockets burn liquid or solid propellants to generate thrust, accelerating to escape velocity of 25,000 mph to reach orbit.",
    "The first human-made object to reach space was a rocket launched in 1944, paving the way for modern satellites.",
    "Coloring rocket ships inspires kids' curiosity about physics, space travel, and aerospace engineering."
  ],
  robot: [
    "The word 'robot' comes from the Czech word 'robota', which means forced labor, first introduced in a 1920 science fiction play.",
    "Industrial robots are used in assembly lines to manufacture cars, electronics, and medical gear with extreme precision.",
    "Coloring toy and vintage robots encourages spatial reasoning and interests in robotics and coding."
  ],
  guitar: [
    "The acoustic guitar produces sound when the vibration of the strings is amplified by the hollow wooden body.",
    "Electric guitars use electromagnetic pickups to convert string vibrations into electrical signals for amplifiers.",
    "Coloring musical instruments helps students identify string and fretboards, fostering musical appreciation."
  ],
  piano: [
    "A standard modern piano has 88 keys—52 white keys and 36 black keys—spanning over seven octaves.",
    "The piano is classified as a stringed percussion instrument because hammers strike metal strings to produce sound.",
    "Coloring grand pianos on stage encourages focus and celebrates classical and jazz music history."
  ],
  lion: [
    "Lions are the only social wild cats, living in family groups called prides that can consist of up to 40 lions.",
    "A lion's roar can be heard from up to 5 miles (8 kilometers) away, acting as a warning to intruders.",
    "Coloring safari animals teaches kids about ecological conservation and African savannah wildlife."
  ],
  tiger: [
    "Tigers are the largest of all wild cat species, famous for their orange coats with unique black stripes.",
    "Just like human fingerprints, no two tigers have the exact same pattern of stripes, and their skin is also striped.",
    "Coloring majestic tigers promotes conservation awareness for endangered big cats."
  ],
  bird: [
    "Birds have hollow, lightweight bones filled with air sacs, which reduces their body weight for efficient flight.",
    "The peregrine falcon is the fastest animal in the world, reaching diving speeds of over 240 mph (386 km/h) to hunt.",
    "Coloring birds helps children learn about avian diversity, feather patterns, and migration."
  ],
  falcon: [
    "Birds have hollow, lightweight bones filled with air sacs, which reduces their body weight for efficient flight.",
    "The peregrine falcon is the fastest animal in the world, reaching diving speeds of over 240 mph (386 km/h) to hunt.",
    "Coloring birds helps children learn about avian diversity, feather patterns, and migration."
  ],
  zodiac: [
    "Zodiac signs are based on constellations along the ecliptic path, used since Babylonian times to track celestial cycles.",
    "The twelve signs are divided into four elements: Fire, Earth, Air, and Water, representing different traits.",
    "Coloring detailed astrology pages provides a satisfying geometric canvas for creative color schemes."
  ],
  viking: [
    "Viking longships were advanced, double-ended wooden vessels that could navigate shallow rivers and cross open oceans.",
    "Contrary to popular myths, historic viking warriors did not wear horned helmets in battle, as they would be impractical.",
    "Coloring historical ship scenes teaches kids about ancient explorers and shipbuilding."
  ],
  knight: [
    "Medieval knights wore suits of steel plate armor weighing up to 50 pounds, custom-fitted for protection.",
    "Jousting tournaments were popular medieval sports where armored knights on horses charged each other with lances.",
    "Coloring knights and armor helps students explore medieval history and heraldry designs."
  ],
  sports: [
    "Regular sports and physical activities strengthen muscles, improve reflexes, and support cardiovascular health.",
    "Gymnasts require extreme flexibility, balance, and core strength to perform routines on beams and rings.",
    "Coloring sports-themed pages celebrates athleticism, team spirit, and healthy lifestyles."
  ],
  gymnast: [
    "Regular sports and physical activities strengthen muscles, improve reflexes, and support cardiovascular health.",
    "Gymnasts require extreme flexibility, balance, and core strength to perform routines on beams and rings.",
    "Coloring sports-themed pages celebrates athleticism, team spirit, and healthy lifestyles."
  ],
  cupcake: [
    "Baking combines chemistry and culinary art, using leavening agents like baking powder to make cupcakes rise.",
    "The first donut machine was invented in New York City in 1920, automating the process of frying dough.",
    "Coloring sweets and foods is a fun, easy activity that stimulates color combinations and dessert design."
  ],
  donut: [
    "Baking combines chemistry and culinary art, using leavening agents like baking powder to make cupcakes rise.",
    "The first donut machine was invented in New York City in 1920, automating the process of frying dough.",
    "Coloring sweets and foods is a fun, easy activity that stimulates color combinations and dessert design."
  ],
  burger: [
    "Hamburgers were popularized in the United States in the early 20th century, named after the German city of Hamburg.",
    "Pizza originated in Naples, Italy, originally created as a quick, affordable street food for working-class families.",
    "Coloring food platters helps toddlers recognize different ingredients like cheese, lettuce, and tomatoes."
  ],
  pizza: [
    "Hamburgers were popularized in the United States in the early 20th century, named after the German city of Hamburg.",
    "Pizza originated in Naples, Italy, originally created as a quick, affordable street food for working-class families.",
    "Coloring food platters helps toddlers recognize different ingredients like cheese, lettuce, and tomatoes."
  ],
  monsters: [
    "Mythological monsters like the Loch Ness Monster have been part of cultural folklore and storytelling for centuries.",
    "Drawing and coloring friendly, silly monsters helps children overcome fears of the dark and express humor.",
    "Coloring imaginary creatures allows for wild, creative color schemes like bright green fur and purple eyes."
  ],
  superheroes: [
    "Comic book superheroes first rose to massive popularity in the late 1930s, acting as symbols of hope and justice.",
    "Mech suits and high-tech guardians are popular sci-fi concepts representing advanced engineering and protection.",
    "Coloring superhero scenes allows kids to design their own colorful emblems and heroic costumes."
  ],
  toys: [
    "Classic toys like teddy bears were named after U.S. President Theodore 'Teddy' Roosevelt in 1902.",
    "Wooden train sets and mechanical wind-up toys teach children early lessons about motion, physics, and gears.",
    "Coloring toys brings back nostalgic childhood memories and provides highly accessible outlines for toddlers."
  ],
  nature: [
    "Forests and trees act as the Earth's lungs, absorbing carbon dioxide and producing the oxygen we breathe.",
    "Mountain ranges are formed when tectonic plates collide, pushing the Earth's crust upwards over millions of years.",
    "Coloring landscape scenes stimulates peaceful focus, helping colorists practice depth perception and shading."
  ],
  landscape: [
    "Forests and trees act as the Earth's lungs, absorbing carbon dioxide and producing the oxygen we breathe.",
    "Mountain ranges are formed when tectonic plates collide, pushing the Earth's crust upwards over millions of years.",
    "Coloring landscape scenes stimulates peaceful focus, helping colorists practice depth perception and shading."
  ]
};

const categoryFactsMap = {
  nature: [
    "Forests and trees act as the Earth's lungs, absorbing carbon dioxide and producing the oxygen we breathe.",
    "Mountain ranges are formed when tectonic plates collide, pushing the Earth's crust upwards over millions of years.",
    "Coloring landscape scenes stimulates peaceful focus, helping colorists practice depth perception and shading."
  ],
  space: [
    "In space, astronauts grow up to 2 inches taller because the lack of gravity allows their spinal column to expand.",
    "Rockets burn liquid or solid propellants to generate thrust, accelerating to escape velocity of 25,000 mph to reach orbit.",
    "Coloring space scenes stimulates dreams of space exploration, science careers, and cosmic discovery."
  ],
  fantasy: [
    "Unicorns, dragons, and fairies are mythical figures found in the folklore of many ancient cultures.",
    "Many legends depict mythical beasts as guardians of nature, treasures, and enchanted realms.",
    "Coloring fantasy outlines sparks imagination, creative writing, and magical storytelling."
  ],
  flowers: [
    "Fossil records show that roses and wildflowers have existed on Earth for over 35 million years.",
    "Plants use photosynthesis to convert sunlight into food, releasing oxygen into our atmosphere.",
    "Coloring botanical sheets helps practice shading, gradients, and natural organic colors."
  ],
  holidays: [
    "Seasonal holidays celebrate cultural traditions, harvest cycles, and historical legends worldwide.",
    "Festive decorations like carved pumpkins and evergreen trees began as ancient cultural markers of season changes.",
    "Coloring holiday scenes is a fun way to prepare for festive family gatherings."
  ],
  insects: [
    "Butterflies taste with their feet, and honeybees use a waggle dance to communicate locations of flowers.",
    "Insects are crucial to global ecosystems, acting as pollinators and soil enrichers.",
    "Coloring bugs and garden scenes helps children identify species and understand environmental cycles."
  ],
  kawaii: [
    "Kawaii is the Japanese culture of cuteness, characterized by friendly faces and rounded, clean minimalist lines.",
    "Simple, bold outlines with large coloring spaces are highly therapeutic and perfect for toddlers.",
    "Coloring cute kawaii characters boosts mood and provides a relaxing, low-stress artistic outlet."
  ],
  monsters: [
    "Mythological monsters and friendly beasts have been featured in cultural campfire stories for centuries.",
    "Coloring goofy and non-scary monsters helps kids overcome night fears through creative expression.",
    "Coloring imaginary creatures allows for wild color choices like neon green skin and orange teeth."
  ],
  music: [
    "Acoustic instruments use hollow chambers to amplify sound waves, while electric instruments use electromagnetic pickups.",
    "A standard modern piano has 88 keys, spanning over seven full octaves of notes.",
    "Coloring musical sheets helps students visualize fretboards and music staffs, boosting artistic appreciation."
  ],
  patterns: [
    "Tessellations and geometric grids are repeating patterns that fit together perfectly with no gaps.",
    "Coloring repetitive lines acts as a form of meditation, lowering heart rates and encouraging focus.",
    "Repeating designs are excellent for practicing color schemes, shading, and gradients."
  ],
  quotes: [
    "Motivational quotes and affirmations are scientifically proven to encourage positive mental habits.",
    "Beautiful floral and celestial frames surrounding quotes make them ideal for creating custom wall posters.",
    "Coloring text and borders combines typography with coloring, boosting focus and patience."
  ],
  seafloor: [
    "The seafloor houses massive ecosystems of coral reefs, sea urchins, sea anemones, and crabs.",
    "Over 80% of the ocean floor remains unmapped and unexplored by modern scientific instruments.",
    "Coloring seafloor scenes promotes interest in marine biology and marine habitat conservation."
  ],
  sports: [
    "Physical activities strengthen muscles, improve reflexes, and support healthy cardiovascular systems.",
    "Athletes like gymnasts and racers require immense coordination, core strength, and split-second focus.",
    "Coloring sports designs celebrates team spirit, healthy habits, and physical recreation."
  ],
  superheroes: [
    "Superheroes first gained massive popularity in the late 1930s as symbols of hope, justice, and protection.",
    "Science fiction suits and armor concepts represent advanced mechanical engineering and robotics.",
    "Coloring superhero templates lets kids create their own custom crests and suit colors."
  ],
  toys: [
    "Classic toys like teddy bears were named after U.S. President Theodore Roosevelt in 1902.",
    "Mechanical wind-up key toys and wooden train sets teach children early lessons about motion and gears.",
    "Coloring toys brings back nostalgic childhood memories and provides simple, accessible outlines."
  ],
  adventure: [
    "Explorers and mountain climbers navigate extreme terrains to map remote rivers, peaks, and caves.",
    "Pirate ships and galleons crossed open oceans using compasses, sextants, and celestial navigation.",
    "Coloring adventure sheets inspires active imagination and heroic storytelling."
  ],
  architecture: [
    "Skyscrapers use steel frames to distribute weight, while medieval castles used solid stone walls and moats.",
    "Spiral staircases in castle towers were built winding clockwise to favor right-handed defenders.",
    "Coloring detailed structures helps children understand historical building designs and shapes."
  ],
  astrology: [
    "Zodiac signs are based on constellations along the sun's path, tracked since ancient Babylonian times.",
    "The 12 zodiac symbols are grouped into four elements: Fire, Earth, Air, and Water.",
    "Coloring detailed astrological diagrams provides a relaxing, geometric layout for fine pens."
  ],
  birds: [
    "Birds have hollow bones and air sacs to reduce their body weight, making flight energy-efficient.",
    "The peregrine falcon is the fastest diving animal on Earth, reaching speeds over 240 mph (386 km/h).",
    "Coloring birds helps children learn about feathers, species recognition, and wildlife."
  ],
  education: [
    "Coloring alphabet letters and numbers helps preschool children build memory and word recognition.",
    "Simple counting games on printable pages combine visual play with early mathematics.",
    "Coloring diagrams of science tools like beakers boosts classroom engagement and curiosity."
  ],
  farm: [
    "Farms produce essential food crops and support farm animals like cows, sheep, and horses.",
    "Tractors use high-torque diesel engines to pull heavy plows and harvest equipment through fields.",
    "Coloring farm scenes helps kids learn about crop seasons, livestock, and rural life."
  ],
  fashion: [
    "Fashion design combines textiles, sketches, and colors to create runway clothes and dresses.",
    "Historic dress styles and hats reflect the cultural aesthetics of different decades and eras.",
    "Coloring fashion pages allows young designers to experiment with fabrics and patterns."
  ],
  food: [
    "Culinary baking is a science, using chemical reactions like baking powder to make dough rise.",
    "Donut machines were invented in 1920, helping popularize the sweet treat globally.",
    "Coloring sweet and savory foods is an accessible, color-rich activity that toddlers love."
  ],
  history: [
    "Ancient civilizations like Egypt, Rome, and the Vikings left behind detailed monuments and longships.",
    "Armored knights in jousting Tournaments were popular athletic events of the European Middle Ages.",
    "Coloring historical events helps children engage with ancient cultures and world history."
  ],
  anime: [
    "Japanese anime and manga art is characterized by large expressive eyes and dynamic hair outlines.",
    "Anime stories often feature magical girls with spells and armored knights protecting fantasy kingdoms.",
    "Coloring anime pages provides teens and young artists with high-contrast, modern pop culture drawings."
  ],
  animals: [
    "The animal kingdom features domestic pets, majestic safari beasts, and wild forest predators.",
    "Animal colors like stripes and spots help them camouflage in their native grasslands or woods.",
    "Coloring animal sheets helps children recognize wildlife species and build respect for nature."
  ]
};

function run() {
  console.log('=== Injecting Fun Facts for All Coloring Pages ===');
  
  if (!fs.existsSync(CONTENT_DIR)) {
    console.error('Content directory not found!');
    process.exit(1);
  }

  const categories = fs.readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  let totalInjected = 0;
  let totalSkipped = 0;

  categories.forEach(categoryId => {
    // Skip dinosaurs and vehicles folder since we injected custom specific facts there
    if (categoryId === 'dinosaurs' || categoryId === 'vehicles') {
      console.log(`Skipping custom category: [${categoryId}]`);
      return;
    }

    const categoryPath = path.join(CONTENT_DIR, categoryId);
    const pages = fs.readdirSync(categoryPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    pages.forEach(pageId => {
      const pagePath = path.join(categoryPath, pageId);
      const metaPath = path.join(pagePath, 'metadata.json');

      if (!fs.existsSync(metaPath)) {
        return;
      }

      let meta = {};
      try {
        meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
      } catch (e) {
        console.error(`Error parsing ${metaPath}:`, e.message);
        return;
      }

      // Check if we already have facts
      if (meta.funFacts && Array.isArray(meta.funFacts) && meta.funFacts.length > 0) {
        totalSkipped++;
        return;
      }

      // Find matching tag facts
      let pageFacts = null;
      const tags = meta.tags || [];
      const title = meta.title || '';

      // Check tags first
      for (const tag of tags) {
        const cleanTag = tag.toLowerCase().trim();
        if (keywordFactsMap[cleanTag]) {
          pageFacts = keywordFactsMap[cleanTag];
          break;
        }
      }

      // Check title keywords if no tag matched
      if (!pageFacts) {
        const cleanTitle = title.toLowerCase();
        for (const key of Object.keys(keywordFactsMap)) {
          if (cleanTitle.includes(key)) {
            pageFacts = keywordFactsMap[key];
            break;
          }
        }
      }

      // Fallback to category facts
      if (!pageFacts) {
        pageFacts = categoryFactsMap[categoryId] || [
          `This high-quality coloring page is designed to offer a fantastic creative experience.`,
          "Coloring is a scientifically proven way to increase focus, activate both brain hemispheres, and reduce daily stress.",
          "Ensure your printer scale settings are adjusted to 'Fit to Page' for a clean border alignment when printing."
        ];
      }

      // Write updated metadata
      meta.funFacts = pageFacts;
      fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2), 'utf8');
      totalInjected++;
    });
  });

  console.log(`=== Injection Summary ===`);
  console.log(`Total Pages Injected: ${totalInjected}`);
  console.log(`Total Pages Skipped (already had facts): ${totalSkipped}`);
}

run();
