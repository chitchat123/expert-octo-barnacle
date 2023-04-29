/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    // typedRoutes: true,
  },
  images: {
    domains: ['images.pexels.com'],
  },
};

module.exports = nextConfig;
