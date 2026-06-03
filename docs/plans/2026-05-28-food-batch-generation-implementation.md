# Food Batch Image Generation Implementation Plan

> **For Antigravity:** REQUIRED WORKFLOW: Use `.agent/workflows/execute-plan.md` to execute this plan in single-flow mode.

**Goal:** Ingest six new high-resolution Food category coloring pages by replacing their placeholders, removing markers, synchronizing the database, and verifying the production build.

**Architecture:** Use the AI image generator (`generate_image`) to create premium line-art drawings for each food topic based on the specific difficulty rules. Clean the directory by removing the placeholder markers, run the ingestion scanner, and compile the static routes.

**Tech Stack:** AI Image Generation, Node.js, Next.js, SQLite, Prisma

---

### Task 1: Ingest `happy-apple-banana` (Easy)

**Files:**
- Create/Overwrite: `public/content/food/happy-apple-banana/image.png`
- Delete: `public/content/food/happy-apple-banana/.is_placeholder`

**Step 1: Generate the line-art drawing**
Run the AI image generator to produce the image matching the Easy prompts:
- *Prompt:* `Black and white coloring page for toddlers and young kids, extremely simple cartoon Happy Apple and Banana Friends, very thick bold outer outlines, large empty coloring spaces, simple sparse cartoon background elements, clean white background, zero shading, zero fine details, zero textures, no text, no labels, no watermarks, no title, no words, no letters, portrait orientation, tall vertical format, full-page composition filling the entire canvas top to bottom, A4 page proportions`
- *ImageName:* `happy_apple_banana`

**Step 2: Save the image and remove placeholder marker**
Save the generated PNG file as `public/content/food/happy-apple-banana/image.png`.
Delete the marker file `public/content/food/happy-apple-banana/.is_placeholder` if it exists.

**Step 3: Verification**
Verify that the file size of `public/content/food/happy-apple-banana/image.png` is greater than 10,000 bytes and that `.is_placeholder` is removed.

---

### Task 2: Ingest `simple-cherry-cupcake` (Easy)

**Files:**
- Create/Overwrite: `public/content/food/simple-cherry-cupcake/image.png`
- Delete: `public/content/food/simple-cherry-cupcake/.is_placeholder`

**Step 1: Generate the line-art drawing**
Run the AI image generator:
- *Prompt:* `Black and white coloring page for toddlers and young kids, extremely simple cartoon Simple Cupcake with Cherry, very thick bold outer outlines, large empty coloring spaces, simple sparse cartoon background elements, clean white background, zero shading, zero fine details, zero textures, no text, no labels, no watermarks, no title, no words, no letters, portrait orientation, tall vertical format, full-page composition filling the entire canvas top to bottom, A4 page proportions`
- *ImageName:* `simple_cherry_cupcake`

**Step 2: Save the image and remove placeholder marker**
Save the generated PNG file as `public/content/food/simple-cherry-cupcake/image.png`.
Delete the marker file `public/content/food/simple-cherry-cupcake/.is_placeholder` if it exists.

**Step 3: Verification**
Verify that the file size of `public/content/food/simple-cherry-cupcake/image.png` is greater than 10,000 bytes and that `.is_placeholder` is removed.

---

### Task 3: Ingest `simple-soft-serve-cone` (Easy)

**Files:**
- Create/Overwrite: `public/content/food/simple-soft-serve-cone/image.png`
- Delete: `public/content/food/simple-soft-serve-cone/.is_placeholder`

**Step 1: Generate the line-art drawing**
Run the AI image generator:
- *Prompt:* `Black and white coloring page for toddlers and young kids, extremely simple cartoon Simple Soft Serve Ice Cream Cone, very thick bold outer outlines, large empty coloring spaces, simple sparse cartoon background elements, clean white background, zero shading, zero fine details, zero textures, no text, no labels, no watermarks, no title, no words, no letters, portrait orientation, tall vertical format, full-page composition filling the entire canvas top to bottom, A4 page proportions`
- *ImageName:* `simple_soft_serve_cone`

**Step 2: Save the image and remove placeholder marker**
Save the generated PNG file as `public/content/food/simple-soft-serve-cone/image.png`.
Delete the marker file `public/content/food/simple-soft-serve-cone/.is_placeholder` if it exists.

**Step 3: Verification**
Verify that the file size of `public/content/food/simple-soft-serve-cone/image.png` is greater than 10,000 bytes and that `.is_placeholder` is removed.

---

### Task 4: Ingest `smiling-pizza-slice` (Easy)

**Files:**
- Create/Overwrite: `public/content/food/smiling-pizza-slice/image.png`
- Delete: `public/content/food/smiling-pizza-slice/.is_placeholder`

**Step 1: Generate the line-art drawing**
Run the AI image generator:
- *Prompt:* `Black and white coloring page for toddlers and young kids, extremely simple cartoon Smiling Pizza Slice Cartoon, very thick bold outer outlines, large empty coloring spaces, simple sparse cartoon background elements, clean white background, zero shading, zero fine details, zero textures, no text, no labels, no watermarks, no title, no words, no letters, portrait orientation, tall vertical format, full-page composition filling the entire canvas top to bottom, A4 page proportions`
- *ImageName:* `smiling_pizza_slice`

**Step 2: Save the image and remove placeholder marker**
Save the generated PNG file as `public/content/food/smiling-pizza-slice/image.png`.
Delete the marker file `public/content/food/smiling-pizza-slice/.is_placeholder` if it exists.

**Step 3: Verification**
Verify that the file size of `public/content/food/smiling-pizza-slice/image.png` is greater than 10,000 bytes and that `.is_placeholder` is removed.

---

### Task 5: Ingest `double-cheeseburger-platter` (Medium)

**Files:**
- Create/Overwrite: `public/content/food/double-cheeseburger-platter/image.png`
- Delete: `public/content/food/double-cheeseburger-platter/.is_placeholder`

**Step 1: Generate the line-art drawing**
Run the AI image generator matching the Medium prompt guidelines:
- *Prompt:* `Black and white coloring page for kids and teens, clean line art of Double Cheeseburger Platter with Fries, standard line weight, moderate details and natural textures, clean white background, simple scenic background, zero shading, zero grayscale gradients, no text, no labels, no watermarks, no title, no words, no letters, portrait orientation, tall vertical format, full-page composition filling the entire canvas top to bottom, A4 page proportions`
- *ImageName:* `double_cheeseburger_platter`

**Step 2: Save the image and remove placeholder marker**
Save the generated PNG file as `public/content/food/double-cheeseburger-platter/image.png`.
Delete the marker file `public/content/food/double-cheeseburger-platter/.is_placeholder` if it exists.

**Step 3: Verification**
Verify that the file size of `public/content/food/double-cheeseburger-platter/image.png` is greater than 10,000 bytes and that `.is_placeholder` is removed.

---

### Task 6: Ingest `giant-sundae-bowl` (Medium)

**Files:**
- Create/Overwrite: `public/content/food/giant-sundae-bowl/image.png`
- Delete: `public/content/food/giant-sundae-bowl/.is_placeholder`

**Step 1: Generate the line-art drawing**
Run the AI image generator matching the Medium prompt guidelines:
- *Prompt:* `Black and white coloring page for kids and teens, clean line art of Giant Sundae Bowl with Wafers, standard line weight, moderate details and natural textures, clean white background, simple scenic background, zero shading, zero grayscale gradients, no text, no labels, no watermarks, no title, no words, no letters, portrait orientation, tall vertical format, full-page composition filling the entire canvas top to bottom, A4 page proportions`
- *ImageName:* `giant_sundae_bowl`

**Step 2: Save the image and remove placeholder marker**
Save the generated PNG file as `public/content/food/giant-sundae-bowl/image.png`.
Delete the marker file `public/content/food/giant-sundae-bowl/.is_placeholder` if it exists.

**Step 3: Verification**
Verify that the file size of `public/content/food/giant-sundae-bowl/image.png` is greater than 10,000 bytes and that `.is_placeholder` is removed.

---

### Task 7: Database Sync & Next.js Build Compile

**Files:**
- Run database update: `node scripts/sync.js`
- Compile code: `npm run build`

**Step 1: Execute Database Sync**
Run `node scripts/sync.js` to ingest the new pages and difficulties into SQLite `dev.db`.
Expected output: `"=== Ingestion & Sync Completed Successfully ==="`

**Step 2: Execute Next.js Compile**
Run `npm run build` to make sure all static pages compile cleanly with zero errors.
Expected output: Successful Turbopack production compile.
