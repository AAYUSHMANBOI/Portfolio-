import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow the sandboxed preview proxy to reach the dev server / HMR
  allowedDevOrigins: ["e2b.app", "*.e2b.app"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
