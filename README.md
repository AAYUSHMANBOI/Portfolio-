# Portfolio — Aayushman

A kinetic, motion-first portfolio built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS v4** and a **shadcn-style project structure**, featuring GSAP-driven navigation, a physics-based polaroid carousel and canvas micro-interactions.

## Stack

| Piece | Version / Note |
| --- | --- |
| Next.js + React 19 | App Router, `"use client"` islands for interactive effects |
| TypeScript | Strict mode, `@/*` path alias to repo root |
| Tailwind CSS v4 | CSS-first config in `app/globals.css` (`@import "tailwindcss"` + `@theme`) |
| shadcn structure | `components.json`, `@/components/ui`, `@/lib/utils` (`cn`), `@/hooks` |
| GSAP 3 + CustomEase | Kinetic fullscreen navigation |
| motion (framer-motion) + uuid | Pixel-trail micro-interaction |

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (type-checks everything)
```

## Project layout

```
app/
  globals.css            ← Tailwind 4 entry + :root tokens + kinetic-nav stylesheet
  layout.tsx · page.tsx
components/
  ui/                    ← default shadcn component path (see components.json)
    sterling-gate-kinetic-navigation.tsx   ← GSAP fullscreen menu (npm i gsap)
    polaroid-line-carousel.tsx             ← physics carousel, self-styled, zero deps
    cursor-driven-particle-typography.tsx  ← canvas particle hero text
    animated-links.tsx                     ← Link000–Link005 hover micro-interactions
    pixel-trail.tsx                        ← cursor pixel trail (npm i uuid motion)
  playground-section.tsx
hooks/
  use-dimensions.ts   use-screen-size.ts
lib/
  utils.ts              ← cn()
```

### Why `components/ui`?

shadcn's registry generator, the `npx shadcn add <component>` CLI and all
copy-paste snippets (incl. `@fancy/*`) assume a single canonical folder —
`@/components/ui` — wired through the `ui` alias in `components.json`.
Keeping every reusable UI primitive there makes CLI installs work out of the
box and keeps demos (`import X from "@/components/ui/<file>"`) copy-paste
compatible.

## Integrated components & demos

1. **Sterling Gate Kinetic Navigation** — fixed header + fullscreen GSAP menu
   (layered panel wipe, staggered masked links, ambient SVG shapes per hover).
   Deps: `gsap`. Styles live in `app/globals.css`.
2. **Polaroid Line Carousel** — prints pegged to a sagging string; drag,
   arrows, ←/→ keys, autoplay. Slides without an image URL get a canvas-painted
   landscape. Used in the *Projects* section with Unsplash photography.
3. **Cursor-Driven Particle Typography** — hero headline rendered as
   cursor-repellent particles on `<canvas>`.
4. **Skiper 40 Animated Links** — `Link000`–`Link005` underline/wipe
   micro-interactions, used in the *Contact* section.
5. **Pixel Trail** — pixelated cursor trail (React Bits `@fancy/pixel-trail`
   manual install), used full-screen in the *Playground* section.

## Replicating this setup from scratch

```bash
npx create-next-app@latest portfolio --typescript --tailwind --app --src-dir=false
cd portfolio
npx shadcn@latest init                 # generates components.json + lib/utils
npm i gsap uuid motion lucide-react clsx tailwind-merge tw-animate-css
mkdir -p components/ui hooks
```

Then copy the components from this repo into `components/ui` and the
`/root` tokens + kinetic-nav stylesheet from `app/globals.css`.
