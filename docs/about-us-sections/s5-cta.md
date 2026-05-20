# S5 — CTA Section

**Component:** `src/AboutUs.svelte` — add after S4 (before footer)

## Screenshot reference
- Background: `rgb(0, 10, 40)` → `#000a28`, same as S4 outer
- Section height: ~396px, centered content, no card wrapper (unlike S4)

## Outer section
| Property | Value |
|----------|-------|
| Background | `#000a28` |
| Padding | `120px 0` (top and bottom) |
| Display | `flex`, `flex-direction: column`, `align-items: center` |

## Heading — `<p>` or `<h2>`
| Property | Value |
|----------|-------|
| Text | `Want to collaborate? Let's talk.` |
| Font size | `64px` |
| Font weight | `400` (light) |
| Color | `#fff` (white) — except "collaborate" |
| Letter spacing | `-3.2px` |
| Margin bottom | `35px` |
| Text align | `center` |
| `collaborate` span | color `rgb(255, 193, 0)` → `#ffc100` (same yellow as quote card) |

## Button — hex-clipped `<a>` tag
| Property | Value |
|----------|-------|
| Text | `Contact Us` |
| Href | `mailto:support@thundr.com` |
| Font size | `18px` |
| Font weight | `600` |
| Text color | `#000a28` (dark navy) |
| Background | `#ffc100` |
| clip-path | `polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)` |
| Width | `160px` |
| Height | `51px` |
| Display | `flex`, `align-items: center`, `justify-content: center` |

## Notes
- The button uses the **same hex clip-path** as the existing `.hex-btn` in `App.svelte` — reuse that class
- The outer wrapper div holding the button is also hex-clipped with the same clip-path and yellow bg (acts as a 2px border effect — same as `.hex-ghost-wrap` pattern in `App.svelte`)
- No decorative elements — just heading + button, centered on the dark background
- Sits directly below the S4 yellow card with the same `#000a28` background, so they visually merge
