# LOZA Consulting — Design System

## Sources given
- `uploads/omar-lozano-info-web.md` — brand/positioning reference doc (data, tone rules, palette, ICP)
- `uploads/55ADCB75-DBFA-4F8A-9832-3051AB5976B5.PNG` — logo mark (copied to `assets/logo/loza-logo.png`)
- No codebase, no Figma file, and no existing website were provided. Everything visual beyond the logo and the two brand colors in the reference doc (typography choice for headlines, layout system, components, UI kit) is originated for this system, sized to a premium/executive-but-not-flashy brief. There is nothing to sync against later unless the user attaches a codebase or Figma file.

## Company / product context
**LOZA Consulting** is the personal consulting practice of **Omar Lozano Zavala**, a Fractional COO and operations consultant based in San Pedro Sula, Honduras, working pan-LATAM and 100% remote. 27+ years in textile manufacturing, most of it as General Manager with full P&L responsibility for a 1,000+ employee plant. His methodology is called **SEA** (Six Sigma × Excelencia Operacional × IA aplicada) — statistical rigor, operational discipline, and AI-assisted pattern-finding, aimed at surfacing hidden margin (typically 3-5%) without stopping production or requiring an internal technical team.

There is one product/surface in scope right now: **the LOZA Consulting marketing website** (a personal-brand/consulting site). The UI kit in this system (`ui_kits/website/`) recreates that site: home, methodology, about, and contact.

**ICP:** Plant Managers, Operations Directors, General Managers in textile/apparel (cut-and-sew) manufacturing, 50-500 employees, LATAM. Explicitly excludes footwear and distributors/resellers.

**Brand rule:** no specific employer names appear in public material — always "the plants I ran" / "a plant." Six Sigma Black Belt is used as a closing credibility proof, never an opening hook.

## Content fundamentals
Full detail lives in the source doc; the operative rules for any copy written in this system:
- **Never open with a thesis or credentials.** Lead with the ICP's pain, then how Omar resolves it. Six Sigma Black Belt / GM title are the close, not the hook.
- **Banned constructions:** em dashes, "it's not X, it's Y," gerund-led analysis openers ("Analizando...", "Identificando..."), generic motivational closers ("el futuro se ve brillante"), AI hype verbs (descubre, transforma, revoluciona, sumérgete, desbloquea).
- **No invented numbers.** Only Omar's own verified figures, framed as "lo que he visto repetirse" — never a generic industry statistic.
- **No named companies.** "las plantas que dirigí" / "una planta." Internally this is Textiles Merendón / Fruit of the Loom, but that never surfaces publicly.
- **Voice anchor:** *"mi escuela fue el piso de planta, no un libro de texto."* Direct, floor-earned authority — not academic, not hype.
- **Closes are concrete**, never a motivational platitude — a next step, a number, a scope, not a feeling.
- **No emoji.**
- Example proof line (verbatim pattern from the source doc): *"$1.2M+ en ahorros anuales recurrentes"*, *"+18% de uptime de maquinaria vía Mantenimiento Basado en Condición (CBM)"* — specific, dollar- or percent-denominated, tied to a named mechanism (CBM, Lean redesign), never a bare adjective claim.

## Visual foundations
- **Color:** Navy `#0A2140` is the dominant ground and headline color — most surfaces are navy-on-white or white-on-navy, not navy-as-accent. Gold `#AF8959` (sampled from the logo mark) is the quiet, premium accent — dividers, rules, small credential marks, never a large fill. Orange `#E0692A` is the one warm, active color — CTAs, links, the occasional proof-point number — used sparingly against navy or white so it stays a signal, not decoration. Max two of the three brand colors dominate any single screen; the third appears only as a small accent.
- **Type:** Libre Caslon Display (a high-contrast Caslon revival, chosen to echo the logo's Didone-style serif) carries headlines and any large standalone statement — it is the "premium, editorial" voice. Barlow Condensed (the brand's specified social-post typeface) carries eyebrows, stat callouts, captions, and labels — tracked out, often uppercase. Barlow (regular width) carries all running body copy. Never pair a third typeface in.
- **Backgrounds:** flat color only — no gradients, no textures, no patterns. Navy and white/cream are the two grounds; imagery (Omar's own photography) is the only other background treatment, always presented as a plain rectangular photo, never bled into a gradient overlay for web UI (the doc's photo-blend-into-navy-gradient treatment is a social-post-specific technique, not a web pattern — see Iconography/social formats below).
- **Corners:** small and consistent — 4px default (`--radius-md`) on cards/inputs, 2px on tags/badges, pill only for status chips. No large "friendly" rounding; this is an executive-consulting brand, not a consumer app.
- **Shadows:** very restrained. A 1px hairline border does most of the separation work; shadow only on genuinely elevated elements (dropdowns, modals) as a soft, low-opacity navy-tinted shadow (`--shadow-sm/md/lg`) — never a colored or hard-edged shadow.
- **Borders:** 1px, `--border-subtle`/`--border-default` (cool greys), on white surfaces. On navy surfaces, a low-opacity white hairline (`--border-inverse`).
- **Hover states:** deepen (navy button → darker navy) or, for the orange CTA, deepen orange → `--orange-600`. No lightening, no scale/bounce.
- **Press states:** the same color one step further (`--orange-700`) plus a 1px translateY(1px) — no shrink/scale transforms.
- **Motion:** minimal — a single 120-200ms ease-standard (`cubic-bezier(.4,0,.2,1)`) fade/color transition on interactive states. No bounce, no spring, no entrance choreography. This is a discipline-and-numbers brand; motion should not call attention to itself.
- **Transparency/blur:** none in the web UI kit. (The social-post format described in the source doc — Omar's photo dissolving into the navy background via a dark gradient — is a Photoshop/design-tool technique for static image posts, not a CSS blur/glass pattern; do not translate it into UI glassmorphism.)
- **Imagery tone:** warm-neutral, high-authority environmental portraiture (dark background headshots) and out-of-focus production-floor imagery for texture — never staged stock-photo brightness. No filters/grain specified; treat as clean, color-accurate photography.
- **Cards:** white surface, 1px `--border-subtle`, 4px radius, `--shadow-sm` at rest, `--shadow-md` on hover — no colored left border, no icon-in-circle default.
- **Layout:** centered content column, `--container-max: 1180px`, generous vertical rhythm (`--space-16/20/24` between sections). No sticky/fixed chrome beyond a simple top nav.

## Iconography
The source material defines no icon system, icon font, or SVG set — the logo is the only visual asset provided. For this system:
- **Icon set:** [Lucide](https://lucide.dev) via CDN, 1.5px stroke, no fill — chosen for its plain geometric strokes, which sit quietly next to the Caslon/Barlow pairing without competing with it. **Flagged substitution** — if the user has a preferred icon set, swap it in `components/`.
- **No emoji, ever** — confirmed by the tone rules in the source doc, and consistent with the "no hype" positioning.
- **No unicode-glyph icons.**
- Icons are used sparingly and functionally (nav, form affordances, a small set of process/mechanism diagrams referenced in the source doc's "diagrama de mecanismo" and "rueda de framework" social formats) — never decorative.
- **Social format language (reference only, not built as templates here):** the source doc validates five recurring LinkedIn visual formats — typography-led, Omar's photo blended into the navy background, mechanism diagrams, framework wheels, and Q&A cards, mostly in vertical 4:5. These are a separate, image-post design language from this web/UI system; flagging their existence here so a future "social templates" pass has the rules on hand, but none are built in this system.

## What's missing / caveats
- **No font files were supplied.** Libre Caslon Display, Barlow, and Barlow Condensed are loaded from Google Fonts via `@import` in `tokens/fonts.css` (all are free/open Google Fonts, so this works indefinitely without hosting files) rather than as local `@font-face` binaries — ask if you'd like them vendored locally instead.
- **No existing website, codebase, or Figma file was provided** — the UI kit is originated from the brand doc + logo, not recreated from a real product. Treat it as a strong starting point, not ground truth.
- Domain/email for LOZA Consulting is a placeholder in the info doc ("agregar correo/dominio del negocio") — contact screens use a placeholder.

## Index
- `styles.css` — root stylesheet, imports everything below
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`
- `assets/logo/loza-logo.png` — LOZA Consulting logo (the only real brand asset supplied)
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand groups in the Design System tab)
- `components/` — Button, Badge, Tag, Card, Input, Select, Checkbox, Radio, Tabs, Tooltip, StatCallout, QuoteBlock (see "Intentional additions" below)
- `ui_kits/website/` — Home, Methodology, About, Contact screens for the LOZA Consulting marketing site
- `SKILL.md` — Claude Code-portable skill wrapper

### Intentional additions
No source defined a component inventory, so a standard primitive set was authored. Two additions beyond the usual primitive set, justified by the brand brief:
- **StatCallout** — the brand's proof points are always dollar/percent + mechanism ("+18% uptime via CBM"); this is common enough in the source material to warrant a dedicated primitive rather than ad hoc typography.
- **QuoteBlock** — used for the "mi escuela fue el piso de planta..." voice anchor and future testimonials; consulting sites lean heavily on credibility quotes.
