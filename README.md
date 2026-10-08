# Portfolio — Aayushman Chandra

> **“What if we could make this better?”** — the thought behind everything I build.

A motion-first personal portfolio for **Aayushman Chandra** — Class 11 PCM student,
UI/UX enthusiast, proud **Arsenal FC** supporter and future founder. Built with
**Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS v4** and a
**shadcn-style project structure**, with 🌗 class-based dark mode and an
isometric cube-loader intro.

## Stack

| Piece | Version / Note |
| --- | --- |
| Next.js + React 19 | App Router, `"use client"` islands for interactive effects |
| TypeScript | Strict mode, `@/*` path alias to repo root |
| Tailwind CSS v4 | CSS-first config in `app/globals.css` (`@import "tailwindcss"` + `@theme` + `@custom-variant dark`) |
| shadcn structure | `components.json`, `@/components/ui`, `@/lib/utils` (`cn`), `@/hooks` |
| GSAP 3 | Immersive clip-path navigation |
| motion (framer-motion) + uuid | Pixel-trail micro-interaction |
| lucide-react | Theme toggle icons |

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (type-checks everything)
```

> Note: `node_modules` is git-ignored — run `npm install` after every fresh clone.

## Project layout

```
app/
  globals.css            ← Tailwind 4 entry + tokens + dark theme + nav & loader stylesheets
  layout.tsx             ← theme bootstrap script, site loader, theme toggle
  page.tsx               ← hero / about / projects / playground / contact
components/
  ui/                    ← default shadcn component path (see components.json)
    immersive-full-screen-nav.tsx   ← GSAP clip-path nav (Arsenal red panel)
    loader-3.tsx                    ← isometric 3D cube loader
    sterling-gate-kinetic-navigation.tsx
    polaroid-line-carousel.tsx
    cursor-driven-particle-typography.tsx
    animated-links.tsx              ← Skiper 40: Link000–Link005
    pixel-trail.tsx
  site-loader.tsx        ← once-per-session intro overlay
  theme-toggle.tsx       ← dark/light switch (localStorage + OS preference)
  playground-section.tsx
hooks/
  use-dimensions.ts   use-screen-size.ts
lib/
  utils.ts              ← cn()
```

## Dark mode

- `.dark` class on `<html>`, bootstrapped **before first paint** by an inline
  script (no theme flash), persisted in `localStorage`, defaults to the OS
  preference.
- `@custom-variant dark (&:where(.dark, .dark *))` enables `dark:` utilities
  in Tailwind v4; page colors flow from `--color-background` /
  `--color-foreground`, which are redefined under `.dark`.
- The floating toggle (bottom-right) uses lucide `Sun`/`Moon` icons.

## The experience, top to bottom

1. **Intro** — `loader-3` cube stack once per session, with the brand thought.
2. **Navigation** — `immersive-full-screen-nav`: clip-path wipe open in
   Arsenal red (`#ef0107`), char-split hover links, image row, socials,
   focus-trap + reduced-motion support.
3. **Hero** — `cursor-driven-particle-typography` (AAYUSHMAN in cursor-reactive
   particles) + the centered thought *“What if we could make this better?”*.
4. **About** — bio (Class 11 PCM, Arsenal, UI/UX), interest chips and the
   founding vision: consumer electronics, IT, mobile communications, smart tech.
5. **Projects** — `polaroid-line-carousel` (football & design Unsplash prints,
   physics swing + drag).
6. **Playground** — `pixel-trail` full-screen cursor trail.
7. **Contact** — `animated-links` (Skiper 40) centered link stack.

## Replicating this setup from scratch

```bash
npx create-next-app@latest portfolio --typescript --tailwind --app
cd portfolio
npx shadcn@latest init                 # generates components.json + lib/utils
npm i gsap uuid motion lucide-react clsx tailwind-merge tw-animate-css
mkdir -p components/ui hooks
```

Then copy the components from this repo into `components/ui` and the design
tokens + nav/loader stylesheets from `app/globals.css`.
