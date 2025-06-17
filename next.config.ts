import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fitronansori.github.io",
      },
    ],
  },
  basePath: process.env.NODE_ENV === "production" ? "/next-cemilankita" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/next-cemilankita" : "",
};

export default nextConfig;
