import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/paket-tour/:path*",
        destination: "/packages/:path*",
        permanent: true,
      },
      {
        source: "/artikel/:path*",
        destination: "/articles/:path*",
        permanent: true,
      },
      {
        source: "/tentang",
        destination: "/about-us",
        permanent: true,
      },
    ];
  },
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
