import type { Metadata } from "next";
import "./globals.css";
import SiteLoader from "@/components/site-loader";
import ThemeToggle from "@/components/theme-toggle";

export const metadata: Metadata = {
  title: "Aayushman Chandra — UI/UX Enthusiast & Creative Developer",
  description:
    "Portfolio of Aayushman Chandra — Class 11 PCM student, UI/UX enthusiast, Arsenal supporter and future founder. “What if we could make this better?”",
};

// Runs before first paint: restores the saved theme (or the OS preference)
// by toggling .dark on <html>, so there is no flash of the wrong theme.
const THEME_BOOTSTRAP = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d);}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP }} />
        <SiteLoader />
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}
