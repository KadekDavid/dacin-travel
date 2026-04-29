import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dh1vnkssv/image/upload/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
