# Mobile Clarifications — About Us Page (430px)

Reference: https://lightning.inc/about-us  
Viewport for all specs below: **430px wide**.  
Component file: `src/AboutUs.svelte`

---

## S2 — About Split

### What the reference looks like at 430px
- The section is single-column.
- "What we do" eyebrow (yellow) sits above "About **Lightningware**" (Lightningware in yellow).
- Two body paragraphs follow the heading.
- The phone mockup image (`about-us-mockup.webp`) is **still visible** — it is positioned to the **right side of the section**, partially cropped/overflowing off the right edge. It is NOT hidden.

### Current bug in `AboutUs.svelte`
At `@media (max-width: 430px)` the `.about-img` is set to `display: none`. **This is wrong and must be fixed.**

### Required mobile layout for S2
- `.about-split` should be `position: relative`, `overflow: hidden` (or `overflow: visible` so image can peek out).
- `.about-img` must NOT be `display: none` at any breakpoint.
- On mobile the image should be **absolutely positioned** to the right side:
  - `position: absolute`, `right: -60px` (or similar negative offset so the phone peeks from the right)
  - `bottom: 0` — anchored to the bottom of the section
  - `height: ~320–360px`, `width: auto`
  - `object-fit: contain`
- The text block (`.about-text`) stays in normal flow, `max-width: 100%`, left-aligned.
- The section needs enough `padding-bottom` (e.g. `2rem`) so the text doesn't collide with the image bottom edge.

### Key constraint
The image overlaps/bleeds off the right edge — this is intentional and matches the reference. Do not center it or stack it below the text.

---

## S3 — Three Pillars

### What the reference looks like at 430px
- Three pillar units stack **vertically** in a single column, centered.
- Each unit is composed of two overlapping layers:
  1. **Icon box** (`.gif-box`): small rectangular card (~200×100px) with a blue border, dark background, and white SVG icon centered inside. Sits on top, overlapping the card below by ~2rem via `margin-bottom: -2rem`.
  2. **Text card** (`.text-box`): taller card (~200px) below the icon box. Contains the yellow title and muted-white description, centered.
- The icon box and text card overlap — the icon box's bottom edge sits inside the top of the text card. This overlap **must be preserved on mobile**.
- Gap between each pillar unit: ~2rem.
- All three pillars are visible — none are hidden.

### Required mobile layout for S3
- `.pillars`: `flex-direction: column`, `align-items: center`, `padding: 2rem 1.25rem 3rem`, `gap: 2rem`, `margin-top: 0` (remove the negative margin used on desktop to overlap the section above — on mobile there is nothing to overlap).
- `.box-unit`: `width: 100%`
- `.gif-box`: keep at `width: 200px`, `height: 100px`, `margin-bottom: -2rem` — the overlap with `.text-box` must stay.
- `.text-box`: `width: 100%` (full width of the column)

### Key constraint
Do not remove the `margin-bottom: -2rem` on `.gif-box` at mobile — the icon-overlapping-card visual is intentional and present on the reference at 430px.

---

## Other sections at 430px (no changes needed beyond what is already implemented)

| Section | Mobile status |
|---------|--------------|
| S1 Hero | Full-width card, stacked text, looks correct. |
| S4 Founder Quote | Yellow card, quote text scales down (font-size: 24px at ≤768px already set). |
| S5 CTA | "Want to collaborate? Let's talk." scales down (font-size: 36px at ≤768px already set). Hexagon button centered. |

---

## Summary of required code changes in `AboutUs.svelte`

1. **Remove `display: none` from `.about-img` inside `@media (max-width: 430px)`.**
2. Set `.about-split` to `position: relative` (already fine) and add `overflow: hidden` for the mobile breakpoint so the image crops cleanly at the right edge.
3. In the `@media (max-width: 430px)` block, add absolute positioning for `.about-img`:
   ```css
   .about-img {
     position: absolute;
     right: -60px;
     bottom: 0;
     height: 320px;
     width: auto;
     object-fit: contain;
   }
   ```
4. Keep `.gif-box { margin-bottom: -2rem }` intact — do not override it in the mobile breakpoint.
