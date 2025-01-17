const path = require("path");
const withPWA = require("next-pwa");
const isProd = process.env.NODE_ENV === "production";

module.exports = withPWA({
  swcMinify: true,
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  i18n: {
    locales: ["en-US", "pt-BR", "en"],
    defaultLocale: "pt-BR",
    localeDetection: false,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  pwa: {
    dest: "public",
    disable: !isProd,
  },
  images: {
    domains: ["pbs.twimg.com", "bit.ly"],
  },
});
