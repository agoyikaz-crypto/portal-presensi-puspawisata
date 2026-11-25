// Service Worker minimal untuk memenuhi kriteria resmi PWA Install Chrome
const CACHE_NAME = 'portal-presensi-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Passthrough fetch untuk Google Apps Script iframe
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
