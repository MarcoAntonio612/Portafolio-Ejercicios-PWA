const status = document.getElementById("sw-status");

if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register("./sw.js");
      if (status) status.textContent = "Service Worker registrado. Recarga una vez para que controle la página; después prueba desconectarte.";
    } catch (error) {
      if (status) status.textContent = "Error al registrar el Service Worker: " + error.message;
      console.error(error);
    }
  });
}
