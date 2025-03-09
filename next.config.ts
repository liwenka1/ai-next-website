import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**" // 通配符允许所有域名
      }
    ]
  }
};

export default nextConfig;
