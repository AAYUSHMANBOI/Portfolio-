"use client";

import { useEffect, useState } from "react";

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export type Breakpoint = keyof typeof breakpoints;

export interface ScreenSize {
  width: number;
  height: number;
  lessThan: (breakpoint: Breakpoint) => boolean;
  greaterThan: (breakpoint: Breakpoint) => boolean;
}

/**
 * Live viewport size with Tailwind-breakpoint helpers.
 */
export default function useScreenSize(): ScreenSize {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const update = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return {
    ...size,
    lessThan: (breakpoint) => size.width < breakpoints[breakpoint],
    greaterThan: (breakpoint) => size.width > breakpoints[breakpoint],
  };
}
