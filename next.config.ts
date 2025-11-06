import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.marblecms.com",
      },
      {
        protocol: "https",
        hostname: "koz5ylkurb.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
