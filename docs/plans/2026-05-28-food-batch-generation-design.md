# Food Batch Image Generation Design Document

**Date**: 2026-05-28  
**Author**: Antigravity Agent  
**Topic**: Ingestion of 6 Food Category Coloring Pages (Easy & Medium Tiers)

---

## 1. Overview & Goals
The goal of this run is to replace 6 placeholder coloring pages inside the `food` category with high-resolution, premium line-art drawings that adhere strictly to the standards defined in `docs/drawing-generation-guide.md`.

---

## 2. Ingestion Details & Prompt Design

The batch consists of 4 **Easy** pages and 2 **Medium** pages.

### Easy Coloring Pages (Toddlers & Young Kids)
*   **Visual Style**: Very thick continuous outlines, simple cartoon drawings, oversized coloring zones, clean white backgrounds, zero shading/textures, and sparse simple cartoon background elements.
*   **Aesthetic Audit Criteria**: Must be colorable with standard crayons; 80%+ of coloring zones must be larger than a coin.
*   **Target Pages**:
    1.  **`happy-apple-banana`** (Easy)
        *   *Subject*: Happy Apple and Banana Friends
        *   *Prompt*: `Black and white coloring page for toddlers and young kids, extremely simple cartoon Happy Apple and Banana Friends, very thick bold outer outlines, large empty coloring spaces, simple sparse cartoon background elements, clean white background, zero shading, zero fine details, zero textures, no text, no labels, no watermarks, no title, no words, no letters, portrait orientation, tall vertical format, full-page composition filling the entire canvas top to bottom, A4 page proportions`
    2.  **`simple-cherry-cupcake`** (Easy)
        *   *Subject*: Simple Cupcake with Cherry
        *   *Prompt*: `Black and white coloring page for toddlers and young kids, extremely simple cartoon Simple Cupcake with Cherry, very thick bold outer outlines, large empty coloring spaces, simple sparse cartoon background elements, clean white background, zero shading, zero fine details, zero textures, no text, no labels, no watermarks, no title, no words, no letters, portrait orientation, tall vertical format, full-page composition filling the entire canvas top to bottom, A4 page proportions`
    3.  **`simple-soft-serve-cone`** (Easy)
        *   *Subject*: Simple Soft Serve Ice Cream Cone
        *   *Prompt*: `Black and white coloring page for toddlers and young kids, extremely simple cartoon Simple Soft Serve Ice Cream Cone, very thick bold outer outlines, large empty coloring spaces, simple sparse cartoon background elements, clean white background, zero shading, zero fine details, zero textures, no text, no labels, no watermarks, no title, no words, no letters, portrait orientation, tall vertical format, full-page composition filling the entire canvas top to bottom, A4 page proportions`
    4.  **`smiling-pizza-slice`** (Easy)
        *   *Subject*: Smiling Pizza Slice Cartoon
        *   *Prompt*: `Black and white coloring page for toddlers and young kids, extremely simple cartoon Smiling Pizza Slice Cartoon, very thick bold outer outlines, large empty coloring spaces, simple sparse cartoon background elements, clean white background, zero shading, zero fine details, zero textures, no text, no labels, no watermarks, no title, no words, no letters, portrait orientation, tall vertical format, full-page composition filling the entire canvas top to bottom, A4 page proportions`

### Medium Coloring Pages (Kids & Teens)
*   **Visual Style**: Standard outline width, moderate realistic or stylized food textures (veins on lettuce, seeds on buns, swirls on ice cream), simple scenic/dining table background, zero shading/grayscale gradients/text.
*   **Aesthetic Audit Criteria**: Colorable with colored pencils; contains realistic/stylized textures; scenic background context.
*   **Target Pages**:
    1.  **`double-cheeseburger-platter`** (Medium)
        *   *Subject*: Double Cheeseburger Platter with Fries
        *   *Prompt*: `Black and white coloring page for kids and teens, clean line art of Double Cheeseburger Platter with Fries, standard line weight, moderate details and natural textures, clean white background, simple scenic background, zero shading, zero grayscale gradients, no text, no labels, no watermarks, no title, no words, no letters, portrait orientation, tall vertical format, full-page composition filling the entire canvas top to bottom, A4 page proportions`
    2.  **`giant-sundae-bowl`** (Medium)
        *   *Subject*: Giant Sundae Bowl with Wafers
        *   *Prompt*: `Black and white coloring page for kids and teens, clean line art of Giant Sundae Bowl with Wafers, standard line weight, moderate details and natural textures, clean white background, simple scenic background, zero shading, zero grayscale gradients, no text, no labels, no watermarks, no title, no words, no letters, portrait orientation, tall vertical format, full-page composition filling the entire canvas top to bottom, A4 page proportions`

---

## 3. Verification Plan
1.  **Manual Aesthetic Audit**: For each generated image, verify that the visual density matches the target difficulty perfectly.
2.  **Filesystem Integration**: Verify that images are copied to `public/content/food/<pageId>/image.png`, and the `.is_placeholder` marker file is successfully deleted.
3.  **Database Synced**: Run `node scripts/sync.js` to ingest files into `dev.db`.
4.  **Compilation & Build**: Run `npm run build` to verify route compilation and static page generation are successful.
