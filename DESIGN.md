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

### Sidebar (TOC / Bản Đồ Học Tập)

Every module page requires a sidebar. There are two patterns — choose based on module generation:

**Pattern A (Modules 1–9) — Rich sidebar with progress tracking:**
```html
<aside class="sidebar">
  <div class="sidebar-module-tag" style="background:#eff6ff;color:#0f4c81;border-color:#bfdbfe;">MODULE N</div>
  <div class="sidebar-title">Tên Module</div>
  <div class="module-progress">
    <div class="progress-header"><span>Tiến độ</span><span class="progress-label">0 / N bài</span></div>
    <div class="progress-bar"><div class="progress-fill" style="width:0%"></div></div>
  </div>
  <div class="sidebar-section">
    <div class="sidebar-section-title">Bài Giảng</div>
    <a href="#lesson1" class="sidebar-item active" data-lesson="mN-l1">
      <div class="item-icon">🧠</div><span>Bài 1: ...</span><div class="status-dot"></div>
    </a>
  </div>
</aside>
```

**Pattern B (Modules 10–30) — Compact sidebar-nav:**
```html
<aside class="sidebar">
  <div class="sidebar-module-tag" style="background:var(--mN-light);color:var(--mN-primary);border-color:var(--mN-border);">MODULE N</div>
  <div class="sidebar-title">Tên Module</div>
  <nav class="sidebar-nav">
    <a href="#lesson1" class="active">L1. Tên Bài</a>
    <a href="#lesson2">L2. Tên Bài</a>
    <a href="quiz.html" style="margin-top:var(--space-4);color:var(--mN-accent);">📝 Quiz</a>
    <a href="lab.ipynb" download style="color:var(--mN-accent);">🔬 Lab Notebook</a>
  </nav>
  <div style="margin-top:auto;padding-top:var(--space-6);">
    <a href="../moduleN-1/index.html" style="font-size:.8rem;color:var(--text-muted);">← Module N-1</a>
  </div>
</aside>
```

**Touch targets (mobile):** All sidebar links must have `min-height: 44px`. The `.sidebar-nav a` achieves this via `min-height: 44px; display: flex; align-items: center;` in CSS.

**Scrollspy:** `main.js` auto-highlights active link based on `IntersectionObserver` — no additional JS needed.

### Learning Roadmap (Landing Page)
The `.roadmap` section in `index.html` shows the 30-step FinTech Corp journey. Key structure:
```html
<div class="roadmap-item">
  <div class="roadmap-left">
    <div class="roadmap-circle" style="background:var(--primary);">N</div>
    <div class="roadmap-line"></div>  <!-- omit on LAST item -->
  </div>
  <div class="roadmap-body">
    <h4>Title</h4>
    <p>Description</p>
    <div class="roadmap-tags">...</div>
  </div>
</div>
```
**Rule:** `roadmap-line` must be INSIDE `.roadmap-left`, never a standalone sibling element.
Roadmap CSS lives in `main.css` (not inline) — use `.roadmap`, `.roadmap-item`, `.roadmap-circle`, `.roadmap-line`, `.roadmap-body`, `.roadmap-tags` classes.

### Module Header (Lesson Header)

Every module begins with a gradient banner. Two valid patterns exist:

**Pattern A (M1-4) — `.lesson-header` with breadcrumb:**
```html
<div class="lesson-header">
  <div class="breadcrumb"><a href="../../index.html">Trang chủ</a><span>›</span> Module N</div>
  <h1>Module N: Title</h1>
  <p style="color:rgba(255,255,255,.8)">Short description</p>
  <div class="lesson-meta">
    <span class="meta-badge">⏱ ~N giờ</span>
    <span class="meta-badge">📖 N bài giảng</span>
    <span class="meta-badge">🎯 Mức: Level</span>
    <span class="meta-badge">🏢 Ví dụ: FinTech Corp</span>
  </div>
</div>
```

**Pattern B (M10-30) — `.lesson-header` with `module-tag`:**
```html
<div class="lesson-header">
  <span class="module-tag">MODULE N · Tuần X–Y</span>
  <h1>Emoji Title</h1>
  <p>Short description</p>
  <div class="lesson-meta">
    <span>⏱ N tuần</span><span>📖 5 bài giảng</span><span>KeyTopic</span>
  </div>
</div>
```

### Module Objectives Box (BẮT BUỘC)

Every module must have an `.objectives-box` after the lesson-header and before the first `<section`:
```html
<div class="objectives-box">
  <h4>🎯 Sau Module N, bạn sẽ có thể:</h4>
  <ul>
    <li>Objective derived from lesson 1's learning-objective first bullet</li>
    <li>Objective derived from lesson 2's learning-objective first bullet</li>
    <li>Objective derived from lesson 3's learning-objective first bullet</li>
    <li>Objective derived from lesson 4's learning-objective first bullet</li>
    <li>Objective derived from lesson 5's learning-objective first bullet</li>
  </ul>
</div>
```

### Lesson Section Heading Patterns

Three valid patterns depending on module generation:

**Pattern A (M1-4, M7) — `.section-heading` with number circle:**
```html
<section id="lessonN" class="lesson-section">
  <div class="section-heading">
    <div class="section-number">N</div>
    <h2>Lesson Title</h2>
  </div>
  <div class="learning-objective">...</div>
```

**Pattern B (M5-6, M8-9) — `.lesson-header` per-lesson gradient banner:**
```html
<section class="lesson-section" id="lesson-N">
  <div class="lesson-header">
    <span class="lesson-badge">Bài N</span>
    <h2 class="lesson-title">Lesson Title</h2>
    <p>Intro text</p>
  </div>
  <div class="learning-objective">...</div>
```

**Pattern C (M10-30) — bare `<h2>` with CSS auto-counter:**
```html
<section id="lessonN" class="lesson-section">
  <h2>Bài N: Lesson Title</h2>
  <div class="learning-objective">...</div>
```
CSS auto-counter: `.lesson-section > h2:first-child::before` adds a blue numbered circle automatically (defined in main.css). **No inline HTML needed.**

### Learning Map (Bản Đồ Học Tập)

Two styled implementations — both use `.step-flow` with `.step` items:

**Pattern A (M1-4) — Colored boxes with inline flex (arrow separators):**
```html
<div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-xl);padding:var(--space-6);margin-bottom:var(--space-6);">
  <h4 style="color:var(--primary-dark);margin-bottom:var(--space-4);">🗺️ Bản Đồ Học Tập Module N</h4>
  <div style="display:flex;align-items:center;justify-content:center;gap:0;flex-wrap:wrap;">
    <div style="text-align:center;min-width:130px;">
      <div style="background:var(--primary);color:#fff;border-radius:var(--radius-lg);padding:var(--space-3) var(--space-4);font-weight:700;font-size:.875rem;">🧠 Bài 1<br><span style="font-weight:400;font-size:.8rem;">Subtitle</span></div>
      <div style="font-size:.72rem;color:var(--text-muted);margin-top:4px;">Label</div>
    </div>
    <div style="color:var(--accent);font-size:1.5rem;padding:0 4px;padding-bottom:16px;">→</div>
    <!-- repeat for each lesson -->
  </div>
</div>
```

**Pattern B (M5-7) — `.callout concept` with `.step-flow` + `.step-num/.step-title/.step-desc`:**
```html
<div class="callout concept" style="margin-bottom:var(--space-8);">
  <div class="callout-header">🗺️ Bản Đồ Học Tập Module N</div>
  <div class="step-flow">
    <div class="step">
      <div class="step-num">1</div>
      <div class="step-title">Lesson Name</div>
      <div class="step-desc">Short description</div>
    </div>
    <!-- repeat for each lesson -->
  </div>
</div>
```
CSS for `.step-num`, `.step-title`, `.step-desc`, `.step-flow` gap is defined in main.css.

**CRITICAL:** Never use `style="grid-template-columns: repeat(5,1fr);"` on `.step-flow` — it uses `display:flex`, not grid.

### Callout Boxes
6 types: `example` (amber), `analogy` (sky), `warning` (red), `concept` (blue), `key-insight` (purple), `formula` (green). Max 3 per section, max 2 same-type consecutive.

**CRITICAL:** Always use `.callout-header` class, NEVER `.callout-title`.

### Process Steps (`.process-steps`)

Numbered ordered list using CSS counters. **Do NOT use `display:grid`** — CSS uses `position:absolute` for the counter circle:
```html
<ol class="process-steps">
  <li>
    <strong>Step Title</strong>
    <p>Description text</p>
  </li>
</ol>
```
The `::before` pseudo-element (number circle) is `position:absolute;left:0;top:0` with `padding-left:58px` on `<li>`. The `<strong>` and `<p>` share the padded area and wrap correctly.

### Step Flow (`.step-flow`)

Horizontal flow indicator used for learning maps and progress displays:
```html
<div class="step-flow">
  <div class="step">
    <div class="step-num">1</div>      <!-- blue circle number -->
    <div class="step-title">Title</div> <!-- bold label -->
    <div class="step-desc">Desc</div>   <!-- muted description -->
  </div>
  <!-- repeat -->
</div>
```
CSS: `step-flow` = `display:flex; gap:var(--space-3); flex-wrap:wrap`. Items have `flex:1; max-width:140px`.

### SVG Diagrams
All diagrams must be inline SVG. Required: `<title>` element (accessibility), `viewBox`, `.diagram-title` caption. Max 760px wide viewBox for landscape, 500px for portrait. Use module-specific color palette with white/light text.

### Progress Indicators
- **Scroll progress bar:** Fixed at top, fills as user scrolls. Class: `.scroll-progress` > `.scroll-progress-fill`.
- **Quiz progress:** Fraction counter + horizontal fill bar within quiz container.

### Bottom Navigation

Every module index.html must have navigation to prev module, quiz, AND next module:
```html
<div class="bottom-nav">
  <a href="../moduleN-1/index.html" class="btn btn-outline">← Module N-1: ShortTitle</a>
  <a href="quiz.html" class="btn btn-outline">📝 Quiz Module N</a>
  <a href="../moduleN+1/index.html" class="btn btn-primary">Module N+1: ShortTitle →</a>
</div>
```
**Note:** Module 30 omits the next link. Quiz result pages MUST also link to the next module.

## Do's and Don'ts

**Do:**
- Use `.page-layout` or `.layout` wrapper for all module index pages (both work identically in CSS).
- Include sidebar with links to every lesson section in every module.
- Add `<title>` to every SVG diagram.
- Use FinTech Corp / LoanBot examples in every lesson.
- Add `.learning-objective` at the start of each lesson.
- Add `.objectives-box` at the module level before the first lesson section.
- Keep SVG backgrounds dark (#0f172a or module-dark color) with light text for contrast.
- Use `<script src="../../assets/js/main.js"></script>` at the end of every index.html body.
- Use `.callout-header` (not `.callout-title`) for callout box headers.

**Don't:**
- Don't use `.callout-title` — always use `.callout-header`.
- Don't use `grid-template-columns` on `.step-flow` — it uses flexbox.
- Don't place more than 2 callouts consecutively.
- Don't use font-size below 0.8rem for reading text.
- Don't use raster images — SVG only for diagrams.
- Don't add inline scroll event listeners — main.js handles everything.
- Don't add hamburger button markup to HTML — main.js injects it automatically.
- Don't use `display:none` to hide the sidebar on mobile — use `transform` so scrollspy stays live.
- Don't create breakpoint-specific JS — all responsive behavior lives in CSS; JS only toggles classes.
- Don't use `display:grid` in `.process-steps > li` — use `position:relative; padding-left:58px` instead.
