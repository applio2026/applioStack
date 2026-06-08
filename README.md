# Applio Stack

The Applio Stack marketing landing page — an enterprise management software suite —
built as a **React + Vite** app.

It was converted from a static HTML/CSS design handoff (exported from Claude Design,
claude.ai/design) into a real, component-based React application. The design tokens
and component styles are preserved verbatim in `src/system.css`; the page-specific
styles live in `src/page.css`. Page content (products, features, pricing, metrics,
the dashboard table, etc.) lives in plain data arrays at the top of each component,
so copy edits don't require touching JSX.

## Products

The suite presents **eight integrated platforms** under one login:

1. **University EMS** — full lifecycle management for universities
2. **Colleges EMS** — purpose-built for degree colleges (attendance, NAAC reports)
3. **School EMS** — K–12 management (timetables, transport, parent portal)
4. **Examination Management** — online exams, question banks, remote proctoring, auto-grading
5. **Smart LMS** — course authoring, live/recorded classes, adaptive learning, analytics
6. **Academic Process Management** — meeting records, document repository, file movement, multi-stage approval flows
7. **Finance & Accounting** — double-entry accounting, GST/TDS, multi-entity consolidation
8. **HR & Payroll** — recruitment, payroll, PF/ESI statutory filings

## Getting started

```bash
npm install
npm run dev                # start the dev server (http://localhost:5163)
npm run build              # production build → dist/
npm run preview            # serve the production build locally
```

> Internet access is required the first time so the **Geist** web font can load
> from Google Fonts (declared in `index.html`); everything else is local.

## Project structure

```
applio/
├── index.html                  — Vite entry; loads fonts + mounts #root
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                — React entry, imports both stylesheets
    ├── App.jsx                 — composes the page sections in order
    ├── system.css              — shared design system (tokens + components)
    ├── page.css                — landing-page styles
    ├── hooks/
    │   └── useScrollSpy.js     — IntersectionObserver nav highlighting
    └── components/
        ├── IconSprite.jsx      — inline SVG <symbol> sprite (rendered once)
        ├── Icon.jsx            — <Icon name="arrow-r" /> → <use href="#i-arrow-r" />
        ├── Nav.jsx
        ├── Hero.jsx
        ├── Products.jsx
        ├── DashboardPreview.jsx
        ├── MetricsStrip.jsx
        ├── Features.jsx
        ├── Testimonial.jsx
        ├── Pricing.jsx
        ├── CtaBanner.jsx
        └── Footer.jsx
```

## Notes on the conversion

- **Behavior → idiomatic React/CSS.** The original page's inline `<script>` did three
  things, now reimplemented natively: smooth-scroll anchors (CSS
  `html { scroll-behavior: smooth }`), nav scroll-spy (the `useScrollSpy` hook), and a
  card hover-lift (a CSS `:hover` transform on `.product-card`).
- **Icons.** The SVG sprite is emitted once via `IconSprite` and referenced with
  `<use>`. It uses `dangerouslySetInnerHTML` purely to keep the sprite markup
  byte-for-byte identical to the design source — no JSX attribute rewriting, so every
  icon stays pixel-perfect.
- **Design system.** `src/system.css` is the reused source of truth for all tokens,
  buttons, badges, cards, tables, alerts, and form controls.
