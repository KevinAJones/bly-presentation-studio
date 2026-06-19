# The Bly Team — Design System

The brand and UI system for **The Bly Team**, a top-producing real estate team in **League City & Houston, TX**, operating under **eXp Realty**. Use it to design on-brand interfaces, listings, decks, and marketing assets consistent across the team.

> *"A better way to buy and sell real estate. To serve as a trusted adviser to our community, clients, and friends."*

---

## Sources
- **Brand guide:** *The Bly Team and eXp Realty Brand Guide — 2026 (FY26)*, March 2026 (logos, colors, type, co-branding).
- **Website:** https://blyteam.com · search portal https://search.blyteam.com
- **Contact:** clientcare@agentbly.com · (832) 932-5435 · 217 East Main Street, League City, TX 77573

> **Note:** The team also maintains a second, tool-focused system (Oswald / Playfair / Plus Jakarta Sans, navy-and-gold, extracted from their calculators & listing pages). This project is the **Lato / Manrope + Bly Blue** brand direction. Keep them distinct or reconcile deliberately.

---

## Content fundamentals — how we write
**Voice (three pillars):** Trustworthy & Professional · Warm & Inclusive · Modern & Aspirational.

**In practice** (informed by the team's *Amplify Your Influence* model — frame → story → message → action):
- **Frame meaning before facts.** *"Inventory is up 18% — which means pricing, presentation, and follow-up matter more than they did two years ago."*
- **Speak to "you."** "We" = the team. Confident, never boastful.
- **End with one clear next step.** "Schedule a tour," "Get your home valuation," "Pick five minutes this week."
- **Plain language**, short sentences. Sentence-case headlines; UPPERCASE eyebrows with wide tracking. **No emoji.**

---

## Visual foundations
- **Color:** Bly Blue `#00519B` (signature accent, used sparingly) · Deep Navy `#0C0F24` · Black · Light Grey `#EFEFEF` · White. Accents: Cherry `#DB252B`, Forest `#49A647`, Gold `#E1BA62`, Slate `#447BC4`.
- **Type:** **Lato** for body + most headings (Black for punchy headlines); **Manrope** ExtraBold/Light for large display only — never body. Eyebrows uppercase, +14% tracking.
- **Layout:** 8px grid, generous whitespace, max width ~1200–1360px.
- **Cards:** white, 1px `#E3E3E6` border, 20px radius (`--radius-xl`), soft navy-tinted shadow; lift −2–3px on hover.
- **Elevation:** soft `rgba(12,15,36,…)` shadows, never harsh black (5 steps xs→xl).
- **Motion:** restrained 120–320ms, standard ease, no bounce; respects reduced-motion.
- **States:** hover = primary darken / faint wash / card lift; press = 0.5px nudge; focus = 3px Bly-Blue ring; disabled = ~50% opacity.
- **Backgrounds:** white or deep-navy; navy radial gradient (`#16306a → #0C0F24`) for hero depth.
- **Imagery:** authentic, local, candid Houston/Galveston homes, agents & communities. Avoid staged stock, handshakes, abstract symbolism. White logo over photos.

---

## Iconography
- **"Simple & Subtle"** — thin, single-weight **outline** icons via **[Lucide](https://lucide.dev)** (CDN, pinned `0.469.0`), stroke ~1.75–2.
- ⚠️ **Substitution flag:** the brand guide shows an outline set but ships no icon files; Lucide is a visual match. Swap in the official set if provided.
- Monochrome (navy/muted grey; blue for emphasis), paired with Lato labels. No filled/multicolor icons, **no emoji.**

---

## Assets
`assets/logos/` — official clean marks:
- `bly-logo-color.png` — primary (blue). Light backgrounds.
- `bly-logo-black.png` — secondary, black. Neutral/minimal.
- `bly-logo-white.png` — reversed, white. Dark backgrounds & photos.

`assets/bly-logo-navy.png` (= color mark) and `assets/bly-logo-white.png` are the paths the site components reference.

**Logo rules:** never distort, recolor, add effects, or remove elements. Keep clear space ≈ the height of the "B". Choose the variant with strongest contrast.

**eXp co-branding:** agent logo leads, vertical divider, then eXp mark/text lockup; never alter the eXp logo. See `guidelines/logo-cobrand.html`.

---

## Index / manifest
**Foundations** (`tokens/`, entry `styles.css`): colors, typography, spacing, radius, shadows, motion, fonts, base. Consumers link **`styles.css`** only.

**Specimen cards** (`guidelines/`): type, colors, spacing/radius/shadow, brand (logo variations, co-brand, iconography).

**Components** (`components/`)
- `core/` — Button, IconButton, Badge, Tag, Input, Select, Checkbox, Switch, Card, Avatar, Tabs
- `realestate/` — PropertyCard, AgentCard, StatBlock

**UI kits** (`ui_kits/`)
- `website/` — interactive blyteam.com recreation (home → search → listing → team).

**Templates** (`templates/`)
- `business-deck/` — `BusinessDeck.dc.html`, an 8-slide on-brand deck.

**Other:** `SKILL.md`, `readme.md`.

---

## Templates roadmap
The team repeatedly produces a handful of artifact types. These are the templates this system should carry (built in the Lato / Manrope + Bly Blue look), so every new project starts on-brand. Each is built as its own `templates/<slug>/` entry consuming projects can copy.
- **`business-deck`** — ✅ built. Title, agenda, section, content, stats, statement, comparison, closing.
- **`listing-page`** — per-listing landing page (hero gallery, price/facts band, description, agent contact, CTA). The team's #1 use; one page per HAR.com listing.
- **`calculator`** — client tool shell (input panel + live results, big formatted numbers, disclaimers): mortgage / closing-cost / affordability / commission-split / revenue-share.
- **`social-graphic`** — square/story stat & status graphics (Just Listed / Just Sold / Open House / "Outpacing the Market").

> Companion reference work (a navy/gold Oswald system + live calculator and deck builds) lives in the team's other projects; it informed this roadmap but is intentionally kept separate from this Lato/Manrope brand direction.

---

## Quick start
1. `<link rel="stylesheet" href="styles.css">` — every token + Lato/Manrope.
2. `<script src="_ds_bundle.js"></script>` then `const { Button, PropertyCard } = window.TheBlyTeamDesignSystem_5bb02e;`
3. Icons: `<script src="https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js"></script>` and `lucide.createIcons()` after render.
4. Style with tokens: `color: var(--color-primary); border-radius: var(--radius-xl); box-shadow: var(--shadow-md);`
