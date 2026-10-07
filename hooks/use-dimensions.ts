"use client";

import { useEffect, useState, type RefObject } from "react";

export interface Dimensions {
  width: number;
  height: number;
}

/**
 * Measures an element with a ResizeObserver and keeps the result in state.
 * Used by visual effects (e.g. PixelTrail) that need to know their
 * container's pixel size.
 */
export function useDimensions(ref: RefObject<HTMLElement | null>): Dimensions {
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 0, height: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const update = () => {
      const rect = element.getBoundingClientRect();
      setDimensions({ width: rect.width, height: rect.height });
    };

    update();

    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(element);

    return () => resizeObserver.disconnect();
  }, [ref]);

  return dimensions;
}
