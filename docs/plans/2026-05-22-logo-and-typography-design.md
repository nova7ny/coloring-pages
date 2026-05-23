# Design Document - Coloring Palace Logo & Typography Integration

**Date**: 2026-05-22  
**Status**: Approved  
**Topic**: Playful "Coloring Palace" Branding & Typography Upgrade

---

## 🎯 Goal
Create a beautiful, playful, and premium horizontal header branding system for **Coloring Palace** that represents the magic of coloring book pages. The system will pair a custom hand-drawn watercolor/pencil transition icon with clean, search-engine crawlable rounded typography.

---

## 🎨 Design Specification

### 1. The Icon (Watercolor Sketch Castle)
* **Visual Style**: A whimsical fantasy castle on a soft green hill.
* **Transition Effect**: 
  * The left side is a clean black-and-white pencil-sketch vector outline.
  * The right side transitions into a vibrant, hand-painted pastel watercolor wash (soft pink, light lavender, gold, and mint green) with organic, delicate watercolor splatters.
* **File Location**: `public/logo.png`
* **Favicon**: The same image will be exported/converted to `public/favicon.ico` for browser tab branding.

### 2. Typography (Google Font Pair)
* **Font**: **`Fredoka`** (Google Fonts). It is a highly readable, friendly, rounded display typeface.
* **Branding Text**: `"Coloring Palace"`
* **Color Split**:
  * `"Coloring"` will be rendered in a deep, highly-readable charcoal gray (`#2c3e50` / `#2d3748`).
  * `"Palace"` will be rendered in a soft, bright pastel rose/lavender accent color (`#ec4899` / `#d946ef`) to mimic the coloring-in transition of the icon.

### 3. Structural Integration (Header & CSS)
* **HTML Element**:
  ```html
  <Link href="/" class="logo-link">
    <img src="/logo.png" alt="Coloring Palace Logo" class="header-logo" />
    <span class="logo-title">Coloring <span class="logo-accent">Palace</span></span>
  </Link>
  ```
* **Styles**:
  * **Header Logo**: Sized at `42px` height with a subtle shadow and hover hover micro-interaction (scale `1.05` with smooth transition).
  * **Flexbox Row**: Perfectly centered vertical alignment with `12px` spacing between the icon and typography.

---

## 🚀 Verification plan
* **Asset Check**: Ensure `public/logo.png` is generated at high resolution (`1024x1024` downscaled) with clean outlines and beautiful pastel watercoloring.
* **Lighthouse / SEO Check**: Confirm the text "Coloring Palace" remains crawlable HTML text inside the header (not flattened inside an image).
* **Responsiveness**: Verify the new logo fits cleanly in mobile navigation headers without overflowing or causing layout shifts.
