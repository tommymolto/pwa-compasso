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
    '/pwa-compasso/styles/ud811.css',
    '/pwa-compasso/images/clear.png',
    '/pwa-compasso/images/cloudy.png',
    '/pwa-compasso/images/cloudy-scattered-showers.png',
    '/pwa-compasso/images/cloudy_s_sunny.png',
    '/pwa-compasso/images/dr-evil.gif',
    '/pwa-compasso/images/fog.png',
    '/pwa-compasso/images/ic_add_white_24px.svg',
    '/pwa-compasso/images/ic_refresh_white_24px.svg',
    '/pwa-compasso/images/partly-cloudy.png',
    '/pwa-compasso/images/rain.png',
    '/pwa-compasso/images/scattered-showers.png',
    '/pwa-compasso/images/sleet.png',
    '/pwa-compasso/images/snow.png',
    '/pwa-compasso/images/thunderstorm.png',
    '/pwa-compasso/images/wind.png',
    '/pwa-compasso/favicon.ico',
    '/pwa-compasso/scripts/app.js',
    '/pwa-compasso/scripts/localforage-1.4.0.js'
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
function urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}
self.addEventListener('push', function(event) {
    console.log('[Service Worker] Push Received.');
    console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

    const title = 'Push Codelab';
    const options = {
        body: event.data.text(),
        icon: 'images/clear.png',
        badge: 'images/fog.png'
    };

    event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', function(event) {
    console.log('[Service Worker] Notification click Received.');

    event.notification.close();

    event.waitUntil(
        clients.openWindow('http://compasso.ninja/')
    );
});

self.addEventListener('pushsubscriptionchange', function(event) {
    console.log('[Service Worker]: \'pushsubscriptionchange\' event fired.');
    const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
    event.waitUntil(
        self.registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: applicationServerKey
        })
            .then(function(newSubscription) {
                // TODO: Send to application server
                console.log('[Service Worker] New subscription: ', newSubscription);
            })
    );
});
