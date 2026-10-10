const SW_VERSION = "pwa-ejercicio-3-v1";

self.addEventListener("install", (event) => {
  console.log("[SW] Evento install: el Service Worker se está instalando.");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("[SW] Evento activate: el Service Worker está activo.");
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  // En este ejercicio solo se demuestra la intercepción de peticiones.
  // La estrategia de caché se implementará en el ejercicio 4.
  if (event.request.method === "GET") {
    console.log("[SW] Petición interceptada:", event.request.url);
  }
});
