import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "foaclothing.com",
        pathname: "/cdn/shop/**",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/s/files/**",
      },
      {
        protocol: "https",
        hostname: "static.mintpay.lk",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "paykoko.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
