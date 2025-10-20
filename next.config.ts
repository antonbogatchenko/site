import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static HTML export for GitHub Pages
  output: "export",
  // GitHub Pages does not support on-the-fly image optimization
  images: {
    unoptimized: true,
  },
  // Optional but helps with relative asset paths on some setups
  trailingSlash: true,
};

export default nextConfig;
