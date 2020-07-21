import os


def filesListFrom(folder):
    """
      Takes a folder name and returns a list of the files in it

      >> filesListFrom('public')
      ['/index.html',  '/about/index.html',...]

    """
    filesList = ['/', ]
    for root, dirs, files in os.walk(folder):
        for file in files:
            path = os.path.join(root, file)
            filesList.append(path.replace(folder, '', 1))
    return filesList


FOLDER = 'public'
FILES = filesListFrom(FOLDER)

try:
    FILES.remove('/sw.js')
except ValueError:
    pass

part_1 = f"""const CACHE_NAME = "dennohpeter_v" + new Date().getTime();
// Files to cache
const FILES_TO_CACHE = {FILES};
"""

part_2 = """
/* Start the service worker and cache all of the app's content */
self.addEventListener("install", (evt) => {
  evt.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(FILES_TO_CACHE);
    })
    .catch(err => console.log(err))
  );
});
// Remove previous cached data from disk.
self.addEventListener("activate", (evt) => {
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache', key);
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
    caches
        .open(CACHE_NAME)
        .then((cache) => {
            return cache.match('evt.request')
        .then((response) => {
            return response || fetch(evt.request);
          })
        .catch((err) => {
            console.log(err);
        });
    })
  );
});
"""

# generate a sw.js

file = f'{FOLDER}/sw.js'
with open(file, 'w') as f:
    content = f'{part_1}\n{part_2}'

    f.write(content)
    f.close()
