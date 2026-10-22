const CACHE_NAME = 'bangalore-caretakers-v2';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('bangalore-caretakers-') && key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  // Always use the server's current HTML and status (including 404s).
  if (request.mode === 'navigate' || !new URL(request.url).pathname.startsWith('/assets/')) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request);
    const refresh = fetch(request).then(async network => {
      if (network.ok) await cache.put(request, network.clone());
      return network;
    });
    if (cached) { event.waitUntil(refresh.catch(() => undefined)); return cached; }
    return refresh;
  })());
});
