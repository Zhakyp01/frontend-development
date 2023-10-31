const self = this;
const CACHE_NAME = "cipher@0.0.1";
const urlsToCache = [
    '/cipher/',
    '/cipher/index.html',
    '/cipher/manifest.json',
    '/cipher/icons/favicon.ico',
    '/cipher/icons/logo192.png',
    '/cipher/icons/logo512.png',
    'https://jimmywarting.github.io/StreamSaver.js/mitm.html?version=2.0.0',
    'https://jimmywarting.github.io/StreamSaver.js/sw.js'
];


self.addEventListener('install', event => {
    event.waitUntil(caches.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
    console.log('Worker installed! 👍');
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);
    event.waitUntil(
        caches.keys().then(cacheNames => {
            cacheNames.forEach(cacheName => {
                if(!cacheWhitelist.includes(cacheName)) return caches.delete(cacheName);
            })
        })
    );
    console.log('Worker activated! 👍');
});

self.addEventListener('fetch', event => {
    event.respondWith(async function() {
        try {
            const res = await fetch(event.request);
            const cache = await caches.open(CACHE_NAME);
            cache.put(event.request.url, res.clone());
            return res;
        } catch({ message }) {
            console.log({ message });
            const cache = await caches.open(CACHE_NAME);
            const res = await cache.match(event.request.url);
            return res;
        };
    }());
});