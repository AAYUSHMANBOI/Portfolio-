"use client";

import { useEffect, useState } from "react";
import { CursorDrivenParticleTypography } from "@/components/ui/cursor-driven-particle-typography";

/**
 * The hero AAYUSHMAN particle name. The typography component takes a numeric
 * fontSize (it is measured by canvas, not CSS), so we derive a viewport-aware
 * size here and re-measure on resize.
 */
export function HeroParticleName() {
  const [fontSize, setFontSize] = useState(170);

  useEffect(() => {
    const update = () =>
      setFontSize(
        Math.min(170, Math.max(42, Math.round(window.innerWidth * 0.112)))
      );
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <CursorDrivenParticleTypography
      text="AAYUSHMAN"
      fontSize={fontSize}
      particleSize={1.8}
      particleDensity={5}
      className="absolute inset-0 touch-pan-y"
    />
  );
}
