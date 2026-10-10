const status = document.getElementById("sw-status");

if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register("./sw.js");
      if (status) status.textContent = "Service Worker registrado. Estado: " + (registration.active ? "activo" : "instalándose o esperando activación") + ".";
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (status) status.textContent = "El Service Worker ahora controla esta página.";
      });
    } catch (error) {
      if (status) status.textContent = "No se pudo registrar el Service Worker: " + error.message;
      console.error(error);
    }
  });
} else if (status) {
  status.textContent = "Este navegador no admite Service Workers.";
}
