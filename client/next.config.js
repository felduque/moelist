/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "apix.moelist.online",
      },
      /* para que sirve cuando uno anda desarrollando */
      {
        hostname: "www.pngall.com",
      },
      {
        hostname: "localhost",
      },
    ],
  },
};

module.exports = nextConfig;
