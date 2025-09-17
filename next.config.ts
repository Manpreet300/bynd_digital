import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   reactStrictMode: true,
  images: {
    domains: ['picsum.photos'], // add any external domains you use
  },
};

export default nextConfig;

