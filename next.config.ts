import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/ca2-web',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
