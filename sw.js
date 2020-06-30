const CACHE_NAME = "dennohpeter_v" + new Date().getTime();
// Files to cache
const FILES_TO_CACHE = [
  "/index.html",
  "/about/index.html",
  "/blog/index.html",
  "/blog/getting-started-with-static-site-generators-python/index.html",
  "/tools/index.html",
  "/projects/index.html",
  "/assets/index.css",
  "/assets/base.js",
  "/assets/iconify.css",
  "/assets/blog.css",
  "/assets/blog-details.js",
  "/assets/blog.js",
  "/assets/projects.css",
  "/assets/fonts/portfolio-v5.eot",
  "/assets/fonts/portfolio-v5.svg",
  "/assets/fonts/portfolio-v5.ttf",
  "/assets/fonts/portfolio-v5.woff",
  "/assets/images/placeholder.png",
  "/assets/images/preview.png",
  "/assets/images/static_websites.png",
  "/assets/images/renew_data.png",
  "/assets/images/daily_tips.png",
  "/assets/favicon/android-chrome-192x192.png",
  "/assets/favicon/android-chrome-512x512.png",
  "/assets/favicon/apple-touch-icon.png",
  "/assets/favicon/browserconfig.xml",
  "/assets/favicon/favicon-16x16.png",
  "/assets/favicon/favicon-32x32.png",
  "/assets/favicon/favicon.ico",
  "/assets/favicon/mstile-150x150.png",
  "/assets/favicon/safari-pinned-tab.svg",
  "/assets/favicon/manifest.json",
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
  evt.respondWith(
    caches.match(evt.request).then(function (response) {
      return response || fetch(evt.request);
    })
  );
});
