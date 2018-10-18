const cacheFiles = [
'/', 
'index.html',
'/html/offline.html',
'/html/lost.html',
'/css/style.css',
'/javascript/index.js',
'/javascript/menu.js',
'images/',
'/javascript/',
'/css/',
'/html/'
];

const cacheName = 'v5';

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
    caches.open(cacheName)
    .then(cache => {
      	return cache.match(event.request)
      	.then(response => {
        	console.log("[ServiceWorker] Found in Cache", event.request.url, response);
        	return response || fetch(event.request)
        						.then(response => {
                      if(response.status === 404){
                        return cache.match('/html/lost.html')
                      }
          							console.log('[ServiceWorker] not Found in Cache, need to search in the network', event.request.url);
          							cache.put(event.request, response.clone());
          							console.log('[ServiceWorker] New Data Cached', event.request.url);
          							return response;
        						});
      	}).catch((error)=>{
      		return cache.match('/html/offline.html');
      	})
    })
  );
});