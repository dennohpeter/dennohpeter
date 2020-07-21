const workbox = require("workbox-build");

workbox.generateSW({
  cacheId: "dennohpeter",
  globDirectory: "public",
  globPatterns: ["**/*.{css,js}"],

  swDest: "public/sw.js",
  runtimeCaching: [
    {
      urlPattern: /\.(?:html|xml)$/,
      handler: "StaleWhileRevalidate",
    },
    {
      urlPattern: /\.(?:png|jpg|jpeg|webp|svg|gif)$/,
      handler: "StaleWhileRevalidate",
    },
    {
      urlPattern: /\.(?:ttf|tiff|woff|woff2|json)$/,
      handler: "StaleWhileRevalidate",
    },
  ],
});
