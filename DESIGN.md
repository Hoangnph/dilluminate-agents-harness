---
version: alpha
name: AI Agent Harness Training Platform
description: >
  Educational platform for enterprise AI agent engineering — SOTA curriculum
  with FinTech Corp / LoanBot as running example across 30 modules.
colors:
  primary: "#0f4c81"
  primary-dark: "#0a3660"
  accent: "#f5a623"
  success: "#16a34a"
  warning: "#d97706"
  danger: "#dc2626"
  info: "#0ea5e9"
  purple: "#7e22ce"
  text: "#1e293b"
  text-muted: "#64748b"
  border: "#e2e8f0"
  surface: "#ffffff"
  bg: "#f8fafc"
  # Module theme colors (each module has a distinct palette)
  m1-primary: "#0f4c81"
  m27-primary: "#92400e"
  m27-accent: "#fbbf24"
  m28-primary: "#134e4a"
  m28-accent: "#2dd4bf"
  m29-primary: "#14532d"
  m29-accent: "#4ade80"
  m30-primary: "#1e1b4b"
  m30-accent: "#818cf8"
typography:
  h1:
    fontFamily: system-ui, -apple-system, sans-serif
    fontSize: 2rem
    fontWeight: 800
    lineHeight: 1.2
  h2:
    fontFamily: system-ui, -apple-system, sans-serif
    fontSize: 1.5rem
    fontWeight: 700
    lineHeight: 1.3
  h3:
    fontFamily: system-ui, -apple-system, sans-serif
    fontSize: 1.125rem
    fontWeight: 600
    lineHeight: 1.4
  body-md:
    fontFamily: system-ui, -apple-system, sans-serif
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.7
  body-sm:
    fontFamily: system-ui, -apple-system, sans-serif
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.6
  code:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: system-ui, -apple-system, sans-serif
    fontSize: 0.75rem
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.08em
rounded:
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  2xl: 20px
  full: 9999px
spacing:
  1: 4px
  2: 8px
  3: 12px
  4: 16px
  5: 20px
  6: 24px
  8: 32px
  10: 40px
  12: 48px
components:
  sidebar:
    width: 260px
    background: "{colors.surface}"
    border-right: "1px solid {colors.border}"
    padding: "{spacing.6}"
  sidebar-nav-link:
    fontSize: 0.875rem
    padding: "6px {spacing.3}"
    border-radius: "{rounded.md}"
    active-background: "var(--module-light)"
    active-border-left: "3px solid var(--module-accent)"
  callout:
    border-radius: "{rounded.xl}"
    padding: "{spacing.4} {spacing.5}"
    margin: "{spacing.6} 0"
  code-block:
    background: "#0f172a"
    border-radius: "{rounded.xl}"
    padding: "{spacing.5}"
  concept-check:
    background: "#f0f9ff"
    border: "1px solid #bae6fd"
    border-radius: "{rounded.xl}"
  key-formula:
    background: "linear-gradient(135deg,{colors.primary-dark},{colors.primary})"
    color: "#ffffff"
    border-radius: "{rounded.xl}"
  scroll-progress:
    height: 3px
    background: "linear-gradient(90deg,{colors.primary},{colors.accent})"
  diagram-svg:
    max-width: 760px
    border-radius: "{rounded.xl}"
    shadow: "0 1px 3px rgba(0,0,0,0.12)"
---

## Overview

**Educational platform for professional AI engineers.** The UI evokes a premium technical publication — authoritative, structured, and intellectually rigorous. Think Stripe Docs meets Khan Academy, adapted for Vietnamese enterprise learners.

Target users: Mid-career professionals from finance, operations, and product domains seeking to master AI agent engineering. They value clarity, practical examples, and structured progression over visual flash.

Every page should feel like a high-quality textbook page, not a marketing site. Density is appropriate when content demands it.

## Colors

The palette uses a deep navy primary for trust and authority, with per-module accent colors that create visual identity across 30 modules.

- **Primary (#0f4c81):** Deep navy — headings, navigation, interactive elements. Conveys expertise and stability (matching FinTech domain).
- **Accent (#f5a623):** Warm amber — CTAs, highlight boxes, key formulas. Creates warmth against the cool primary.
- **Success (#16a34a):** Forest green — correct answers, approved states, positive signals.
- **Warning (#d97706):** Amber — cautions, borderline states.
- **Danger (#dc2626):** Red — errors, rejected states, critical warnings.
- **Info (#0ea5e9):** Sky blue — concept explanations, neutral information.
- **Purple (#7e22ce):** Deep purple — key insights, breakthrough concepts.
- **Surface (#ffffff):** Pure white card backgrounds.
- **BG (#f8fafc):** Near-white page background — reduces harsh contrast.
- **Module themes:** Each module has a unique gradient pair (light → dark → accent) for visual differentiation across the curriculum.

## Typography

System fonts only — no web font loading, ensuring instant render on slow connections (target: enterprise Vietnam, often on 4G).

- **H1 (2rem, 800):** Module page titles in lesson-header. Maximum one per page.
- **H2 (1.5rem, 700):** Lesson section titles — the primary navigation anchor for TOC scrollspy.
- **H3 (1.125rem, 600):** Sub-section headings within a lesson. Max 3 per lesson per cognitive load rules.
- **Body (1rem, 400, 1.7 line-height):** Prose reading width capped at 900px. The 1.7 line-height is non-negotiable — tested against Vietnamese diacritics.
- **Code (0.875rem, monospace):** Always in dark `.code-block` containers with syntax coloring.
- **Labels (0.75rem, 700, 0.08em tracking):** Module tags, badges, callout headers. Uppercase where used as section markers.

Never go below 0.8rem for reading text. Minimum touch target: 44×44px.

## Responsive Design & Mobile

### Breakpoints

| Token | Value | Target |
|-------|-------|--------|
| `--bp-lg` | 1024px | Tablet landscape — sidebar collapses to drawer |
| `--bp-md` | 768px | Tablet portrait / large phone — layout shifts to single column |
| `--bp-sm` | 480px | Phone — compact spacing, stacked nav |

### Mobile Sidebar (Drawer Pattern)
On screens ≤ 1024px the sidebar becomes an off-canvas drawer:
- Hidden off-screen via `transform: translateX(-260px)` (not `display:none` — preserves scrollspy)
- `.sidebar-open` class (toggled by JS) slides it back in with `transition: 0.28s ease`
- A semi-transparent `.sidebar-overlay` covers the content area; tapping it closes the drawer
- Hamburger button (`.mobile-menu-btn`) is injected into `.topbar` by `main.js` — no HTML changes required
- Active sidebar links auto-close the drawer on mobile (JS closes on anchor click)

### Mobile Topbar
- On ≤ 1024px: `.topbar-nav` links collapse (hidden); hamburger button appears at right
- On ≤ 480px: brand text truncates with `text-overflow: ellipsis`
- Hamburger icon: 3-bar `≡` → `✕` when open (CSS class toggle)

### Touch Targets
- Minimum 44×44px for all interactive elements (buttons, sidebar links, quiz options)
- Quiz option padding increases on mobile: `var(--space-5)` vertical padding
- Concept-check and expand buttons: min-height 48px on mobile

### Typography Scaling
- h1: `2rem` → `1.6rem` on md → `1.4rem` on sm
- h2: `1.5rem` → `1.25rem` on md
- Body text: stays at `1rem` (never reduce for readability)
- Code blocks: `font-size: 0.82rem` on sm

### Component Adaptations (≤ 768px)
- `.module-grid`: 3 col → 2 col → 1 col
- `.stats-row`: auto-fill → 2 col → 1 col
- `.two-col-explain`: 2 col → 1 col
- `.glossary-grid`: auto-fill → 1 col
- `.bottom-nav`: flex-row → flex-col (stack buttons)
- `.quiz-question-card`: `padding: var(--space-5)` (reduced from var(--space-7))
- `.diagram-container svg`: `overflow-x: auto` + `min-width: 320px` for wide SVGs
- `.code-block pre`: horizontal scroll (`overflow-x: auto`)
- `table`: wrapped in `.table-scroll` or `overflow-x: auto` on parent

### No-Sidebar Pages (Quiz, Landing)
- Quiz pages are already single-column — only padding/font adjustments needed
- Landing page hero: heading font scales, CTA buttons stack vertically on sm

## Layout

Two-zone layout: fixed `<aside class="sidebar">` (260px) + scrolling `<main class="main-content">`. Sidebar is fixed on desktop; becomes an off-canvas drawer on tablet/mobile (≤1024px), toggled via hamburger button injected by `main.js`.

**MANDATORY structure for all module index.html pages:**
```html
<div class="page-layout">
  <aside class="sidebar"> ... </aside>
  <main class="main-content"> ... </main>
</div>
```

**Sidebar must contain `.sidebar-nav`** with anchor links to every `h2` lesson section. This is the primary TOC. Scrollspy in `main.js` highlights the active link as user scrolls.

**Prose max-width:** 900px within `.main-content`. Diagrams may extend to 100% of content area.

**Vertical rhythm:** `var(--space-12)` between major lesson sections. Callouts get `var(--space-6)` margin. Heading-to-first-paragraph: `var(--space-6)` minimum.

## Elevation & Depth

Three elevation levels using box-shadow:

- **Level 0 (flat):** No shadow — body text areas, prose.
- **Level 1 (card):** `0 1px 3px rgba(0,0,0,0.08)` — callout boxes, code blocks, sidebar.
- **Level 2 (raised):** `0 4px 12px rgba(0,0,0,0.12)` — hover states on module cards, active diagram containers.

Lesson-header hero sections use gradient backgrounds (module-specific) for visual hierarchy at the top of each page.

## Shapes

Corner radii follow a consistent scale:

- `6px` (sm): Small tags, inline badges.
- `8px` (md): Buttons, table cells, option buttons in quiz.
- `12px` (lg): Callout boxes, capability cards, code block inner areas.
- `16px` (xl): Major cards, concept-check boxes, key-formula boxes.
- `20px` (2xl): Lesson-header containers, module cards on landing page.
- `9999px` (full): Pills, progress bars, circular badges.

SVG diagrams: always `rx="8"` on rectangles (12px on main containers), matching the component library.

## Components

### Sidebar (TOC)
Every module page requires a sidebar with `.sidebar-nav` for TOC functionality. Scrollspy in `main.js` manages active state automatically.

### Callout Boxes
6 types: `example` (amber), `analogy` (sky), `warning` (red), `concept` (blue), `key-insight` (purple), `formula` (green). Max 3 per section, max 2 same-type consecutive.

### SVG Diagrams
All diagrams must be inline SVG. Required: `<title>` element (accessibility), `viewBox`, `.diagram-title` caption. Max 760px wide viewBox for landscape, 500px for portrait. Use module-specific color palette with white/light text.

### Progress Indicators
- **Scroll progress bar:** Fixed at top, fills as user scrolls. Class: `.scroll-progress` > `.scroll-progress-fill`.
- **Quiz progress:** Fraction counter + horizontal fill bar within quiz container.

## Do's and Don'ts

**Do:**
- Use `.page-layout` wrapper for all module index pages.
- Include `.sidebar-nav` with links to every lesson h2 in every module.
- Add `<title>` to every SVG diagram.
- Use FinTech Corp / LoanBot examples in every lesson.
- Add `.learning-objective` at the start of each lesson.
- Keep SVG backgrounds dark (#0f172a or module-dark color) with light text for contrast.
- Use `<script src="../../assets/js/main.js"></script>` at the end of every index.html body.

**Don't:**
- Don't use `.lesson-nav` class (legacy, only modules 1-7). Use `.bottom-nav` instead.
- Don't use `.callout-title` — always use `.callout-header`.
- Don't use `.wrapper`, `.layout`, or `.container` as the page wrapper.
- Don't place more than 2 callouts consecutively.
- Don't use font-size below 0.8rem for reading text.
- Don't use raster images — SVG only for diagrams.
- Don't add inline scroll event listeners — main.js handles everything.
- Don't add hamburger button markup to HTML — main.js injects it automatically.
- Don't use `display:none` to hide the sidebar on mobile — use `transform` so scrollspy stays live.
- Don't create breakpoint-specific JS — all responsive behavior lives in CSS; JS only toggles classes.
