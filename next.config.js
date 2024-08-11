/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  reactStrictMode: true,
};

module.exports = nextConfig;

const nextTranslate = require("next-translate-plugin");

module.exports = nextTranslate({
  webpack: (config, { isServer, webpack }) => {
    return config;
  },
});
