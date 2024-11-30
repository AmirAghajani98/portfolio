/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config.js");

const nextConfig = {
  images: {
    unoptimized: true,
  },

  reactStrictMode: true,

  i18n,

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        crypto: false,
        os: false,
        http: false,
        https: false,
        stream: false,
      };
    }
    return config;
  },

  devIndicators: {
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  },

  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
