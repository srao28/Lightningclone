## Lightningclone

Lightningclone is a Svelte + Vite web app organized into page and section components.
It includes a home page with a Vanta globe hero, product spotlight, roadmap section, and a split About Us page made from reusable sub-components.

## Quick start

1. Install dependencies
   ```bash
   npm install
   ```
2. Start the development server
   ```bash
   npm run dev
   ```
3. Build for production
   ```bash
   npm run build
   ```

## Project structure

- `src/App.svelte` — slim app shell and page router
- `src/pages/` — `Home.svelte` and `AboutUs.svelte`
- `src/sections/` — page sections like `Landing`, `Mission`, `Product`, `Roadmap`, plus `about/` sub-sections
- `src/components/` — shared UI pieces like navigation and footer
- `src/lib/vanta.js` — Vanta globe initialization helper
- `src/styles/shared.css` — shared utility classes and button styles
- `docs/` — project docs and About Us design notes
- `screenshots/` — design assets and reference images
