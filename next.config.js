const path = require('path');
const withLinaria = require('next-with-linaria');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    instrumentationHook: true,
  },

  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    config.module.rules.push({
      test: /\.md$/i,
      use: 'raw-loader',
    });
    return config;
  },
};

module.exports = withLinaria(nextConfig);
