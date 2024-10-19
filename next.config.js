const path = require("path");
const withLinaria = require("next-with-linaria");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack: (config) => {
    config.resolve.alias["@"] = path.join(__dirname, "src");
    config.resolve.alias.canvas = false;
    config.resolve.fallback = { fs: false };
    config.module.rules.push({
      test: /\.md$/i,
      use: "raw-loader",
    });
    return config;
  },

  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "max-age=600",
          },
        ],
      },
    ];
  },

  sassOptions: {
    prependData: `@import "${path.resolve(
      __dirname,
      "src/const/styles.scss"
    )}";`,
  },
};

module.exports = withLinaria(nextConfig);
