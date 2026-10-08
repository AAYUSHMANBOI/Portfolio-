"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Floating dark-mode switch. Toggles the `.dark` class on <html> and
 * persists the choice to localStorage (bootstrapped pre-paint by the
 * inline script in app/layout.tsx).
 */
export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* ignore */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
      className="fixed right-6 bottom-6 z-[80] flex size-11 cursor-pointer items-center justify-center rounded-full border border-foreground/15 bg-background/80 text-foreground shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-foreground/30"
    >
      <span className="relative block size-4">
        <Sun
          className={`absolute inset-0 size-4 transition-all duration-500 ${
            dark ? "scale-100 rotate-0 opacity-100" : "scale-50 -rotate-90 opacity-0"
          }`}
        />
        <Moon
          className={`absolute inset-0 size-4 transition-all duration-500 ${
            dark ? "scale-50 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
          }`}
        />
      </span>
    </button>
  );
}
