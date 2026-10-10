const status = document.getElementById("sw-status");

if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      await navigator.serviceWorker.register("./sw.js");
      if (status) status.textContent = "Service Worker registrado. Visita la página una vez con conexión y luego prueba el modo Offline.";
    } catch (error) {
      if (status) status.textContent = "Error al registrar el Service Worker: " + error.message;
      console.error(error);
    }
  });
}
