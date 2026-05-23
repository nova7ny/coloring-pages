# Coloring Pages Website Implementation Plan

> **For Antigravity:** REQUIRED WORKFLOW: Use `.agent/workflows/execute-plan.md` to execute this plan in single-flow mode.

**Goal:** Build a premium, SEO-optimized coloring pages website with Next.js and SQLite, enabling AI agents to file generated coloring sheets into the filesystem and tracking real-time user downloads to display trending content and categories.

**Architecture:** A Next.js App Router full-stack site utilizing a local SQLite database accessed via Prisma. Ingestion is handled via a sync script that registers filesystem assets (`image.png`, `printable.pdf`, `metadata.json`) in SQLite while retaining download history.

**Tech Stack:** Next.js 14+ (App Router), SQLite, Prisma, Vanilla CSS.

---

### Task 1: Next.js Boilerplate Scaffolding

Set up a clean Next.js App Router project configured for standard CSS in the workspace root.

**Files:**
*   Create: `c:\Users\Jose\Documents\Antigravity\Coloring Pages Website\package.json`
*   Create: `c:\Users\Jose\Documents\Antigravity\Coloring Pages Website\src\app\layout.js`
*   Create: `c:\Users\Jose\Documents\Antigravity\Coloring Pages Website\src\app\page.js`

**Step 1: Check create-next-app options**
Run `npx -y create-next-app@latest --help` first to inspect parameters, then scaffold the application.
Command: `npx -y create-next-app@latest ./ --js --src-dir --app --css --eslint --no-tailwind --no-src-dir` (or clean up manually if interactive).
Wait, we will use non-interactive defaults: `--js --eslint --no-tailwind --app --src-dir=false` (we want root app/ or src/app/ based on the scaffold). Let's see what is created. We will run it in the workspace.

**Step 2: Remove Boilerplate & Create Base CSS**
Clean out default SVG assets and write a beautiful Classic & Family-friendly styling system in `c:\Users\Jose\Documents\Antigravity\Coloring Pages Website\src\app\globals.css`.

**Step 3: Verification**
Start the dev server: `npm run dev` and verify localhost is accessible and shows a blank cream-colored page.

---

### Task 2: SQLite & Prisma Integration

Initialize the database engine and define schemas for Category, ColoringPage, and DownloadLog.

**Files:**
*   Create: `c:\Users\Jose\Documents\Antigravity\Coloring Pages Website\prisma\schema.prisma`
*   Create: `c:\Users\Jose\Documents\Antigravity\Coloring Pages Website\src\lib\db.js`

**Step 1: Initialize Prisma**
Run `npm install prisma @prisma/client` and `npx prisma init --datasource-provider sqlite`.

**Step 2: Write Schema**
Define tables inside `prisma/schema.prisma`:
```prisma
model Category {
  id          String         @id
  name        String
  description String
  iconPath    String
  pages       ColoringPage[]
}

model ColoringPage {
  id            String        @id
  categoryId    String
  category      Category      @relation(fields: [categoryId], references: [id], onDelete: Cascade)
  subcategory   String?
  title         String
  tags          String        // Store as JSON string array
  seoTitle      String
  seoDescription String
  difficulty    String
  imagePath     String
  pdfPath       String
  downloadCount Int           @default(0)
  createdAt     DateTime      @default(now())
  downloads     DownloadLog[]
}

model DownloadLog {
  id        Int          @id @default(autoincrement())
  pageId    String
  page      ColoringPage @relation(fields: [pageId], references: [id], onDelete: Cascade)
  timestamp DateTime     @default(now())
}
```

**Step 3: Generate & Run Migrations**
Run `npx prisma migrate dev --name init` to create the SQLite database file `prisma/dev.db`.

**Step 4: Create Db Client Export**
Write `src/lib/db.js` to instantiate a global PrismaClient instance.

---

### Task 3: Filesystem Scanner & Database Ingestion Script

Build the custom bridge allowing agents to drop artwork and automatically index them into SQLite.

**Files:**
*   Create: `c:\Users\Jose\Documents\Antigravity\Coloring Pages Website\scripts\sync.js`

**Step 1: Write Sync Script**
Read directories under `public/content/`:
*   Scan categories: folders like `public/content/animals/`.
*   Scan coloring pages: subfolders like `public/content/animals/playful-kitten/`.
*   Parse `metadata.json`.
*   Perform upsert:
    ```javascript
    await prisma.coloringPage.upsert({
      where: { id: meta.id },
      update: {
        title: meta.title,
        subcategory: meta.subcategory,
        tags: JSON.stringify(meta.tags),
        seoTitle: meta.seoTitle,
        seoDescription: meta.seoDescription,
        difficulty: meta.difficulty,
        imagePath: `/content/${categoryDir}/${pageDir}/image.png`,
        pdfPath: `/content/${categoryDir}/${pageDir}/printable.pdf`,
      },
      create: {
        id: meta.id,
        categoryId: categoryDir,
        title: meta.title,
        subcategory: meta.subcategory,
        tags: JSON.stringify(meta.tags),
        seoTitle: meta.seoTitle,
        seoDescription: meta.seoDescription,
        difficulty: meta.difficulty,
        imagePath: `/content/${categoryDir}/${pageDir}/image.png`,
        pdfPath: `/content/${categoryDir}/${pageDir}/printable.pdf`,
        downloadCount: 0,
      }
    });
    ```
*   Clean up orphaned records (records in DB whose filesystem directory was deleted).

**Step 2: Seed Sample Data**
Create a test structure under `public/content/animals/playful-kitten/` containing dummy files and test script execution.
Run: `node scripts/sync.js`
Expected: SQLite tables are populated correctly with the kitten category and page.

---

### Task 4: Download Tracking API

Create the high-speed endpoint that increments database logs and triggers file download.

**Files:**
*   Create: `c:\Users\Jose\Documents\Antigravity\Coloring Pages Website\src\app\api\download\route.js`

**Step 1: Write API Handler**
Handle requests to `GET /api/download?id=page-id`:
*   Check if page exists.
*   Run transaction:
    1. Increment `downloadCount` in `ColoringPage`.
    2. Insert new record in `DownloadLog`.
*   Respond with a JSON status (or perform server-side redirect to the PDF file path). Let's redirect to `/content/<category>/<page-id>/printable.pdf`.

**Step 2: Verification**
Fetch `http://localhost:3000/api/download?id=playful-kitten` and verify `DownloadLog` record is written, the page's `downloadCount` is incremented to 1, and the response redirects/downloads the PDF.

---

### Task 5: Layout, Global Styles & AdSense Wrappers

Implement the core frame of the site with dynamic layouts, cream-colored grids, and responsive ad containers.

**Files:**
*   Modify: `c:\Users\Jose\Documents\Antigravity\Coloring Pages Website\src\app\layout.js`
*   Modify: `c:\Users\Jose\Documents\Antigravity\Coloring Pages Website\src\app\globals.css`
*   Create: `c:\Users\Jose\Documents\Antigravity\Coloring Pages Website\src\components\AdContainer.js`

**Step 1: Create CSS Grid Structure**
Add a beautiful header navigation bar, a breadcrumbs tracker, ad rails, and a footer in `layout.js`.
Apply Vanilla CSS styles for a family-friendly aesthetic: warm backgrounds, rounded borders, card grids, shadow hover elevations.

**Step 2: Create AdSense Component**
Write `<AdContainer type="leaderboard | rectangle | skyscraper" />` that renders an elegant CSS box reserved with specific standard sizing (e.g. height `90px` or `250px`) to prevent cumulative layout shift, rendering standard Google AdSense `<ins>` tag placeholders.

---

### Task 6: Home Page Page Layout

Implement a gorgeous landing page showcasing categories and top downloads.

**Files:**
*   Modify: `c:\Users\Jose\Documents\Antigravity\Coloring Pages Website\src\app\page.js`

**Step 1: Build Hero Header**
Warm description explaining free printable high-resolution PDF coloring pages for parents and teachers.

**Step 2: Category Carousel/Grid**
Fetch all categories from SQLite. Render large cards with rounded borders, a pastel theme background, and customizable category icons (e.g., cute SVG representations or stylized text indicators).

**Step 3: "Top Trending" Section**
Fetch the 5 highest trending coloring sheets (based on recent 7-day logs) and showcase them in a premium, highlighted shelf.

---

### Task 7: Category Routing Page (`/category/[id]`)

Display specific collections and tags.

**Files:**
*   Create: `c:\Users\Jose\Documents\Antigravity\Coloring Pages Website\src\app\category\[id]\page.js`

**Step 1: Category Listing**
Query coloring pages matching `categoryId`. Offer tag filter pills (e.g., "Cats", "Dogs" inside Category Animals) and sorting options (Popularity, Date).

**Step 2: Inline Ads**
Render a `300x250` ad placeholder inline inside the collection grid dynamically after card number 4.

---

### Task 8: Coloring Page Detail View (`/coloring-page/[id]`)

The primary traffic landing page with images, detailed instructions, ads, and the PDF action button.

**Files:**
*   Create: `c:\Users\Jose\Documents\Antigravity\Coloring Pages Website\src\app\coloring-page\[id]\page.js`

**Step 1: Page Layout**
*   Header: Dynamic SEO Breadcrumbs.
*   Two-Column Layout:
    *   *Left Column (Content)*: Medium Leaderboard Ad -> Coloring sheet PNG Preview image -> Social Sharing -> SEO detailed description (paragraphs on coloring ideas, tools, class usage) -> AdSense Rectangle.
    *   *Right Column (Actions)*: Primary bold **"Download PDF"** button (triggers fetch to `/api/download?id=id`) -> Printer alignment instruction guide -> Difficulty level and details list -> Sidebar skyscraper ad placeholder.
*   Bottom: "You may also like" related pages grid.

**Step 2: Structured SEO Data**
Generate schema markup using standard JSON-LD injecting the coloring sheet image, title, and free pricing offers to maximize Google Images rankings.

---

### Task 9: Trending Page Route (`/trending`)

Expose a full page displaying high-trending assets.

**Files:**
*   Create: `c:\Users\Jose\Documents\Antigravity\Coloring Pages Website\src\app\trending\page.js`

**Step 1: Dynamic Querying**
Render the top 20 trending coloring pages in the past 7 days based on SQLite logs.

---

## Verification Plan

### 1. Verification of Agent Ingestion
Verify that dropping a folder under `public/content/` with `image.png`, `printable.pdf` and `metadata.json` and running `npm run build` (which hooks into `sync.js`) populates SQLite database tables dynamically without errors.

### 2. Download and Trending Counts Verification
Simulate 10 downloads on coloring page A and 5 downloads on coloring page B. Verify that the homepage "Top Trending" displays page A in position 1 and page B in position 2. Verify that `DownloadLog` populates.

### 3. SEO Compliance & Mobile Responsiveness
Use the browser to inspect generated HTML:
*   Ensure every dynamic coloring page has standard dynamic meta tags (title, description).
*   Ensure exactly one `<h1>` per page.
*   Verify ad placeholders resize correctly on mobile layouts without causing layout breaks.
