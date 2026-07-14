const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '../public/content');

const dinoFactsMap = {
  allosaurus: [
    "Allosaurus was a massive carnivorous dinosaur that lived during the Late Jurassic period, around 155 to 145 million years ago.",
    "It was a top predator of its ecosystem, equipped with dozens of sharp, serrated teeth and large, powerful claws.",
    "It grew up to 38 feet (12 meters) in length and walked on two strong hind legs, using its heavy tail for balance."
  ],
  amargasaurus: [
    "Amargasaurus lived in what is now Argentina during the Early Cretaceous period, about 129 to 122 million years ago.",
    "It was characterized by two parallel rows of tall, spiky spines running down its neck and back, which may have supported a skin sail.",
    "It was a relatively small sauropod (long-necked herbivore), measuring about 33 feet (10 meters) in length."
  ],
  ankylosaurus: [
    "Ankylosaurus was a heavily armored herbivorous dinosaur from the Late Cretaceous period, around 68 to 66 million years ago.",
    "It featured a massive bony club at the end of its tail, which it likely used as a defense weapon against predators like T-Rex.",
    "Its back was covered in osteoderms—bony plates fused directly into its skin, acting like a natural shield of armor."
  ],
  baryonyx: [
    "Baryonyx was a fish-eating theropod dinosaur that lived during the Early Cretaceous period in what is now Europe.",
    "It had a long, crocodile-like snout and a massive 12-inch (31 cm) curved claw on its first finger, perfect for catching fish.",
    "Its name means 'heavy claw', referencing the massive thumb spikes it used to spear prey in swampy waters."
  ],
  carnotaurus: [
    "Carnotaurus was a uniquely horn-faced theropod that lived in South America during the Late Cretaceous period.",
    "Its name means 'meat-eating bull' due to the distinctive horns above its eyes. It was built for high-speed running.",
    "It possessed extremely reduced, tiny forelimbs (arms) that were even smaller than those of the Tyrannosaurus Rex."
  ],
  coelophysis: [
    "Coelophysis was a small, slender dinosaur that lived during the Late Triassic period, making it one of the earliest dinosaurs.",
    "It was a fast, agile predator with hollow bones, measuring about 10 feet in length and weighing only 44 pounds (20 kg).",
    "Fossil evidence suggests they lived and hunted in packs, navigating Triassic river basins in search of small prey."
  ],
  deinonychus: [
    "Deinonychus was a fast, agile predator from the Early Cretaceous period, measuring about 11 feet (3.4 meters) in length.",
    "It is famous for the large, sickle-shaped claw on the second toe of each foot, which it used to slash and capture prey.",
    "The discovery of Deinonychus in 1964 revolutionized paleontology, launching the 'dinosaur renaissance' by proving they were active and warm-blooded."
  ],
  dilophosaurus: [
    "Dilophosaurus lived during the Early Jurassic period and was characterized by a pair of semi-circular crests on its skull.",
    "Contrary to its depiction in popular movies, there is no scientific evidence that Dilophosaurus spit venom or possessed a neck frill.",
    "It was one of the first large predatory dinosaurs, measuring up to 20 feet (6 meters) long and weighing about 900 pounds."
  ],
  dimetrodon: [
    "Dimetrodon is often mistaken for a dinosaur, but it was actually a synapsid (mammal-like reptile) that lived during the Permian period.",
    "It was famous for the massive sail on its back, which was likely used for thermoregulation (controlling its body temperature).",
    "It lived before the first dinosaurs appeared, being more closely related to modern mammals than to modern reptiles."
  ],
  elasmosaurus: [
    "Elasmosaurus was not a dinosaur, but a massive marine reptile (plesiosaur) that lived during the Late Cretaceous period.",
    "It had an extremely long neck containing 72 vertebrae—more than any other known animal—accounting for over half of its body length.",
    "It swam through Cretaceous seas using four large, paddle-like flippers to chase fish and squid."
  ],
  gallimimus: [
    "Gallimimus was an ostrich-like dinosaur that lived during the Late Cretaceous period in what is now Mongolia.",
    "It had a toothless beak, large eyes, and long, slender legs that made it one of the fastest dinosaurs, capable of speeds up to 35 mph.",
    "It was an omnivore, using its beak to forage for plants, seeds, insects, and small animals."
  ],
  ichthyosaurus: [
    "Ichthyosaurus was a dolphin-like marine reptile that ruled the oceans during the Late Triassic and Early Jurassic periods.",
    "It gave birth to live young in the water rather than laying eggs on land, showing complete adaptation to marine life.",
    "It possessed massive eyes protected by bony rings to help it see in the dark depths of the prehistoric ocean."
  ],
  iguanodon: [
    "Iguanodon was a large herbivore from the Early Cretaceous period, famous for its distinctive conical thumb spikes.",
    "It could move on both two and four legs, using its stiff tail for balance while grazing on ferns and horsetails.",
    "It was the second dinosaur ever named, discovered in England in 1822 and triggering the early study of paleontology."
  ],
  kentrosaurus: [
    "Kentrosaurus was a stegosaur dinosaur from the Late Jurassic period, covered in flat bony plates and long protective spikes.",
    "It had pairs of long spikes on its shoulders and tail, which it swung to defend itself from predators.",
    "It had a relatively small brain compared to its body size, grazing slowly on low-lying vegetation."
  ],
  mosasaurus: [
    "Mosasaurus was a giant, air-breathing marine reptile that ruled the Cretaceous seas, growing up to 50 feet (15 meters) in length.",
    "It had a powerful double-hinged jaw and a paddle-like tail, allowing it to hunt fish, turtles, and even other marine reptiles.",
    "It is closely related to modern monitor lizards and snakes, swimming with a serpentine side-to-side body motion."
  ],
  pachycephalosaurus: [
    "Pachycephalosaurus was famous for its dome-shaped skull, which was up to 9 inches (22 cm) thick and made of solid bone.",
    "Scientists believe it used its dome head for head-butting rivals or flanking predators during disputes in the Late Cretaceous.",
    "Its dome was surrounded by small bony spikes and knobs, giving its head a highly decorated appearance."
  ],
  parasaurolophus: [
    "Parasaurolophus was a duck-billed herbivore characterized by a long, curved hollow crest projecting from the back of its skull.",
    "The hollow crest acted as a resonance chamber to produce loud, low-frequency trumpeting calls to communicate with its herd.",
    "It could walk on two legs for running or graze on all four legs, possessing dental batteries of hundreds of teeth to grind tough plants."
  ],
  plesiosaurus: [
    "Plesiosaurus was a prehistoric marine reptile with a broad body, short tail, and four powerful flippers used to fly through the water.",
    "It lived during the Early Jurassic period and fed on small fish and squids, catching them with its sharp, interlocking teeth.",
    "Its fossils were first discovered by the legendary paleontologist Mary Anning in England in 1823."
  ],
  protoceratops: [
    "Protoceratops was a sheep-sized herbivorous dinosaur that lived in the Gobi Desert during the Late Cretaceous period.",
    "Unlike its later relative Triceratops, it lacked well-developed horns, possessing only a small bony neck frill.",
    "Fossil discoveries of Protoceratops nests with eggs provided the first proof that dinosaurs laid eggs."
  ],
  quetzalcoatlus: [
    "Quetzalcoatlus was a pterosaur from the Late Cretaceous and one of the largest flying creatures to ever exist, with a wingspan of 36 feet (11 meters).",
    "It was as tall as a modern giraffe when standing on the ground and is believed to have hunted small prey on foot like a stork.",
    "It was named after Quetzalcoatl, the feathered serpent god of Aztec mythology."
  ],
  "saber-toothed-tiger": [
    "Smilodon (the Saber-toothed Cat) lived during the Pleistocene epoch (Ice Age) and was characterized by its 7-inch curved canine teeth.",
    "It was a robust predator built for pinning down large prey like bison and mammoths, rather than chasing them at high speeds.",
    "It could open its jaws up to an angle of 120 degrees—twice as wide as a modern lion—to sink its fangs into prey."
  ],
  spinosaurus: [
    "Spinosaurus was the largest known carnivorous dinosaur, measuring up to 50 feet (15 meters) long—even larger than Tyrannosaurus Rex.",
    "It had a massive sail on its back supported by spines and was uniquely adapted for a semi-aquatic lifestyle, hunting fish in Cretaceous rivers.",
    "It featured a long, narrow snout lined with straight, conical teeth, perfectly designed for gripping slippery fish."
  ],
  styracosaurus: [
    "Styracosaurus was a ceratopsian dinosaur featuring a single long nose horn and a frill decorated with 4 to 6 long spikes.",
    "It lived during the Late Cretaceous period, using its tough beak and rows of teeth to shear tough prehistoric foliage.",
    "Its nose horn grew up to 2 feet (60 cm) long, acting as a formidable defense weapon against predators."
  ],
  therizinosaurus: [
    "Therizinosaurus was a bizarre herbivore from the Late Cretaceous, possessing the longest claws of any known animal—up to 3 feet (1 meter) long.",
    "It used its giant scythe-like claws to gather leaves from high branches and defend itself from predators like Tarbosaurus.",
    "It was a theropod—the same group that includes carnivores like T-Rex—but it adapted to eat plants."
  ],
  "woolly-mammoth": [
    "The Woolly Mammoth lived during the Ice Age and was covered in thick shaggy fur with a layer of fat up to 3 inches thick to survive the cold.",
    "It possessed long, curved ivory tusks up to 14 feet (4.2 meters) in length, which it used to sweep snow off the grass it ate.",
    "It coexisted with early humans, who hunted them for meat and used their bones and tusks to build shelters and tools."
  ]
};

const vehicleFactsMap = {
  mustang: [
    "The 1969 Ford Mustang Mach 1 was a legendary muscle car powered by a Cobra Jet V8 engine producing up to 335 horsepower.",
    "It featured classic fastback styling, a blacked-out hood, and racing stripes, symbolizing the peak of the American muscle car era.",
    "It is highly prized by collectors for its aggressive look, dual exhaust pipes, and competition suspension."
  ],
  nova: [
    "The 1970 Chevrolet Nova was a popular compact muscle car, widely customized for drag racing due to its light body and powerful V8 engine options.",
    "It could produce over 300 horsepower from the factory, making it a favorite for hot-rod enthusiasts and classic car collectors.",
    "Its minimalist, understated design earned it a reputation as a 'sleeper'—a car that was much faster than it looked."
  ],
  gto: [
    "The 1970 Pontiac GTO is widely considered one of the classic 'Goat' muscle cars, featuring a Ram Air V8 engine producing 366 horsepower.",
    "It was famous for its distinctive split front grille, dual hood scoops, and high torque output.",
    "The GTO is credited with starting the classic muscle car boom of the 1960s and 1970s."
  ],
  rs6: [
    "The Audi RS6 Avant is a high-performance luxury wagon powered by a twin-turbo V8 engine producing over 590 horsepower.",
    "It features Audi's famous Quattro all-wheel-drive system, accelerating from 0 to 60 mph in just 3.5 seconds.",
    "It combines supercar performance with the practical cargo space of a family estate wagon."
  ],
  racecar: [
    "Formula 1 race cars are advanced engineering machines powered by hybrid V6 turbocharged engines producing close to 1,000 horsepower.",
    "They generate immense aerodynamic downforce, allowing them to take tight track corners at lateral forces exceeding 5 Gs.",
    "Their chassis is built from ultra-lightweight carbon fiber composites, weighing only around 1,760 pounds (800 kg) including the driver."
  ],
  hypercar: [
    "Modern hypercar engines combine turbocharging and electric motors to deliver over 1,500 horsepower and top speeds exceeding 250 mph.",
    "They are crafted from lightweight carbon fiber, titanium, and advanced alloys to withstand high combustion temperatures.",
    "Each hypercar is custom-engineered with active aerodynamics, adjusting wings in real-time to maximize stability."
  ],
  "bullet-train": [
    "Modern high-speed bullet trains (like Japan's Shinkansen) operate on dedicated tracks, reaching service speeds of over 200 mph (320 km/h).",
    "They utilize aerodynamic nose cones and electric overhead lines to transport passengers efficiently with zero carbon emissions.",
    "They use active tilting suspension and automatic braking systems to maintain passenger safety during high-speed curves."
  ],
  biplane: [
    "Vintage biplanes featured two stacked wings, providing high lift and agility for early aviation, aerobatics, and barnstorming shows.",
    "They were powered by radial piston engines, driving wooden or metallic propellers to generate thrust.",
    "They played a major role in World War I combat and early crop-dusting agricultural flights."
  ],
  "propeller-plane": [
    "Propeller planes use piston or turboprop engines to spin a propeller, generating thrust efficiently for short to medium flights.",
    "They can take off and land on shorter, unpaved runways compared to modern commercial jet liners.",
    "Modern turboprops are highly fuel-efficient, making them popular for regional commuter flights."
  ],
  "monster-truck": [
    "Monster trucks are custom-built vehicles featuring massive 66-inch tires and high-output engines producing up to 1,500 horsepower.",
    "They use long-travel nitrogen shock absorbers to cushion landing forces from jumps exceeding 30 feet in height.",
    "Their heavy-duty bodies are made of lightweight fiberglass, designed to break away during spectacular stadium rolls."
  ],
  bulldozer: [
    "Bulldozers are heavy crawler tractors equipped with a front metal blade to push massive amounts of soil, sand, and rubble.",
    "They use continuous steel tracks rather than wheels to distribute their weight, preventing them from sinking into soft ground.",
    "Their rear mechanical ripper claw is used to break up hard, rocky ground before leveling."
  ],
  excavator: [
    "Excavators are heavy construction vehicles consisting of a boom, stick, bucket, and a rotating cab mounted on tracks.",
    "They utilize powerful hydraulic pumps to generate tons of digging force, essential for trenching, mining, and demolition.",
    "The cab can rotate a full 360 degrees, allowing the operator to dump soil without moving the tracks."
  ],
  forklift: [
    "Industrial forklifts are warehouse vehicles used to lift and move heavy pallets of cargo weighing up to several tons.",
    "They utilize rear-wheel steering for extreme maneuverability in tight warehouse aisles.",
    "They use a heavy metal counterweight at the rear of the vehicle to prevent tipping over when carrying heavy loads."
  ],
  "road-roller": [
    "Road rollers are compactor vehicles that use heavy steel drums to flatten and compress soil, concrete, and asphalt for highways.",
    "They use vibration mechanisms inside the drum to increase compaction depth and density.",
    "The smooth drum ensures the asphalt is perfectly flat for safe, high-speed vehicle travel."
  ],
  paver: [
    "Asphalt pavers are road-laying machines that distribute and pre-compact hot asphalt evenly over the roadbed.",
    "They receive asphalt directly from dump trucks and feed it through a rear conveyor screed to lay a flat pavement layer.",
    "They work in close coordination with road rollers to build smooth highway surfaces."
  ],
  crane: [
    "Crawler cranes use long lattice booms to lift heavy steel beams, while tower cranes construct skyscrapers.",
    "They provide the structural frameworks and hoisting capabilities required for modern skyscrapers and bridges.",
    "They utilize heavy steel counterweights and wire ropes to balance and lift loads weighing hundreds of tons."
  ],
  "pile-driver": [
    "Pile drivers are construction machines that drive steel, concrete, or wood foundation piles deep into the ground.",
    "They lift a heavy weight (called a hammer) and drop it repeatedly onto the pile to wedge it into solid bedrock.",
    "These deep foundations are crucial for supporting the weight of skyscrapers, docks, and bridges."
  ],
  silvia: [
    "The Nissan Silvia S15 is a legendary JDM sports coupe, highly sought after for drifting due to its rear-wheel-drive layout.",
    "It is powered by the famous SR20DET turbocharged 4-cylinder engine, producing 250 horsepower from the factory.",
    "Its lightweight chassis and balanced 50:50 weight distribution make it a drift racing icon."
  ],
  skyline: [
    "The Nissan Skyline R34 GT-R is a legendary Japanese sports car, powered by a twin-turbo inline-6 engine producing 276 horsepower.",
    "It featured the advanced ATTESA E-TS all-wheel-drive system and active rear steering, making it a high-tech track racer.",
    "It is highly famous in pop culture and car movies, commonly referred to by car fans as 'Godzilla'."
  ],
  supercar: [
    "Modern supercars utilize lightweight carbon fiber monocoques and mid-engine layouts to achieve perfect cornering balance.",
    "They are powered by high-revving V8 or V10 engines, producing over 700 horsepower and speeds exceeding 200 mph.",
    "They feature carbon-ceramic brakes that can stop the car from 60 mph in under 100 feet."
  ],
  locomotive: [
    "Steam locomotives dominated rail transport from the early 19th century to the mid-20th century, powered by burning coal or wood.",
    "The boiling water created high-pressure steam, which pushed pistons to turn the massive iron driving wheels.",
    "They were critical for driving the industrial revolution, connecting cities and transport corridors worldwide."
  ],
  train: [
    "Modern passenger trains are powered by electricity or diesel engines, transport cargo and commuters efficiently over long distances.",
    "They run on steel tracks with extremely low rolling resistance, making them one of the most eco-friendly transit methods.",
    "They use air brakes and automatic signaling systems to safely manage high-speed transport schedules."
  ]
};

function run() {
  console.log('=== Injecting Subject-Specific Fun Facts ===');

  const dinoDir = path.join(CONTENT_DIR, 'dinosaurs');
  const vehicleDir = path.join(CONTENT_DIR, 'vehicles');

  // 1. Process Dinosaurs
  if (fs.existsSync(dinoDir)) {
    const folders = fs.readdirSync(dinoDir).filter(f => fs.statSync(path.join(dinoDir, f)).isDirectory());
    folders.forEach(folder => {
      // Find matching key in lookup
      let matchedKey = null;
      for (const key of Object.keys(dinoFactsMap)) {
        if (folder.toLowerCase().includes(key)) {
          matchedKey = key;
          break;
        }
      }

      if (matchedKey) {
        const metaPath = path.join(dinoDir, folder, 'metadata.json');
        if (fs.existsSync(metaPath)) {
          const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
          meta.funFacts = dinoFactsMap[matchedKey];
          fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2), 'utf8');
          console.log(`Injected dinosaur facts for: ${folder}`);
        }
      }
    });
  }

  // 2. Process Vehicles
  if (fs.existsSync(vehicleDir)) {
    const folders = fs.readdirSync(vehicleDir).filter(f => fs.statSync(path.join(vehicleDir, f)).isDirectory());
    folders.forEach(folder => {
      // Find matching key in lookup
      let matchedKey = null;
      for (const key of Object.keys(vehicleFactsMap)) {
        if (folder.toLowerCase().includes(key)) {
          matchedKey = key;
          break;
        }
      }

      if (matchedKey) {
        const metaPath = path.join(vehicleDir, folder, 'metadata.json');
        if (fs.existsSync(metaPath)) {
          const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
          meta.funFacts = vehicleFactsMap[matchedKey];
          fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2), 'utf8');
          console.log(`Injected vehicle facts for: ${folder}`);
        }
      }
    });
  }

  console.log('=== Fun Facts Injection Complete ===');
}

run();
