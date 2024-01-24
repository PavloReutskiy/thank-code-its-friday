/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thank-code-strapi-84mp2.ondigitalocean.app',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '1337',
      },
    ],
    domains: ['thank-code-strapi-84mp2.ondigitalocean.app', '127.0.0.1:1337'],
  },
};

module.exports = nextConfig;
