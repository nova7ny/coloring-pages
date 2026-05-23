# Catalog Expansion Design Document - 2026-05-22

This design document outlines the additions of 9 new coloring page categories (10 total categories) and 10 dynamic coloring sheets (1 per category, including a new one for Animals) to expand the ColoringPalace platform.

---

## 🎨 Catalog Structure Spec

We are expanding the website's initial single-item database with 10 high-end categories and 10 custom drawings.

### 1. Categories List

1. **Animals (`animals`)** - `🦁`
   - Description: "Cute safari wildlife, domestic pets, and majestic jungle beasts."
2. **Mandalas (`mandalas`)** - `💮`
   - Description: "Intricate geometric mandala patterns for relaxing, meditative coloring."
3. **Nature & Landscapes (`nature`)** - `🏔️`
   - Description: "Scenic mountain ranges, serene forests, and beautiful garden landscapes."
4. **Space & Planets (`space`)** - `🚀`
   - Description: "Out-of-this-world rockets, planets, galaxies, and celestial adventures."
5. **Fantasy & Fairy Tales (`fantasy`)** - `🦄`
   - Description: "Magical castles, mystical unicorns, playful fairies, and legendary dragons."
6. **Flowers & Botanicals (`flowers`)** - `🌻`
   - Description: "Gorgeous bouquets, blooming sunflowers, and intricate botanical drawings."
7. **Dinosaurs (`dinosaurs`)** - `🦖`
   - Description: "Roaring T-Rex, towering Brachiosaurus, and prehistoric volcanic scenes."
8. **Ocean Life (`ocean`)** - `🐙`
   - Description: "Deep sea creatures, colorful coral reefs, friendly dolphins, and majestic whales."
9. **Vehicles & Transport (`vehicles`)** - `🚗`
   - Description: "Fast sports cars, steam trains, giant monster trucks, and flying airplanes."
10. **Holidays & Seasons (`holidays`)** - `🎃`
    - Description: "Festive Christmas ornaments, spooky Halloween pumpkins, and seasonal decorations."

---

## 🖌️ Image Generation Spec

All page assets will contain three primary files stored under `public/content/<category-id>/<page-id>/`:
1. `image.png`: High-resolution black and white drawing generated via Stable Diffusion.
2. `printable.pdf`: A vector-wrapped printable PDF document for easy home printing.
3. `metadata.json`: SEO attributes and indexing parameters.

### Formats & Prompts:
We use a standardized prompt format to ensure all coloring page images are clean, crisp, and high-contrast:
`"Black and white coloring page for kids and adults, ultra-clean black line art, pure white background, zero shading, zero grayscale gradients, bold vector-grade outer outlines, highly detailed coloring canvas, [Subject]"`

---

## 📂 Verification & SQLite Synchronization Plan

Upon generating the files on disk, we will execute `node scripts/sync.js` to automatically parse and synchronize all 10 categories and 11 coloring pages (including `playful-kitten` and the 10 new assets) into our SQLite database.
