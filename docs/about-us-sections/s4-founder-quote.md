# S4 — Founder Quote Section

**Component:** `src/AboutUs.svelte` — add after S3

## Visual Structure
Full-width dark navy outer section (`rgb(0, 10, 40)` ≈ `#000a28`) with `padding: 130px 20px 0`.  
Inside sits a **yellow card** — not a blockquote or border trick. The yellow card IS the background.

## Yellow Card
| Property | Value |
|----------|-------|
| Background | `rgb(255, 193, 0)` → `#ffc100` |
| Border radius | `16px` |
| Padding | `0 20px` |
| Width | ~96% of page width (max ~1085px) |
| Height | ~400px |
| Horizontal margin | auto (centered) |

## Content — all text is dark navy `rgb(0, 10, 40)`, centered, font: `Exo 2`

| Element | Tag | Font size | Weight | Style | Line height |
|---------|-----|-----------|--------|-------|-------------|
| Label | `<p>` | `20px` | `400` | normal | `30px` |
| Quote | `<p>` | `40px` | `400` | **italic** | `60px` |
| Attribution | `<p>` | `24px` | `600` | normal | `28.8px` |

## Content text
- **Label:** `A note from the founder`
- **Quote:** `"Lightningware is more than a company; it's a movement towards better digital experiences. We're here to push boundaries, reimagine social technology, and craft digital products that people love."`
- **Attribution:** `— Callan Goldeneye, Founder & CEO`

## Notes
- No white text anywhere — all text is dark navy against the yellow card
- The label has `padding: 30px 0 10px` (top breathing room inside the card)
- The quote is the dominant element — 40px italic, takes up most of the card height
- The outer section background is `#000a28` (slightly different from the main `#030d22`)
- No icons, no decorative quote marks beyond what's in the text itself
