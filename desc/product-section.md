# Product Section — Reconstruction Reference

## Source file
`src/sections/Product.svelte`

## Layout
- `section.black.product` → full-viewport black section, flex column, centered
- Inside: `.product-inner` → flex row, `align-items: center`, `max-width: 1100px`, `padding: 0 2rem`
- Left: `.product-text` (flex: 1) | Right: `<img class="product-phone">`

---

## Left column — `.product-text`
Flex column, `gap: 1.25rem`

### 1. Eyebrow
```html
<span class="eyebrow">Thundr</span>
```
Style (shared.css): `font-size: 0.85rem`, `font-weight: 400`, `letter-spacing: 0.15em`, `text-transform: uppercase`, `color: #facc15`

### 2. Headline `<h1 class="product-h1">`
```
A human search engine
for real connections.
```
"connections." is wrapped in `<span class="yellow">` → `color: #facc15`

Each line is `<span class="h1-line">` → `display: block`

H1 style: `font-size: clamp(2.4rem, 4vw, 4.5rem)`, `font-weight: 400`, `line-height: 1.1`, `letter-spacing: -0.02em`, `color: #fff`, `margin: 0`

### 3. Description `<p class="product-desc">`
Text: "Thundr is a revolutionary social platform that allows users to meet and talk to new people worldwide. With AI-powered moderation and a seamless user experience, Thundr makes conversations effortless, safe, and engaging."

Style: `font-size: 1rem`, `line-height: 1.75`, `color: rgba(255,255,255,0.7)`, `margin: 0`, `max-width: 52ch`

### 4. Stats `.product-stats`
Flex row, `align-items: center`, `gap: 2rem`, `margin-top: 0.5rem`

**Left stat:**
- `.stat-num`: `8 M+` — `font-size: 5rem`, `font-weight: 300`, `color: #fff`, `letter-spacing: -0.02em`
- `.stat-label`: `Monthly Visits` — `font-size: 1rem`, `letter-spacing: 0.1em`, `text-transform: uppercase`, `color: rgba(255,255,255,0.5)`

**Divider `.stat-divider`:** `width: 1px`, `height: 3rem`, `background: #facc15`

**Right stat:**
- `.stat-num`: `81 k+`
- `.stat-label`: `Daily Visits`

### 5. Products dropdown `.products-dropdown`
`position: relative`, `display: inline-flex`, `flex-direction: column`, `align-items: flex-start`

**Button:**
```html
<button class="hex-btn hex-btn--sm" on:click={toggleProducts}>
  Our Products <span class="dropdown-arrow" class:open={productsOpen}>▾</span>
</button>
```
- `.hex-btn` (shared.css): yellow hexagon clip-path button, `background: #facc15`, `color: #000`, `font-weight: 700`, `clip-path: polygon(12% 0%, 88% 0%, 100% 50%, 88% 100%, 12% 100%, 0% 50%)`
- `.hex-btn--sm`: `padding: 1.5rem 2rem`
- `.dropdown-arrow`: `margin-left: 0.4rem`, `transition: transform 0.2s ease`
- `.dropdown-arrow.open`: `transform: rotate(180deg)`

**Dropdown list (shown when `productsOpen === true`):**
```html
<ul class="products-list">
  <li>Thundr</li>
  <li class="coming-soon">Dating App <span class="badge">Soon</span></li>
  <li class="coming-soon">AI Platform <span class="badge">Soon</span></li>
</ul>
```
`.products-list`: `position: absolute`, `top: 100%`, `left: 0`, `z-index: 10`, `background: #0d1f4a`, `border: 1.5px solid #1a358c`, `border-radius: 8px`, `min-width: 180px`, `padding: 0.5rem 0`, `margin: 0.5rem 0 0`

`.products-list li`: `padding: 0.65rem 1.25rem`, `font-size: 0.95rem`, `color: #fff`, `display: flex`, `align-items: center`, `gap: 0.5rem`
- hover: `background: rgba(250,204,21,0.1)`, `color: #facc15`

`.coming-soon` (shared.css): `color: rgba(255,255,255,0.45) !important`, `cursor: default !important`, hover = no change

`.badge` (shared.css): `font-size: 0.65rem`, `font-weight: 700`, `letter-spacing: 0.08em`, `text-transform: uppercase`, `color: #facc15`, `background: rgba(250,204,21,0.15)`, `border: 1px solid rgba(250,204,21,0.4)`, `border-radius: 4px`, `padding: 0.1rem 0.35rem`

---

## Right column — phone image
```html
<img src={thundrPhone} alt="Thundr app on phone" class="product-phone" />
```
Asset: `src/images/thundr-phone.png`

Style: `height: 680px`, `width: auto`, `flex-shrink: 0`, `object-fit: contain`

---

## Section background (index.css + component)
- `section.black`: `background: #030d22`, `color: #fff`, `height: 100vh`, `width: 100vw`, `display: flex`, `flex-direction: column`, `align-items: center`, `justify-content: center`, `overflow: hidden`

---

## State (Svelte)
```js
let productsOpen = false;
function toggleProducts() { productsOpen = !productsOpen; }
```
Dropdown toggled by button click. Arrow rotates 180° when open.

---

## Responsive — mobile (max-width: 768px)
- `.product`: `height: auto`, `min-height: 100vh`, `padding: 5rem 0 3rem`
- `.product-inner`: `flex-direction: column-reverse` (phone on top, text below), `gap: 2rem`, `padding: 0 1.5rem`
- `.product-phone`: `height: auto`, `width: 80%`, `max-width: 320px`
- `.product-text`: `width: 100%`

---

## Color palette
| Token | Hex |
|---|---|
| Background | `#030d22` |
| Yellow accent | `#facc15` |
| Dropdown bg | `#0d1f4a` |
| Dropdown border | `#1a358c` |
| White text | `#fff` |
| Muted white | `rgba(255,255,255,0.7)` |
| Stat label | `rgba(255,255,255,0.5)` |
| Coming soon text | `rgba(255,255,255,0.45)` |

---

## Assets needed
- `src/images/thundr-phone.png` — phone mockup image, right side, 680px tall
