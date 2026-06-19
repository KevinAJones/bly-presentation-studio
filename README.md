# The Bly Team — Presentation Studio

On-brand client presentation builder for **The Bly Team** (eXp Realty · League City & Houston, TX).
Agents pick a presentation type, fill in client / property / price / comps, then open a polished,
brand-consistent deck to present live or export to PDF.

**Live site:** https://kevinajones.github.io/bly-presentation-studio/

## What's inside

| Path | What it is |
|------|------------|
| `index.html` | Landing page / launcher (start here) |
| `presentations/presentation-studio/` | **The builder** — pick a deck, import data, fill the intake form |
| `presentations/buyer-presentation/` | Buyer presentation deck |
| `presentations/pre-listing-presentation/` | Pre-listing (evergreen marketing) deck |
| `presentations/listing-presentation/` | Listing deck (comps + recommended price) |
| `presentations/relisting-presentation/` | Re-listing deck |
| `BusinessDeck.dc.html` | 8-slide on-brand business deck |
| `presentations/presentation-kit.css` | Editorial brand layer (Oswald / Playfair / Plus Jakarta Sans, navy/royal/gold) |
| `_ds/` | The Bly Team design system (Lato / Manrope + Bly Blue tokens, components) |
| `assets/` | Logos |

## How it works

The pages are Claude **Design Canvas** (`.dc.html`) artifacts. Each one ships a `support.js`
runtime that, at load, pulls React 18 + Babel from a CDN, parses the page's `<x-dc>` template,
and renders it. The Studio saves the agent's inputs to `localStorage` (`blyPresentation`); each
deck reads that key back, so details entered in the Studio flow into whichever deck you open.

## Running locally

The runtime fetches the page over HTTP (it will not work from `file://`), so serve the folder:

```bash
cd bly-presentation-studio
python3 -m http.server 4456
# open http://localhost:4456/
```

## Deployment

Served as a static site via **GitHub Pages** from the repository root. The `.nojekyll` file is
required — without it GitHub's Jekyll build strips the `_ds/` directory and `_ds_bundle.js`
(leading underscores), breaking the design system.

## Notes

- Internet access is required at runtime (React/Babel CDN, Google Fonts, Lucide icons).
- Brand: **The Bly Team / eXp Realty**. See `_ds/.../readme.md` for the full brand guide.
