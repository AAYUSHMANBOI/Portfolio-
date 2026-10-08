import ImmersiveFullscreenNav from "@/components/ui/immersive-full-screen-nav";
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

const U = (id: string, w = 1800) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

// Photography for the polaroid prints — terraces, football and design desks.
const WORK_SLIDES: Slide[] = [
  {
    image: U("1522778119026-d647f0596c20"),
    title: "Matchnight Lights",
    caption: "Floodlights on — the best kind of Friday night.",
  },
  {
    image: U("1551958219-acbc608c6377"),
    title: "Keepy-Uppy",
    caption: "Ten thousand touches before the first whistle.",
  },
  {
    image: U("1506905925346-21bda4d32df4"),
    title: "Above the Clouds",
    caption: "Valais, Switzerland — sunrise at 3,100 m.",
  },
  {
    image: U("1498050108023-c5249f4df085"),
    title: "Ship It",
    caption: "Where most of my ideas start — a blank editor.",
  },
  {
    image: U("1561070791-2526d30994b5"),
    title: "Design Desk",
    caption: "Pixels, grids and a healthy obsession with type.",
  },
  {
    image: U("1574629810360-7efbbe195018"),
    title: "Home End",
    caption: "Seats that hold sixty thousand opinions.",
  },
];

export default function Home() {
  return (
    <main id="home" className="relative">
      {/* Immersive clip-path navigation — Arsenal red, of course */}
      <ImmersiveFullscreenNav
        navConfig={{
          brand: "Aayushman Chandra",
          brandHref: "#home",
          clipOrigin: "bottom",
          overlayBg: "#ef0107",
          headerOpenColor: "#ffffff",
          openDuration: 1.2,
          closeDuration: 1.2,
        }}
        navContent={{
          agencyName: "Aayushman Chandra",
          tagline: "Design. Code. Football.",
          location: "Patna, India",
          links: [
            { label: "Home", href: "#home" },
            { label: "About", href: "#about" },
            { label: "Projects", href: "#work" },
            { label: "Playground", href: "#playground" },
            { label: "Contact", href: "#contact" },
          ],
          images: [
            U("1522778119026-d647f0596c20", 1200),
            U("1551958219-acbc608c6377", 1200),
            U("1498050108023-c5249f4df085", 1200),
            U("1574629810360-7efbbe195018", 1200),
          ],
          socials: [
            { type: "github", href: "https://github.com/AAYUSHMANBOI" },
            { type: "instagram", href: "#" },
            { type: "twitter", href: "#" },
            { type: "linkedin", href: "#" },
          ],
        }}
      />

      {/* Hero — cursor-reactive particle typography + the central thought */}
      <section className="relative flex h-[100svh] w-full flex-col items-center justify-center">
        <CursorDrivenParticleTypography
          text="AAYUSHMAN"
          fontSize={170}
          particleSize={1.8}
          particleDensity={5}
          className="absolute inset-0 touch-pan-y"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-16 flex flex-col items-center gap-4 px-6 text-center">
          <p className="font-serif text-2xl italic tracking-tight sm:text-3xl md:text-4xl">
            &ldquo;What if we could make this better?&rdquo;
          </p>
          <p className="text-[11px] uppercase tracking-[0.4em] text-foreground/50">
            The thought behind everything I build
          </p>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-28 text-center md:py-40"
      >
        <p className="text-xs uppercase tracking-[0.35em] text-foreground/50">
          About me
        </p>
        <h2 className="mt-6 font-serif text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
          Hi, I&rsquo;m Aayushman Chandra.
        </h2>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-foreground/70 md:text-lg">
          A Class 11 PCM student, football enthusiast, and someone who loves
          turning ideas into things people can actually use. I&rsquo;m deeply
          interested in technology, coding, UI/UX and innovation — and I enjoy
          experimenting with projects that combine creativity with
          problem-solving.
        </p>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/70 md:text-lg">
          Outside tech, you&rsquo;ll usually find me following football and
          supporting <span className="font-semibold text-primary">Arsenal</span>.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {["Class 11 · PCM", "⚽ Gunner for life", "UI/UX Design", "Tech & Innovation"].map(
            (chip) => (
              <span
                key={chip}
                className="rounded-full border border-foreground/10 bg-foreground/5 px-4 py-1.5 text-xs tracking-wide"
              >
                {chip}
              </span>
            ),
          )}
        </div>

        <figure className="mt-24 flex max-w-3xl flex-col items-center md:mt-32">
          <blockquote className="font-serif text-2xl leading-snug font-medium tracking-tight text-balance sm:text-3xl md:text-4xl">
            &ldquo;I&rsquo;m not just interested in learning how technology
            works — <span className="text-primary">I want to build what comes next.</span>&rdquo;
          </blockquote>
          <figcaption className="mt-8 max-w-xl text-sm leading-relaxed text-foreground/60 md:text-base">
            My long-term ambition is to create a company that brings together
            consumer electronics, IT, mobile communications and smart
            technology. Because for me, every big idea starts with one simple
            question: <em>what if we could make this better?</em>
          </figcaption>
        </figure>
      </section>

      {/* Work — polaroid line carousel */}
      <section id="work" className="relative">
        <PolaroidLineCarousel
          slides={WORK_SLIDES}
          ariaLabel="Selected moments — photography prints"
        />
      </section>

      {/* Playground — pixel trail */}
      <PlaygroundSection />

      {/* Contact — skiper40 animated links, centred */}
      <section
        id="contact"
        className="bg-dark px-6 py-28 text-neutral-100 md:px-12 md:py-40"
      >
        <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">
            Contact
          </p>
          <h2 className="mt-6 font-serif text-4xl font-medium tracking-tight sm:text-5xl md:text-7xl">
            Let&rsquo;s make something{" "}
            <span className="text-primary">better</span>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-neutral-400">
            An idea, a project, a question about UI/UX — or just Arsenal talk.
            My inbox is open.
          </p>

          <div className="mt-16 flex flex-col items-center gap-6 text-2xl font-medium sm:text-3xl md:gap-8 md:text-5xl">
            <Link001 href="mailto:hi@aayushman.dev" className="text-neutral-100">
              hi@aayushman.dev
            </Link001>
            <Link002
              href="https://github.com/AAYUSHMANBOI"
              className="text-neutral-100"
            >
              GitHub
            </Link002>
            <Link003 href="https://x.com" className="text-neutral-100">
              Twitter / X
            </Link003>
            <Link004 href="https://www.linkedin.com" className="text-neutral-100">
              LinkedIn
            </Link004>
            <Link005 href="mailto:hi@aayushman.dev" className="text-neutral-100">
              Book a call
            </Link005>
          </div>

          <footer className="mt-28 flex w-full flex-col items-center gap-4 border-t border-white/10 pt-8 text-xs text-neutral-500 md:flex-row md:justify-between">
            <span>© 2026 Aayushman Chandra — All rights reserved</span>
            <Link000
              href="#home"
              className="w-fit text-neutral-400 hover:text-neutral-100"
            >
              Back to top ↑
            </Link000>
            <span>Design. Code. Football. 🔴⚪</span>
          </footer>
        </div>
      </section>
    </main>
  );
}
