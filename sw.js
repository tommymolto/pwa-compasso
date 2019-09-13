/*if(navigator.serviceWorker){
    navigator.serviceWorker.register('/sw.js',{
        scope:'/'
    }).then(function(reg){
        console.log('Funcionou');
    }).catch(function(err){
        console.log('ERRO!');
    })


}*/
const inicioCache = 'pwa-compasso';
const staticCacheName = inicioCache + '-v5.1';
const urlsToCache = [
    '/styles/ud811.css',
    '/images/clear.png',
    '/images/cloudy.png',
    '/images/cloudy-scattered-showers.png',
    '/images/cloudy_s_sunny.png',
    '/images/dr-evil.gif',
    '/images/fog.png',
    '/images/ic_add_white_24px.svg',
    '/images/ic_refresh_white_24px.svg',
    '/images/partly-cloudy.png',
    '/images/rain.png',
    '/images/scattered-showers.png',
    '/images/sleet.png',
    '/images/snow.png',
    '/images/thunderstorm.png',
    '/images/wind.png',
    '/favicon.ico',
    '/scripts/app.js',
    '/scripts/localforage-1.4.0.js'
];
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(staticCacheName).then(function(cache) {
            return cache.addAll(urlsToCache);
        })
    );
});
/*self.addEventListener('fetch', function(event) {
    if (event.request.url.endsWith('.jpg') || event.request.url.endsWith('.gif') || event.request.url.endsWith('.png')) {
        event.respondWith(
            fetch('/images/dr-evil.gif')
        );
    }

});*/
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    return cacheName.startsWith(inicioCache) &&
                        cacheName != staticCacheName;
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
self.addEventListener('message', function (event) {
    if (event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});
