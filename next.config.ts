import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/3d_printing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
