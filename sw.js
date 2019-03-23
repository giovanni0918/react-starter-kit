importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.1.1/workbox-sw.js');
workbox.setConfig({
    debug: false,
});
// Revisioned files added via a glob
workbox.precaching.precache([
    '/react-starter-kit/',
    'index.html',
    'static/bundle.js',
    'static/manifest.json',
    'static/images/icons/icon-72x72.png',
    'static/images/icons/icon-96x96.png',
    'static/images/icons/icon-128x128.png',
    'static/images/icons/icon-144x144.png',
    'static/images/icons/icon-152x152.png',
    'static/images/icons/icon-192x192.png',
    'static/images/icons/icon-256x256.png',
    'static/images/icons/icon-384x384.png',
    'static/images/icons/icon-512x512.png',
    'static/vendor/sw-toolbox.js',
]);

workbox.routing.registerRoute(new RegExp('/react-starter-kit/'), new workbox.strategies.StaleWhileRevalidate());

workbox.routing.registerRoute(new RegExp('index.html'), new workbox.strategies.StaleWhileRevalidate());

workbox.routing.registerRoute(new RegExp('static/bundle.js'), new workbox.strategies.StaleWhileRevalidate());

workbox.routing.registerRoute(new RegExp('static/manifest.json'), new workbox.strategies.StaleWhileRevalidate());

workbox.routing.registerRoute(new RegExp('static/images/icons/.*.png'), new workbox.strategies.StaleWhileRevalidate());

workbox.routing.registerRoute(new RegExp('static/vendor/sw-toolbox.js'), new workbox.strategies.StaleWhileRevalidate());
