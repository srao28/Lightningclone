# lightning.inc/products — Full Page Reconstruction Reference

Live URL: https://lightning.inc/products  
Screenshots: `products-page-top.png`, `products-page-bottom.png`

---

## Reusability Notes (from src audit)

### Directly reusable components
| Component | File | Usage |
|-----------|------|-------|
| `<Nav>` | `src/components/Nav.svelte` | Pass `currentPage="products"` for active highlight |
| `<Footer>` | `src/components/Footer.svelte` | Static, no props needed |
| `<HexButton variant="solid">` | `src/components/HexButton.svelte` | Use for "Visit Thundr" CTA |
| `<AboutCTA>` | `src/sections/about/AboutCTA.svelte` | "Want to collaborate?" band — matches live site exactly |

### Shared CSS classes (src/styles/shared.css)
| Class | Purpose |
|-------|---------|
| `.eyebrow` | Yellow uppercase label above headings |
| `.yellow` | Yellow `#facc15` text span |
| `.h1-line` | `display: block` for multi-line headlines |
| `.hex-btn` | Solid yellow hex button |
| `.hex-btn--sm` | Smaller hex variant |
| `.hex-ghost-wrap` + `.hex-ghost-btn` | Ghost hex (dark fill, yellow border) |

### Section base styles (src/index.css)
- `section.black` — `background: #030d22`, full-viewport, flex column centered
- `section.blue` — `background: #001f7f`, used for footer

---

## Global

- **Font:** `"Exo 2", sans-serif` (all elements)
- **Body/page bg:** `rgb(0, 10, 40)` = `#000A28`
- **Primary accent:** `rgb(255, 193, 0)` = `#FFC100` (yellow)
- **Text white:** `#ffffff`
- **Framework:** Chakra UI v3 + React (Webflow-hosted)

---

## 1. Navbar

Fixed top bar, full width, `background: #000A28`.

**Structure (flex row, space-between):**
```
[ Logo (img /logo.png, 79×80px) ] [ Nav links ] [ Contact Us CTA button ]
```

**Logo:** `<img src="/logo.png">` wrapped in `<a href="/">`. 79×80px rendered.

**Nav links (horizontal, `"Exo 2"`, 16px):**
| Link | URL | Active state |
|------|-----|---|
| Home | `/` | default `#fff` |
| About Us | `/about-us` | default `#fff` |
| Products | `/products` | **active: `#FFC100`** |
| Support | `/support` | default `#fff` |

**Contact Us button (top-right):**
- `href="/support"`
- `background: #FFC100`, `color: #000A28`
- Hexagon clip-path: `polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)`
- `font-size: 18px`, `font-weight: 600`, `height: 47px`, `width: 156px`

**Decorative hex arrows** (yellow SVG, `fill: var(--chakra-colors-bg-muted)`): one on each side of nav bar, `25×75px`.

---

## 2. Hero / Product Section

**Outer wrapper** (`.css-1sn5eyg`):
- `background: #000A28`
- `display: flex`, `flex-direction: row`, `align-items: flex-start`
- `padding: 0 16px`
- `width: 1280px` (full width container)

**Inner row** (`.css-1660ls6`):
- `display: flex`, `flex-direction: row`
- `padding: 120px 0`
- `max-width: 1280px`

### Left column (`.css-li7nh7`)
- `display: flex`, `flex-direction: column`, `align-items: flex-start`
- `padding-right: 80px`
- Width: ~748px

#### Eyebrow label
- Tag: `<p>`
- Text: **`Thundr`**
- `color: #FFC100`, `font-size: 20px`, `font-weight: 400`, `line-height: 30px`
- `padding-bottom: 10px`

#### Headline `<h2>`
HTML:
```html
<h2>A human search engine for real <span>connections</span>.</h2>
```
- `font-size: 64px`, `font-weight: 400`, `line-height: 70.4px` (1.1 ratio)
- `color: #ffffff` (main), **`<span>connections</span>` = `color: #FFC100`**
- `padding-bottom: 20px`
- Width: ~682px

#### Description `<p>`
Full text:
> Thundr is an app that lets you meet and talk to new people from anywhere in the world. You can think of it as a "human search engine": you pick the interests you care about, and Thundr will connect you with someone who likes those same things. It's designed for adults and can be used for making friends, finding someone special, or just having an interesting conversation.
>
> To help keep everything safe, Thundr uses artificial intelligence to moderate the platform. This AI looks out for any behavior that might be harmful or inappropriate, so you can feel more comfortable meeting new people. The goal is to offer a welcoming environment where you can talk freely without worrying about who's on the other side.
>
> Thundr is simple to use, no matter how tech-savvy you are. All you need to do is log in, pick some interests, and let Thundr find your chat partner. Whether you're there to make friends, search for a specific kind of person, or simply talk about the things you love, Thundr makes it easy to connect.

Style: `font-size: 18px`, `font-weight: 400`, `line-height: 31.5px`, `color: #fff`, `padding-bottom: 20px`, `margin-bottom: 17px`, width ~668px

#### Stats row (`.css-hboir5`)
- `display: flex`, `flex-direction: row`
- Width: ~668px, `height: 108.5px`

**Each stat column** (`.css-19q1r93`):
- `display: flex`, `flex-direction: column`
- `padding: 15px 0`
- `border-right: 1px solid #FFC100` (yellow right border = divider between stats)

Each column contains:
1. `<h2>` with stat number — `font-size: 69px`, `font-weight: 400`, `line-height: 30px`, `color: #fff`
2. `<p>` with label — `font-size: 19px`, `font-weight: 400`, `line-height: 28.5px`, `color: #fff`

| Stat | Label |
|------|-------|
| `8 M+` | Monthly Visits |
| `81 k+` | Daily Visits |

**Stat number row inner** (`.css-70qvj9`): `display: flex`, `flex-direction: row`, `align-items: center`, `height: 50px`

#### Visit Thundr button
Wrapper: `margin-top: 40px`, `max-width: 160px`

Button `<a>`:
- Text: **`Visit Thundr`**
- `href="https://thundr.com/"`
- `background: #FFC100`, `color: #000A28`
- Hexagon clip-path: `polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)`
- `font-size: 18px`, `font-weight: 600`, `height: 47px`, `width: 156px`
- `display: flex`, `align-items: center`, `justify-content: center`, `gap: 6px`

### Right column — Phone image
- `<img src="/thundr-phone.png" alt="">`
- Rendered: `315×650px`
- `max-width: 100%`, `display: block`

---

## 3. CTA Band

**Wrapper** (`.css-q7chl`):
- `background: #000A28`
- `display: flex`, `flex-direction: column`, `align-items: center`, `justify-content: center`
- Full width

**Heading text** `<p>` or `<h2>` (`.css-17racqw`):
- Text: **`Want to collaborate? Let's talk.`**
- `font-size: 64px`, `font-weight: 400`, `color: #fff`

**Contact Us button** (same hex style as nav):
- `href="mailto:support@thundr.com"`
- `background: #FFC100`, `color: #000A28`
- `clip-path: polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)`
- `font-size: 18px`, `font-weight: 600`, `height: 47px`, `width: 156px`

---

## 4. Footer

**Background:** `#000A28`

### Top section (3 columns, flex row)
**Column 1 — Brand:**
- Logo: `<img src="/logo.png">` linked to `/`
- Tagline `<p>`: "Driving innovation in social and entertainment technology to create meaningful digital experiences"
  - `font-size: 16px`, `color: #fff`, `width: 444px`

**Column 2 — Quick Links:**
Heading `<p>`: `Quick Links` — yellow `#FFC100`
Links: Home `/`, About Us `/about-us`, Products `/products`, Support `/support`

**Column 3 — Legal:**
Heading `<p>`: `Legal` — yellow `#FFC100`
Links: Privacy Policy `/privacy`, Terms of Service `/TOS`

### Bottom bar (flex row, space-between)
- Left: `© Lightningware 2025` — `font-size: 16px`, `color: #fff`
- Right: Social icon links (hex-shaped, `50×36px`, `background: #FFC100`, `color: #000A28`, `clip-path: polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)`)

**Social icons (in order):**
| Platform | URL |
|----------|-----|
| Instagram | https://www.instagram.com/officialthundr/ |
| TikTok | https://www.tiktok.com/@thundr.com |
| X (Twitter) | https://x.com/usethundr |
| Discord | https://discord.com/invite/JZQ9Bc7Y4j |
| Reddit | https://www.reddit.com/r/thundr/ |

---

## Color Palette

| Role | Value |
|------|-------|
| Page background | `#000A28` = `rgb(0, 10, 40)` |
| Yellow accent | `#FFC100` = `rgb(255, 193, 0)` |
| White text | `#ffffff` |
| Border/dark | `#0C1940` = `rgb(12, 25, 64)` |

---

## Assets

| File | Usage | Dimensions |
|------|-------|-----------|
| `/logo.png` | Nav + footer logo | 79×80px |
| `/thundr-phone.png` | Hero right column | 315×650px |

---

## Hex Button Clip-Path Values

- **Standard hex (nav CTA + Visit Thundr + Contact Us):** `polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)`
- **Social icons (smaller hex):** `polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)`
