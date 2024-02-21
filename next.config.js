/** @type {import('next').NextConfig} */
const isLocal = process.env.NODE_ENV === 'development';

const nextConfig = {
  images: {
    remotePatterns: isLocal
      ? [
        {
          protocol: 'http',
          hostname: '127.0.0.1',
          port: '1337',
        },
      ]
      : [
        {
          protocol: 'https',
          hostname: 'thank-code-its-friday-space.fra1.digitaloceanspaces.com',
        },
      ],
    domains: ['thank-code-its-friday-space.fra1.digitaloceanspaces.com', '127.0.0.1:1337'],
  },
};

module.exports = nextConfig;
