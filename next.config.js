const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    config.module.rules.push({
      test: /\.md$/i,
      use: 'raw-loader',
    });
    return config;
  },
};

module.exports = nextConfig;
