/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "brandslogos.com",
      },
    ],
  },
};

module.exports = nextConfig;
