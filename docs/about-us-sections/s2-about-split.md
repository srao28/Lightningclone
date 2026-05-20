# S2 — About Lightningware Split Section

**Component:** `src/AboutUs.svelte` — add after hero section

## Layout
Two-column, dark navy background (`#030d22`).  
Left: image. Right: text. Stacks to single column on mobile.

## Left column
Image: `src/images/about-us-mockup.webp` (hand holding phone, dark dramatic lighting)

## Right column
| Element | Value |
|---------|-------|
| Eyebrow | `What we do` — yellow `#facc15`, small, letter-spaced |
| Heading | `About ` + `Lightningware` (Lightningware in yellow) |
| Para 1 | We're not an agency. We don't build software for clients. We create and launch our own products, shaping the future of digital interactions. |
| Para 2 | With a commitment to innovation, we develop proprietary technologies, file patents, and push the boundaries of what's possible. |

## Notes
- Use the existing `.eyebrow` and `.yellow` classes already in `App.svelte` styles (or duplicate in `AboutUs.svelte`)
- Image should be `object-fit: cover`, roughly 480–520px tall on desktop
