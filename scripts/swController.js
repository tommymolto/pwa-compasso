let newWorker;
let refreshing;

// The click event on the notification
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('reload').addEventListener('click', function () {
        newWorker.postMessage({action: 'skipWaiting'});
    });
}, false);



if ('serviceWorker' in navigator) {
    // Register the service worker
    navigator.serviceWorker.register('sw.js', '/pwa-compasso/').then(reg => {
        reg.addEventListener('updatefound', () => {
            // An updated service worker has appeared in reg.installing!
            newWorker = reg.installing;
            newWorker.addEventListener('statechange', () => {
                // Has service worker state changed?
                switch (newWorker.state) {
                    case 'installed':
                        // There is a new service worker available, show the notification
                        if (navigator.serviceWorker.controller) {
                            console.log('tem coisa nova por ai');
                            let notification = document.getElementById('reload');
                            notification.style.display='inline';
                        }
                        break;
                }
            });
        });
    });
    navigator.serviceWorker.addEventListener('controllerchange', function () {
        if (refreshing) return;
        window.location.reload();
        refreshing = true;
    });
}
// The event listener that is fired when the service worker updates
// Here we reload the page

