import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[new URL("https://github.com/shadcn.png")]
  }
};

export default nextConfig;
