"use client";

import useScreenSize from "@/hooks/use-screen-size";
import PixelTrail from "@/components/ui/pixel-trail";

export default function PlaygroundSection() {
  const screenSize = useScreenSize();

  return (
    <section
      id="playground"
      className="relative h-[100svh] w-full overflow-hidden bg-dark text-neutral-100"
    >
      <div className="absolute inset-0 z-0">
        <PixelTrail
          pixelSize={screenSize.lessThan("md") ? 16 : 24}
          fadeDuration={500}
          pixelClassName="bg-white"
        />
      </div>

      <div className="pointer-events-none relative z-10 flex h-full w-full flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">
          Playground
        </p>
        <h2 className="max-w-4xl font-serif text-4xl font-medium tracking-tight sm:text-5xl md:text-7xl">
          Paint pixels with your cursor
        </h2>
        <p className="max-w-md text-sm text-neutral-400 md:text-base">
          A grid of light that remembers where you&apos;ve been — move across
          the room and leave a trail behind you.
        </p>
      </div>
    </section>
  );
}
