
const filesToCache = [
    './',
    './index.html',
    './src/style.css',
    './src/quote.js',
    './images/logo192.png'
];

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('static').then(cache => {
            return cache.addAll(filesToCache);
        })
    )
})

self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});