# Aesthetic & Difficulty Standards for Drawing Generation

To build a well-balanced coloring book library suitable for all age groups, future image-generation agents must strictly adhere to the standards outlined in this guide. Each difficulty level has clear visual characteristics, target metrics, and prompt formulas.

---

## 📊 Summary of Difficulty Tiers

| Difficulty | Age Range | Target Line Weight | Background Detail | Coloring Zone Size | Prompt Formula Modifiers |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Easy** | Toddlers & Kids (Ages 2-6) | Very Bold & Thick | Sparse, simple cartoon elements (sun, moon, simple clouds, flat grass) | Large, open areas (> 2cm x 2cm) | `toddler-friendly, very thick outlines, cartoon style, extremely simple shapes, large open coloring zones, zero textures` |
| **Medium** | Older Kids & Teens (Ages 7-14) | Balanced / Standard | Basic Context (horizon, sky, trees) | Moderate size (pencil-friendly) | `standard outlines, clean details, natural textures, balanced composition, simple scenic background` |
| **Hard** | Adults & Teens (Ages 15+) | Fine & Delicate | Complex & Rich (repeating patterns) | Tiny, detailed areas (fine gel-pen sized) | `ultra-detailed, intricate geometric patterns, fine lines, repeating motifs, complex mandala borders` |

---

## 🎨 Tier 1: Easy (Toddler & Kids Level)

### Definition & Visual Guidelines
"Easy" pages must be extremely accessible. A toddler using thick crayons or markers should be able to color them comfortably. 
*   **Contour Lines**: Outlines must be exceptionally bold and continuous (no sketch lines).
*   **Inner Details**: Inside details must be kept to an absolute minimum (e.g., a dinosaur should just have eyes and simple spots, not individual skin textures or scale wrinkles).
*   **Backgrounds**: The background must be simple and sparse. It is acceptable to include a few basic cartoon elements like a sun, moon, simple clouds, a clean flat horizon line, or a few simple blades of grass. These elements must share the same thick line weight and large open coloring zones as the main subject.

### Standardized Prompt Template:
```text
Black and white coloring page for toddlers and young kids, extremely simple cartoon [Subject], very thick bold outer outlines, large empty coloring spaces, simple sparse cartoon background elements (like a simple sun and clouds), clean white background, zero shading, zero fine details, zero textures, no text, no labels, no watermarks, no title, no words, no letters
```

### Visual Verification Check:
*   [ ] Can this be colored cleanly using a standard crayon?
*   [ ] Are 80%+ of the individual coloring zones larger than a coin?
*   [ ] Is the background clean, containing only simple and sparse cartoon elements (like a basic sun, moon, clouds, or grass)?

---

## 🎨 Tier 2: Medium (Teens & Family Level)

### Definition & Visual Guidelines
"Medium" pages strike a balance between character art and basic environmental context.
*   **Contour Lines**: Outlines are standard width, clean, and distinct.
*   **Inner Details**: Includes simplified realistic textures (e.g., scales on a turtle, fur lines on a lion's mane, feathers on a bird) that represent the animal's features without cluttering the page.
*   **Backgrounds**: Backgrounds include basic context that adds to the story (e.g., coral reef branches, a mountain range outline, forest trees) but remains secondary to the main subject.

### Standardized Prompt Template:
```text
Black and white coloring page for kids and teens, clean line art of [Subject], standard line weight, moderate details and natural textures, clean white background, simple scenic background, zero shading, zero grayscale gradients, no text, no labels, no watermarks, no title, no words, no letters
```

### Visual Verification Check:
*   [ ] Can this be colored comfortably using standard coloring pencils?
*   [ ] Does the sheet contain realistic or stylized textures (e.g., leaves, scales, fur)?
*   [ ] Does the background provide context without overwhelming the subject?

---

## 🎨 Tier 3: Hard (Adults & Mindfulness Level)

### Definition & Visual Guidelines
"Hard" pages are designed for focus, relaxation, and artistic exploration. They require a steady hand and thin-tipped markers or gel pens.
*   **Contour Lines**: Thin, delicate, highly precise lines.
*   **Inner Details**: Dense geometric patterns, repetitive floral shapes, high-fidelity biological textures, or overlapping abstract lines.
*   **Backgrounds**: The entire page is active. Backgrounds are packed with detailed motifs, borders, or scenery that blend seamlessly with the main subject.

### Standardized Prompt Template:
```text
Intricate black and white coloring page for adults, ultra-detailed [Subject] with highly complex geometric patterns, fine lines, repeating mandala motifs, dense coloring canvas, full-bleed design, zero shading, pure white background, no text, no labels, no watermarks, no title, no words, no letters
```

### Visual Verification Check:
*   [ ] Does this require fine gel pens or fine-tip markers to color?
*   [ ] Are there intricate repeating patterns or mandalas embedded in the design?
*   [ ] Is the entire canvas filled with detailed sections?

---

## ⚙️ How to Code and Verify Difficulties
When creating or generating coloring pages, ensure that the metadata aligns exactly with these rules. 

1. **Category Mapping**: Prioritize categories that fit their natural difficulty level, but aim for a healthy distribution within each category. For example:
   * **Dinosaurs**: Standardize on **Easy** (single simple cartoon dinosaur) and **Medium** (dinosaur in a detailed prehistoric landscape).
   * **Mandalas**: Standardize on **Hard** (intricate radial geometries).
2. **Metadata sync**: In the JSON meta files, strictly declare:
   ```json
   "difficulty": "Easy" | "Medium" | "Hard"
   ```
   The ingestion scanner (`scripts/sync.js`) will parse this and index it perfectly to drive frontend sorting and age-tier filtration.
