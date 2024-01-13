/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thank-code-strapi-84mp2.ondigitalocean.app',
      },
    ],
    domains: ['thank-code-strapi-84mp2.ondigitalocean.app'],
  },
};

module.exports = nextConfig;
