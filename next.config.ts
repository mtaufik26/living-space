import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/living-space",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
