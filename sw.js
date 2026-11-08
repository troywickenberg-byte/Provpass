// Provpass HP service worker: cachar appens filer så att den fungerar offline.
// Höj VERSION när du publicerar en ny version, så hämtas filerna på nytt.
const VERSION = 'provpass-v3';
const FILES = [
  './', './index.html', './manifest.webmanifest',
  './vendor/pdf.min.js', './vendor/pdf.worker.min.js',
  './fonts/fonts.css',
  './fonts/f1.woff2',
  './fonts/f10.woff2',
  './fonts/f11.woff2',
  './fonts/f12.woff2',
  './fonts/f2.woff2',
  './fonts/f3.woff2',
  './fonts/f4.woff2',
  './fonts/f5.woff2',
  './fonts/f6.woff2',
  './fonts/f7.woff2',
  './fonts/f8.woff2',
  './fonts/f9.woff2',
  './fonts/jakarta-latin.woff2',
  './fonts/jakarta-latin-ext.woff2',
  './icons/apple-touch-icon.png', './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES.map(u => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  // Själva sidan: nätet först (så att uppdateringar syns direkt), cachen när du är offline.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req.url, { cache: 'no-cache', credentials: 'same-origin' }).then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put('./index.html', copy)); }
        return res;
      }).catch(() => caches.match('./index.html'))
    );
    return;
  }
  // Övriga filer (pdf.js, typsnitt, ikoner): cachen först.
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then(hit => {
      if (hit) return hit;
      return fetch(req).then(res => {
        if (res.ok && res.type === 'basic') { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
        return res;
      }).catch(() => req.mode === 'navigate' ? caches.match('./index.html') : Response.error());
    })
  );
});
