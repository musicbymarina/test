const cacheName = 'v1';

const cacheFiles = [
'/', 
'/index.html', 
'/html/about.html', 
'/html/offline.html', 
'/html/lost.html',
'/html/contact.html', 
'/html/electronic.html', 
'/html/press.html', 
'/html/rock.html',
'/css/about.css', 
'/css/contact.css', 
'/css/imagesHome.css', 
'/css/portofolio.css', 
'/css/press.css', 
'/css/style.css',
'/javascript/about.js', 
'/javascript/contact.js', 
'/javascript/json.json', 
'/javascript/images.js', 
'/javascript/electronic.js', 
'/javascript/images.js', 
'/javascript/index.js', 
'/javascript/menu.js', 
'/javascript/portofolio.js', 
'/javascript/press.js', 
'/javascript/rock.js',
'/images/', 
'/images/about/', 
'/images/contact/', 
'images/works/',
 'manifest.json',
 '/images/icon.png'
];

self.addEventListener('install', event => {
    console.log('[ServiceWorker] Installed');
    event.waitUntil(
      caches.open(cacheName).then(cache => {
      console.log('[ServiceWorker] Caching cacheFiles');
      return cache.addAll(cacheFiles);
      })
  ); 
});

self.addEventListener('activate', event => {
  console.log('[ServiceWorker] Activated');

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(cacheNames.map(thisCacheName => {
        if (thisCacheName !== cacheName) {
          console.log('[ServiceWorker] Removing Cached Files from Cache - ', thisCacheName);
          return caches.delete(thisCacheName);
        }
      }));
    })
  );
});

self.addEventListener('fetch', event => {
  console.log('[ServiceWorker] Fetch event now', event.request.url);

  event.respondWith(
    caches.open(cacheName).then(cache => {
      return cache.match(event.request).then(response => {
        console.log("[ServiceWorker] Found in Cache", event.request.url, response);
        return response || fetch(event.request).then(response => {
          console.log('[ServiceWorker] not Found in Cache, need to search in the network', event.request.url);
          cache.put(event.request, response.clone());
          console.log('[ServiceWorker] New Data Cached', event.request.url);
          return response;
        });
      });
    })
  );
});