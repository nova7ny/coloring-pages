# Design Document: Contact Form Button Styling & Hover Specificity Fix

**Date**: 2026-05-24  
**Status**: APPROVED  
**Author**: Antigravity

---

## 1. Goal & Context
The user requested that the newly added Contact page form ("Request a Coloring Page") should have a submit request button that is styled exactly like the one used for the copyright takedown request. 

During our research, we discovered a CSS bug where inline style overrides for the button background-color and box-shadow in `ContactForm.js` bypass stylesheet hover specificity rules. This prevents hover transitions (color change/shadow expansion) from playing when a user hovers over the buttons.

To achieve visual consistency and fix this micro-animation issue, we will refactor the buttons to a semantic CSS-first architecture.

---

## 2. Proposed Design

### A. Global CSS Definition (`src/app/globals.css`)
We will update `.form-submit-btn` and its hover state to use the premium peach brand colors (`var(--peach-text)` and its darker hover counterpart `#B25A2C`).

```css
.form-submit-btn {
  background-color: var(--peach-text);
  color: #FFFFFF;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 16px;
  padding: 14px 28px;
  border-radius: var(--border-radius-md);
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(201, 110, 62, 0.25);
  transition: background-color 0.2s, transform 0.1s, box-shadow 0.2s;
  align-self: flex-start;
}

.form-submit-btn:hover {
  background-color: #B25A2C;
  box-shadow: 0 6px 16px rgba(201, 110, 62, 0.35);
}
```

### B. Simplified Form Components (`src/components/ContactForm.js`)
We will remove the inline styling overrides from both the **Image Request** and **Takedown Request** form submit buttons so they defer fully to the `.form-submit-btn` class.

```jsx
// Image Request Form Button
<button type="submit" className="form-submit-btn">
  Submit Request
</button>

// Takedown Request Form Button
<button type="submit" className="form-submit-btn">
  Submit Request
</button>
```

---

## 3. Success & Verification Criteria
1. **Compilation**: The Next.js dev and production build should compile successfully with 0 errors.
2. **Visual Consistency**: Both buttons on the contact page are visually identical (using the same brand peach color).
3. **Hover Animation**: Hovering over either submit button correctly triggers a smooth transition to the dark peach hover state and expands the shadow, as specified in the micro-animations design standard.
