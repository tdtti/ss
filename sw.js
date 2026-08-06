// sw.js - Saved in root directory
const CACHE_NAME = 'tdtti-ss-ebook-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8JiVmEpr0ghbXQ1Z2Mk-5ZFi1lKNN0f9Eygw999ZF7-Sa4OyQRrhXU646M9kpwRa0Gr5dISn2pGtD_xD-ZEbarFZLrnMquwiMvtGw2U151LH7Jckv2gaRkWJ_CtSbzVM_i1dT-JZb4QeCkLbtyrzczfUnKfP33vi21IPIGHMWhD4SkJQ/s1600/Logo2.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.map((k) => k !== CACHE_NAME && caches.delete(k)))).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        fetch(event.request).then((res) => res.status === 200 && caches.open(CACHE_NAME).then((c) => c.put(event.request, res))).catch(() => {});
        return cachedResponse;
      }
      return fetch(event.request).then((res) => {
        if (res && res.status === 200 && res.type === 'basic') {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(event.request, clone));
        }
        return res;
      }).catch(() => event.request.mode === 'navigate' ? caches.match('./') : undefined);
    })
  );
});
