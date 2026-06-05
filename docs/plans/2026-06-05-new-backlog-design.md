# Design Document: Scaffolding a New Easy/Medium Coloring Page Backlog

This document outlines the design and specification for adding 90 new coloring page placeholders (3 per category across 30 categories) to the ColoringPalace website.

---

## User Review Required
No breaking architectural changes are introduced. This is a content backlog addition.

---

## Proposed Changes

### Approach: Scripted Scaffolding
We will implement a script `scripts/scaffold-new-backlog.js` containing the metadata for 90 new coloring pages. Running the script will generate the folders, write placeholder files, copy the default coming-soon image, create placeholder flags, and index them in the SQLite database.

### backlog Distribution:
* **Total Categories:** 30
* **Pages per Category:** 3
* **Total Backlog Size:** 90 pages
* **Difficulty Distribution:** 1 Easy page + 2 Medium pages per category

### Catalog Definition (90 Pages)

1. **animals**
   - `playful-puppy` (Easy) - Dogs
   - `howling-wolf-forest` (Medium) - Forest Wildlife
   - `running-cheetah-savannah` (Medium) - Jungle & Safari
2. **mandalas**
   - `simple-heart-mandala` (Easy) - Abstract Circular
   - `blooming-lotus-mandala` (Medium) - Floral
   - `geometric-stars-mandala` (Medium) - Geometric
3. **nature**
   - `simple-desert-cactus` (Easy) - Deserts
   - `rocky-mountain-trail` (Medium) - Mountains
   - `forest-river-bridge` (Medium) - Lakes & Rivers
4. **space**
   - `happy-little-alien` (Easy) - Planets
   - `astronaut-floating-tether` (Medium) - Astronauts
   - `deep-space-probe` (Medium) - Spacecraft
5. **fantasy**
   - `cute-castle-drawbridge` (Easy) - Castles
   - `friendly-swamp-monster` (Medium) - Mythical Creatures
   - `fairy-riding-butterfly` (Medium) - Fairies
6. **flowers**
   - `simple-potted-tulip` (Easy) - Succulents & Cacti
   - `wildflower-meadow-stream` (Medium) - Wildflowers
   - `rose-garden-arbor` (Medium) - Roses
7. **dinosaurs**
   - `cute-dino-hatched-egg` (Easy) - Prehistoric
   - `velociraptor-chasing-prey` (Medium) - Predators
   - `stegosaurus-river-drink` (Medium) - Herbivores
8. **ocean**
   - `simple-smiling-whale` (Easy) - Sea Creatures
   - `coral-reef-octopus` (Medium) - Coral Reefs
   - `playful-sea-otter` (Medium) - Sea Creatures
9. **vehicles**
   - `simple-cartoon-tugboat` (Easy) - Watercraft
   - `classic-muscle-car` (Medium) - Vintage & Classics
   - `modern-sports-motorcycle` (Medium) - Sports Cars
10. **holidays**
    - `happy-easter-chick` (Easy) - Easter
    - `santa-filling-stockings` (Medium) - Christmas
    - `thanksgiving-pumpkin-pie` (Medium) - Thanksgiving
11. **kawaii**
    - `happy-toast-slice` (Easy) - Smiling Food
    - `kawaii-boba-tea` (Medium) - Smiling Food
    - `cute-kawaii-avocado` (Medium) - Smiling Food
12. **superheroes**
    - `cute-hero-flying-cat` (Easy) - Masked Heroes
    - `futuristic-hover-car` (Medium) - Sci-Fi Robots
    - `superhero-deflecting-lasers` (Medium) - Action Poses
13. **anime**
    - `cute-anime-mascot-flying` (Easy) - Chibi Characters
    - `anime-warrior-holding-shield` (Medium) - Action Anime
    - `magical-girl-casting-spell` (Medium) - Magical Girls
14. **food**
    - `simple-glazed-donut` (Easy) - Ice Cream & Treats
    - `tall-pancake-stack` (Medium) - Ice Cream & Treats
    - `delicious-pepperoni-pizza` (Medium) - Pizza & Burgers
15. **sports**
    - `simple-tennis-racket` (Easy) - Tennis
    - `soccer-goalie-saving` (Medium) - Soccer
    - `skateboarder-riding-rail` (Medium) - Skateboarding
16. **history**
    - `simple-knight-helmet` (Easy) - Knights & Castles
    - `egyptian-pharaoh-profile` (Medium) - Egyptian Pyramids
    - `greek-god-hermes` (Medium) - Greek Gods
17. **patterns**
    - `simple-chevron-stripes` (Easy) - Abstract Lines
    - `tessellating-honeycomb-pattern` (Medium) - Tessellations
    - `illusion-impossible-triangle` (Medium) - Optical Illusions
18. **insects**
    - `simple-smiling-caterpillar` (Easy) - Ladybugs
    - `busy-ant-colony` (Medium) - Ladybugs
    - `beautiful-monarch-butterfly` (Medium) - Butterflies
19. **birds**
    - `simple-standing-penguin` (Easy) - Songbirds
    - `majestic-flying-falcon` (Medium) - Eagles & Hawks
    - `colorful-toucan-branch` (Medium) - Parrots & Tropical
20. **architecture**
    - `simple-suburban-house` (Easy) - Cozy Cottages
    - `detailed-windmill-fields` (Medium) - Cozy Cottages
    - `modern-skyscraper-tower` (Medium) - Skyscrapers
21. **education**
    - `smiling-globe-cartoon` (Easy) - Science Lab
    - `stacked-school-textbooks` (Medium) - Books & Reading
    - `chemistry-beaker-bubbles` (Medium) - Science Lab
22. **fashion**
    - `simple-high-heel-shoe` (Easy) - Elegant Dresses
    - `vintage-hat-makeup-kit` (Medium) - Elegant Dresses
    - `stylish-summer-dress` (Medium) - Elegant Dresses
23. **toys**
    - `simple-rocking-horse` (Easy) - Toys & Games
    - `detailed-wooden-train-set` (Medium) - Toys & Games
    - `vintage-windup-car` (Medium) - Toys & Games
24. **adventure**
    - `simple-camp-campfire` (Easy) - Camping
    - `scenic-mountain-camping` (Medium) - Camping
    - `kayak-paddling-river` (Medium) - Camping
25. **astrology**
    - `simple-aries-ram` (Easy) - Constellations
    - `majestic-leo-lion-stars` (Medium) - Constellations
    - `taurus-bull-constellation` (Medium) - Constellations
26. **farm**
    - `simple-windmill-hill` (Easy) - Farm & Country
    - `farm-tractor-barn` (Medium) - Farm & Country
    - `rooster-perched-fence` (Medium) - Farm & Country
27. **monsters**
    - `simple-smiling-one-eye-monster` (Easy) - Monsters & Cute Beasts
    - `playful-furry-monster-friends` (Medium) - Monsters & Cute Beasts
    - `monster-eating-cookie` (Medium) - Monsters & Cute Beasts
28. **music**
    - `simple-wooden-violin` (Easy) - Music & Instruments
    - `grand-piano-stage` (Medium) - Music & Instruments
    - `cool-electric-guitar` (Medium) - Music & Instruments
29. **quotes**
    - `simple-thank-you-stars` (Easy) - Quotes & Typography
    - `be-kind-floral-frame` (Medium) - Quotes & Typography
    - `stay-positive-sunflower` (Medium) - Quotes & Typography
30. **seafloor**
    - `simple-sunken-anchor` (Easy) - Under the Sea
    - `octopus-guarding-chest` (Medium) - Under the Sea
    - `deep-sea-diver-submarine` (Medium) - Under the Sea

---

## Verification Plan

### Automated Verification
1. Run `node scripts/sync.js` to ensure zero compilation or database syntax errors.
2. Run `npm run build` to verify Next.js builds successfully.
3. Run an audit checking for `is_placeholder` flags on the new folders.
