/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
      },
      {
        hostname: "www.pngall.com",
      },
      {
        hostname: "moelist.online",
      },
    ],
  },
};

module.exports = nextConfig;
