"use client";

import { useEffect, useState } from "react";
import { Component as CubeLoader } from "@/components/ui/loader-3";
import { cn } from "@/lib/utils";

const INTRO_VISIBLE_MS = 2600; // one full cube-loop before fading
const INTRO_FADE_MS = 700;

/**
 * Full-screen intro overlay shown once per session — the 3D cube loader with
 * the brand thought, fading out into the page.
 */
export default function SiteLoader() {
  const [done, setDone] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    let t1: ReturnType<typeof setTimeout> | undefined;
    let t2: ReturnType<typeof setTimeout> | undefined;

    try {
      if (sessionStorage.getItem("intro-complete") === "1") {
        setDone(true);
        return;
      }
    } catch {
      /* sessionStorage unavailable — play the intro */
    }

    document.documentElement.style.overflow = "hidden";

    t1 = setTimeout(() => setFading(true), INTRO_VISIBLE_MS);
    t2 = setTimeout(() => {
      setDone(true);
      document.documentElement.style.overflow = "";
      try {
        sessionStorage.setItem("intro-complete", "1");
      } catch {
        /* ignore */
      }
    }, INTRO_VISIBLE_MS + INTRO_FADE_MS);

    return () => {
      if (t1) clearTimeout(t1);
      if (t2) clearTimeout(t2);
      document.documentElement.style.overflow = "";
    };
  }, []);

  if (done) return null;

  return (
    <div
      aria-hidden={fading}
      className={cn(
        "fixed inset-0 z-[90] flex flex-col items-center justify-center gap-8 bg-[#131313] transition-opacity duration-700 ease-out",
        fading ? "pointer-events-none opacity-0" : "opacity-100",
      )}
      style={{ "--clr": "#ffffff", "--loader-mask": "#131313" } as React.CSSProperties}
    >
      <CubeLoader />
      <div className="flex flex-col items-center gap-3 text-center">
        <p className="text-[11px] uppercase tracking-[0.45em] text-white/50">
          Aayushman Chandra
        </p>
        <p className="font-serif text-lg italic text-white/85 md:text-xl">
          &ldquo;What if we could make this better?&rdquo;
        </p>
      </div>
    </div>
  );
}
