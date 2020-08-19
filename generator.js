const workbox = require("workbox-build");

workbox.generateSW({
  cacheId: "dennohpeter",
  globDirectory: "public",
  globPatterns: ["**/*.{html,js,xml}"],
  swDest: "public/sw.js",
  runtimeCaching: [
    {
      urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|ico|gif)$/,
      handler: "StaleWhileRevalidate",
    },
    {
      urlPattern: /^https?:.*\.(ttf|tiff|woff|woff2|eot|json)$/,
      handler: "StaleWhileRevalidate",
    },
    {
      urlPattern: /^https?:\/\/p.typekit\.net\/p\.css/,
      handler: "StaleWhileRevalidate",
    },
  ],
  skipWaiting: true,
  clientsClaim: true,
  offlineGoogleAnalytics: true
});