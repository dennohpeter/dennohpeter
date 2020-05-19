const CACHE_NAME = "dennohpeter_v" + new Date().getTime();
// Files to cache
const FILES_TO_CACHE = [
  "/public/index.html",
  "/public/sw.js",
  "/public/about/index.html",
  "/public/blog/index.html",
  "/public/blog/getting-started-with-static-site-generators-python/index.html",
  "/public/tools/index.html",
  "/public/projects/index.html",
  "/public/assets/index.css",
  "/public/assets/base.js",
  "/public/assets/iconify.css",
  "/public/assets/blog.css",
  "/public/assets/blog-details.js",
  "/public/assets/blog.js",
  "/public/assets/fonts/portfolio-v5.eot",
  "/public/assets/fonts/portfolio-v5.svg",
  "/public/assets/fonts/portfolio-v5.ttf",
  "/public/assets/fonts/portfolio-v5.woff",
  "/public/assets/images/placeholder.png",
  "/public/assets/images/preview.png",
  "/public/assets/images/static_websites.png",
  "/public/assets/images/mobile/daily_tips.png",
  "/public/assets/images/mobile/renew_data.png",
  "/public/assets/images/regular/daily_tips.png",
  "/public/assets/images/regular/renew_data.png",
  "/public/assets/images/tablet-landscape/daily_tips.png",
  "/public/assets/images/tablet-landscape/renew_data.png",
  "/public/assets/images/tablet-potrait/daily_tips.png",
  "/public/assets/images/tablet-potrait/renew_data.png",
  "/public/assets/images/very-large/daily_tips.png",
  "/public/assets/images/very-large/renew_data.png",
  "/public/assets/favicon/android-chrome-192x192.png",
  "/public/assets/favicon/android-chrome-512x512.png",
  "/public/assets/favicon/apple-touch-icon.png",
  "/public/assets/favicon/browserconfig.xml",
  "/public/assets/favicon/favicon-16x16.png",
  "/public/assets/favicon/favicon-32x32.png",
  "/public/assets/favicon/favicon.ico",
  "/public/assets/favicon/mstile-150x150.png",
  "/public/assets/favicon/safari-pinned-tab.svg",
  "/public/assets/favicon/manifest.json",
];

/* Start the service worker and cache all of the app's content */
self.addEventListener("install", (evt) => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});
// Remove previous cached data from disk.
self.addEventListener("activate", (evt) => {
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});
/* Serve cached content when offline */
self.addEventListener("fetch", function (evt) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
