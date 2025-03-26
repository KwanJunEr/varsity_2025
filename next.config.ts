import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify:true,
  images:{
    remotePatterns:[
      {
        hostname:'images.unsplash.com'
      }
    ]
  }
  /* config options here */
};

export default nextConfig;
