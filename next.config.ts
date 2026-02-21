import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.escuelajs.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placeimg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.lorem.space",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pravatar.cc",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
