import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aayushman — Creative Developer Portfolio",
  description:
    "Portfolio of Aayushman, a creative developer crafting kinetic interfaces, playful interactions and expressive web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
