# App.svelte Refactor Plan

Split the monolithic `src/App.svelte` (~1260 lines) into focused components, sections, pages, and a utility module. Also reorganise the existing `AboutUs.svelte` to match the same pattern.

---

## Target Structure

```
src/
├── components/
│   ├── Nav.svelte
│   └── Footer.svelte
├── sections/
│   ├── Landing.svelte
│   ├── Mission.svelte
│   ├── Product.svelte
│   ├── Roadmap.svelte
│   └── about/
│       ├── AboutHero.svelte
│       ├── AboutSplit.svelte
│       ├── AboutPillars.svelte
│       ├── AboutCTA.svelte
│       └── FounderQuote.svelte
├── pages/
│   ├── Home.svelte
│   └── AboutUs.svelte
├── lib/
│   └── vanta.js
├── styles/
│   └── shared.css          ← shared utility classes (box-unit, hex-btn, eyebrow, yellow…)
├── App.svelte               ← gutted to ~30 lines
├── main.js
├── index.css
└── images/
```

---

## Steps

### ✅ 1. Create `src/lib/vanta.js`
Extract `initVanta()` from `App.svelte` (lines 32–73) into a standalone async function.

- Export `initVanta(el)` — accepts the DOM element, returns the vantaEffect instance.
- Remove the `vantaEl` binding dependency — caller passes the element in.
- Keep all the camera/mesh tweaks inside this function.

---

### ✅ 2. Move section base styles into `src/index.css`
**Do this before extracting any section component — skipping this step will break all section layouts.**

`section`, `section.black`, `section.blue`, and the `section.landing` media query are in App.svelte's **scoped** `<style>` block. Svelte scopes styles to the component that defines them, so once `<section class="black">` moves to `Landing.svelte` (etc.) it will no longer match App.svelte's scoped rule — sections lose their backgrounds, heights, and flex layout.

Move these rules verbatim into `src/index.css` (already loaded globally via `main.js`):

```css
section {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

section.black {
  background: #030d22;
  color: #fff;
  display: flex;
  flex-direction: column;
}

section.blue {
  background: #001f7f;
  color: #fff;
  width: 100%;
  height: 50vh;
  border-radius: 24px 24px 0 0;
}

@media (max-width: 768px) {
  section.landing {
    height: auto;
    min-height: 100vh;
    overflow: visible;
  }
}
```

Remove these rules from App.svelte's `<style>` block after adding them to `index.css`.

---

### ✅ 3. Create `src/styles/shared.css`
Pull duplicate CSS out of both `App.svelte` and `AboutUs.svelte` into one file imported wherever needed.

**Classes to move here:**

| Class | Currently in |
|---|---|
| `.box-unit`, `.gif-box`, `.text-box`, `.box-title`, `.box-desc` | `App.svelte` (Roadmap) **and** `AboutUs.svelte` (Pillars) — identical definitions |
| `.yellow` | `App.svelte`, `AboutUs.svelte` |
| `.eyebrow` | `App.svelte`, `AboutUs.svelte` (slightly different — reconcile to one definition) |
| `.hex-btn`, `.hex-ghost-wrap`, `.hex-ghost-btn`, `.hex-btn--sm`, `.hex-btn--social` | `App.svelte` only, but used across Nav, Landing, Mission, Product, Roadmap |
| `.badge`, `.coming-soon` | `App.svelte` Product section |

Import this file in each component that needs it:
```svelte
<style>
  @import '../styles/shared.css';
  /* component-specific rules below */
</style>
```

---

### ✅ 4. Create `src/components/Nav.svelte`
Extract the nav markup and styles from `App.svelte`.

**Props:**
- `currentPage` (string) — drives `.active` class on nav buttons

**Events (createEventDispatcher):**
- `navigate` — dispatched with `{ detail: page }` when any nav button is clicked

**Move in:**
- `<nav>` block (App.svelte lines 96–114)
- Mobile overlay + mobile menu (lines 116–124)
- `menuOpen` state, `toggleMenu`, `closeMenu` functions
- All nav / hamburger / mobile-menu CSS (~200 lines)
- Logo image import

**Note:** `productsOpen` / `toggleProducts` belongs in `Product.svelte`, not here — remove from Nav.

---

### ✅ 5. Create `src/components/Footer.svelte`
Extract the footer markup and styles from `App.svelte`.

**Move in:**
- `<section class="blue site-footer">` block (App.svelte lines 235–274)
- All `.site-footer`, `.footer-*` CSS (~130 lines)
- Logo image import

**Props:**
- `onNavigate` (function, optional) — for footer quick-link navigation if wired up later

---

### ✅ 6. Create `src/sections/Landing.svelte`
Extract the hero / globe section from `App.svelte`.

**Move in:**
- `<section class="black landing">` block (lines 131–144)
- `.globesec`, `.landing-inner`, `.vanta-globe`, `.landing`, `.content`, `.h1-line` CSS and their media queries
- Import `initVanta` from `../../lib/vanta.js`
- Own `onMount` / `onDestroy` for the vanta effect

**Vanta destroy handoff:** export a `destroyVanta()` function so `App.svelte` can call it before navigating away:
```svelte
export function destroyVanta() {
  if (vantaEffect) { vantaEffect.destroy(); vantaEffect = null; }
}
```
`App.svelte` grabs this via `bind:this={landingRef}` and calls `landingRef.destroyVanta()` inside `navigate()`.

---

### ✅ 7. Create `src/sections/Mission.svelte`
Extract the mission section from `App.svelte`.

**Move in:**
- `<section class="blue mission">` block (lines 147–155)
- `.mission`, `.mission-content` CSS
- Uses `.eyebrow`, `.yellow`, `.hex-btn` from `shared.css`

---

### 8. Create `src/sections/Product.svelte`
Extract the product spotlight section from `App.svelte`.

**Move in:**
- `<section class="black product">` block (lines 158–191)
- `productsOpen` state + `toggleProducts` (local to this component)
- `.product`, `.product-inner`, `.product-text`, `.product-h1`, `.product-desc`, `.product-stats`, `.stat*`, `.product-phone`, `.products-dropdown`, `.dropdown-arrow`, `.products-list` CSS
- Uses `.eyebrow`, `.hex-btn`, `.hex-btn--sm`, `.coming-soon`, `.badge` from `shared.css`
- Import: `thundrPhone`

---

### 9. Create `src/sections/Roadmap.svelte`
Extract the roadmap section from `App.svelte`.

**Move in:**
- `<section class="black roadmap">` block (lines 193–231)
- All `.roadmap*` CSS (~120 lines)
- Uses `.box-unit`, `.gif-box`, `.text-box`, `.box-title`, `.box-desc`, `.hex-btn` from `shared.css`
- Import: `gifVR`, `gifLove`, `gifAnim`, `goldCircle`

---

### 10. Split `src/AboutUs.svelte` into `src/sections/about/` sub-components

`AboutUs.svelte` has 5 distinct sections. Create one file per section:

#### `AboutHero.svelte`
- `<section class="hero-outer">` (lines 7–12)
- `.hero-outer`, `.hero-card`, `.eyebrow`, `h1` CSS

#### `AboutSplit.svelte`
- `<section class="about-split">` (lines 15–23)
- `.about-split`, `.about-img`, `.about-text`, `.eyebrow-yellow` CSS + mobile media query
- Import: `aboutMockup`
- Uses `.yellow` from `shared.css`

#### `AboutPillars.svelte`
- `<section class="pillars">` (lines 26–66)
- `.pillars` CSS + mobile media query
- Uses `.box-unit`, `.gif-box`, `.text-box`, `.box-title`, `.box-desc` from `shared.css`
- Inline SVG icons stay here (no external deps)

#### `AboutCTA.svelte`
- `<section class="cta-outer">` (lines 69–74)
- `.cta-outer`, `.cta-heading`, `.cta-yellow`, `.cta-btn-wrap`, `.cta-btn` CSS + mobile media query
- The `<a href="mailto:support@thundr.com">` mailto link stays as-is — no prop needed

#### `FounderQuote.svelte`
- `<section class="quote-outer">` (lines 77–83)
- `.quote-outer`, `.quote-card`, `.quote-label`, `.quote-text`, `.quote-attr` CSS + mobile media query

---

### 11. Create `src/pages/AboutUs.svelte`
Replace the current `src/AboutUs.svelte` with a page composer.

**Fix the `onNavigate` / `on:navigate` mismatch:**
- Current `AboutUs.svelte` uses `export let onNavigate = (page) => {}` (prop callback)
- Current `App.svelte` uses `<AboutUs on:navigate={...}>` (Svelte event) — these don't match; navigation from About back to other pages is currently broken
- Resolution: standardise on Svelte `createEventDispatcher`. `AboutUs.svelte` dispatches `navigate`, `App.svelte` listens with `on:navigate`

```svelte
<script>
  import { createEventDispatcher } from 'svelte';
  import AboutHero from '../sections/about/AboutHero.svelte';
  import AboutSplit from '../sections/about/AboutSplit.svelte';
  import AboutPillars from '../sections/about/AboutPillars.svelte';
  import AboutCTA from '../sections/about/AboutCTA.svelte';
  import FounderQuote from '../sections/about/FounderQuote.svelte';

  const dispatch = createEventDispatcher();
</script>

<AboutHero />
<AboutSplit />
<AboutPillars />
<AboutCTA />
<FounderQuote />
```

Delete the old `src/AboutUs.svelte`.

---

### 12. Create `src/pages/Home.svelte`
Compose the home sections.

```svelte
<script>
  import Landing from '../sections/Landing.svelte';
  import Mission from '../sections/Mission.svelte';
  import Product from '../sections/Product.svelte';
  import Roadmap from '../sections/Roadmap.svelte';

  export let landingRef;   // passed through so App.svelte can call destroyVanta()
</script>

<Landing bind:this={landingRef} />
<Mission />
<Product />
<Roadmap />
```

---

### 13. Gut `src/App.svelte`
Replace the entire file with a slim router shell (~35 lines).

**Keep:**
- `currentPage` state
- `navigate(page)` function — calls `landingRef?.destroyVanta()` before leaving home, resets scroll, re-inits vanta on return
- `<Nav {currentPage} on:navigate={(e) => navigate(e.detail)} />` always rendered
- `<Footer />` always rendered (outside the `{#if}` block so it shows on all pages)
- Conditional render:
  ```svelte
  {#if currentPage === 'home'}
    <Home bind:landingRef />
  {:else if currentPage === 'about'}
    <AboutUs on:navigate={(e) => navigate(e.detail)} />
  {/if}
  ```
- Only global styles: `:global(html, body)`, `:global(*, *::before, *::after)`, `section.black`, `section.blue`

**Remove:** everything else.

---

## Shared Styles Summary

| Class(es) | Move to `shared.css` | Reason |
|---|---|---|
| `.box-unit`, `.gif-box`, `.text-box`, `.box-title`, `.box-desc` | Yes | Identical in Roadmap + AboutPillars |
| `.yellow` | Yes | Used in 5+ components |
| `.eyebrow` | Yes (reconcile the two slightly-different versions) | Used in Mission, Product, AboutHero |
| `.hex-btn` variants | Yes | Used across Nav, Landing, Mission, Product, Roadmap, Footer |
| `.badge`, `.coming-soon` | Yes | Product + potential reuse |

---

## Notes for the Agent

- Do **not** use `cd` — use absolute paths for all file operations.
- Run `mkdir -p` for `src/sections/about/`, `src/pages/`, `src/lib/`, `src/styles/` before writing files.
- Create files in order: `index.css` additions → `shared.css` → `lib/` → `components/` → `sections/` → `pages/` → `App.svelte`. Step 2 (index.css) must happen before any section is extracted.
- After every file creation, spot-check that all `import` paths are correct relative to the new file location.
- The `gif-images` class is only in Roadmap (not AboutUs) — keep it scoped in `Roadmap.svelte`, not in `shared.css`.
- `AboutUs` currently uses `export let onNavigate` which is **never called** — the page has no working back-navigation. Step 10 fixes this with `createEventDispatcher`.
- Run `npm run dev` after step 12 and confirm: home page renders with globe, About Us page renders all 5 sections, navigation between pages works, no console errors.
