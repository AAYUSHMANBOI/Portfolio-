import { Component as SterlingGateNav } from "@/components/ui/sterling-gate-kinetic-navigation";
import PolaroidLineCarousel, {
  type Slide,
} from "@/components/ui/polaroid-line-carousel";
import { CursorDrivenParticleTypography } from "@/components/ui/cursor-driven-particle-typography";
import {
  Link000,
  Link001,
  Link002,
  Link003,
  Link004,
  Link005,
} from "@/components/ui/animated-links";
import PlaygroundSection from "@/components/playground-section";

// Real landscape photography (Unsplash) for the polaroid prints.
const U = (id: string) =>
  "https://images.unsplash.com/photo-" + id + "?q=80&w=1800&auto=format&fit=crop";

const WORK_SLIDES: Slide[] = [
  {
    image: U("1506905925346-21bda4d32df4"),
    title: "Above the Clouds",
    caption: "Valais, Switzerland — sunrise at 3,100 m.",
  },
  {
    image: U("1501785888041-af3ef285b470"),
    title: "Glass Lake",
    caption: "Lago di Braies, a rowboat at noon.",
  },
  {
    image: U("1469474968028-56623f02e42e"),
    title: "Gold Valley",
    caption: "Late light pouring over the ridge.",
  },
  {
    image: U("1464822759023-fed622ff2c3b"),
    title: "Snow Line",
    caption: "Pines, river flats and the high range.",
  },
  {
    image: U("1500534314209-a25ddb2bd429"),
    title: "Blue Ridges",
    caption: "Seven layers of haze before dusk.",
  },
  {
    image: U("1433086966358-54859d0ed716"),
    title: "Falls Bridge",
    caption: "Multnomah Falls after the rain.",
  },
];

export default function Home() {
  return (
    <main id="home" className="relative">
      {/* Kinetic fullscreen navigation (GSAP) */}
      <SterlingGateNav />

      {/* Hero — cursor-reactive particle typography */}
      <section className="relative flex h-[100svh] w-full flex-col">
        <CursorDrivenParticleTypography
          text="AAYUSHMAN"
          fontSize={170}
          particleSize={1.8}
          particleDensity={5}
          className="flex-1"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between px-6 pb-8 md:px-12">
          <p className="max-w-xs text-sm leading-relaxed text-neutral-500">
            Creative developer crafting kinetic interfaces &amp; expressive web
            experiences.
          </p>
          <p className="hidden text-right text-xs uppercase tracking-[0.3em] text-neutral-400 md:block">
            Move your cursor — scatter me
          </p>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="mx-auto w-full max-w-[1400px] px-6 py-28 md:px-12 md:py-40"
      >
        <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
          About
        </p>
        <h2 className="mt-6 max-w-5xl font-serif text-3xl leading-snug font-medium tracking-tight sm:text-4xl md:text-6xl">
          I build interfaces that feel alive — blending motion design,
          typography and code into experiences worth remembering.
        </h2>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase">
              Motion first
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500">
              GSAP, springs and physics-based easing — every interaction earns
              its frames.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase">
              Design systems
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500">
              shadcn-style component architecture with Tailwind — consistent,
              accessible, fast.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase">
              Full stack
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500">
              Next.js and TypeScript end to end — from canvas experiments to
              production apps.
            </p>
          </div>
        </div>
      </section>

      {/* Work — polaroid line carousel */}
      <section id="work" className="relative">
        <PolaroidLineCarousel
          slides={WORK_SLIDES}
          ariaLabel="Selected work — photography prints"
        />
      </section>

      {/* Playground — pixel trail */}
      <PlaygroundSection />

      {/* Contact — skiper40 animated links */}
      <section
        id="contact"
        className="bg-dark px-6 py-28 text-neutral-100 md:px-12 md:py-40"
      >
        <div className="mx-auto w-full max-w-[1400px]">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">
            Contact
          </p>
          <h2 className="mt-6 font-serif text-4xl font-medium tracking-tight sm:text-5xl md:text-7xl">
            Let&apos;s make something{" "}
            <span className="text-primary">interesting</span>
          </h2>

          <div className="mt-16 flex flex-col items-start gap-6 text-2xl font-medium sm:text-3xl md:gap-8 md:text-5xl">
            <Link001
              href="mailto:hi@aayushman.dev"
              className="text-neutral-100"
            >
              hi@aayushman.dev
            </Link001>
            <Link002
              href="https://github.com/AAYUSHMANBOI"
              className="text-neutral-100"
            >
              GitHub
            </Link002>
            <Link003
              href="https://x.com"
              className="text-neutral-100"
            >
              Twitter / X
            </Link003>
            <Link004
              href="https://www.linkedin.com"
              className="text-neutral-100"
            >
              LinkedIn
            </Link004>
            <Link005
              href="mailto:hi@aayushman.dev"
              className="text-neutral-100"
            >
              Book a call
            </Link005>
          </div>

          <footer className="mt-28 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between">
            <span>© 2026 Aayushman — All rights reserved</span>
            <Link000
              href="#home"
              className="w-fit text-neutral-400 hover:text-neutral-100"
            >
              Back to top ↑
            </Link000>
            <span>Built with Next.js · Tailwind CSS · GSAP</span>
          </footer>
        </div>
      </section>
    </main>
  );
}
