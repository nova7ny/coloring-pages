# Coloring Palace Logo & Typography Integration Implementation Plan

> **For Antigravity:** REQUIRED WORKFLOW: Use `.agent/workflows/execute-plan.md` to execute this plan in single-flow mode.

**Goal:** Implement a premium, playful branding header for the website using a custom hand-drawn watercolor/pencil transition castle logo icon paired with crisp, crawlable "Fredoka" Google Font typography.

**Architecture:** We will call the AI image engine to generate a high-resolution whimsical sketch-to-watercolor castle icon, save it to `public/logo.png`, and update the global Next.js `layout.js` and `globals.css` to integrate the icon next to responsive, styled header text. Finally, we will commit, push, and trigger our VPS deployment script to go live instantly.

**Tech Stack:** Next.js (App Router, `next/font/google`), Vanilla CSS, Git, PM2, Nginx.

---

### Task 1: Generate and Deploy Logo Asset

**Files:**
- Create: `public/logo.png`
- Create: `public/favicon.ico`

**Step 1: Generate the Whimsical Castle Logo**
Call the `generate_image` tool using a detailed prompt matching the watercolor sketch theme from the design document.
*   **Prompt**: `Whimsical watercolor and pencil drawing of a cute fantasy castle on a soft green hill. The left side is a clean black and white pencil sketch showing outlines, transitioning on the right side into a vibrant hand-painted pastel watercolor wash (soft pink, light lavender, gold, and mint green) with organic, delicate watercolor splatters, clean white background, 1:1 aspect ratio, high resolution`
*   **ImageName**: `coloring_palace_logo`

**Step 2: Copy image to target assets**
Run a copy command to deploy the generated logo to the Next.js static asset folder and set it as the favicon.
Run:
```powershell
Copy-Item "C:\Users\Jose\.gemini\antigravity\brain\bd354212-ab57-44d7-a580-133d3580b740\<generated_image_file>.png" -Destination "c:\Users\Jose\Documents\Antigravity\Coloring Pages Website\public\logo.png" -Force
Copy-Item "c:\Users\Jose\Documents\Antigravity\Coloring Pages Website\public\logo.png" -Destination "c:\Users\Jose\Documents\Antigravity\Coloring Pages Website\public\favicon.ico" -Force
```

---

### Task 2: Implement Google Fonts & Header Integration

**Files:**
- Modify: `src/app/layout.js`
- Modify: `src/app/globals.css`

**Step 1: Update globals.css with Logo styling**
Add styling for the header branding flex container, logo dimensions, hover animations, and font settings.
Open: `src/app/globals.css`
Append the following classes at the end of the file:
```css
/* Coloring Palace Logo & Branding */
.logo-link {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  transition: transform 0.2s ease;
}

.logo-link:hover {
  transform: scale(1.03);
}

.header-logo {
  height: 42px;
  width: 42px;
  object-fit: contain;
  border-radius: 8px;
}

.logo-title {
  font-family: var(--font-fredoka), system-ui, -apple-system, sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #2d3748; /* Deep charcoal */
  letter-spacing: -0.5px;
}

.logo-accent {
  color: #ec4899; /* Vibrant rose pastel */
}
```

**Step 2: Update layout.js with Fredoka Font and the Logo HTML**
Modify `layout.js` to load the Google Font `Fredoka`, set it as a CSS custom variable, and render the custom logo element in the header.
We will edit: `src/app/layout.js` to:
- Import `Fredoka` from `'next/font/google'`.
- Instantiate it with `subsets: ['latin']`, `variable: '--font-fredoka'`.
- Add `fredoka.variable` to the `body` class name.
- Modify the header structure:
  ```html
  <header class="header">
    <div class="header-content container">
      <a href="/" class="logo-link">
        <img src="/logo.png" alt="Coloring Palace Logo" class="header-logo" />
        <span class="logo-title">Coloring <span class="logo-accent">Palace</span></span>
      </a>
      <!-- ... Rest of existing navbar ... -->
    </div>
  </header>
  ```

---

### Task 3: Local Verification & GitHub Commit

**Files:**
- Modify: `docs/plans/task.md` (Update task table tracker)

**Step 1: Compile the Next.js project locally**
Verify that the `Fredoka` font imports and JSX modifications compile cleanly.
Run:
```powershell
$env:Path = "C:\Users\Jose\AppData\Local\Programs\nodejs\node-v20.18.3-win-x64;" + $env:Path; npm run build
```
Expected: Compile succeeds with zero errors.

**Step 2: Commit and push changes to GitHub**
Run:
```powershell
$env:Path = "C:\Users\Jose\AppData\Local\GitHubDesktop\app-3.5.10\resources\app\git\cmd;" + $env:Path
git add .
git commit -m "feat: integrate premium Fredoka typography and custom watercolor castle logo"
git push origin main
```

---

### Task 4: VPS Deploy & Live Validation

**Step 1: Pull and Deploy on VPS**
Log in to your VPS terminal (browser console or local ssh) and run:
```bash
cd coloring-pages
git pull
bash deploy.sh
```
Expected: The deploy script automatically recompiles the site, restarts Nginx and PM2, and brings the branding upgrade live.

**Step 2: Live Verification**
Visit `http://2.24.121.71` and verify the new whimsical watercolor logo is fully active, with beautiful crawlable Fredoka typography, and is working perfectly on all screen sizes!
