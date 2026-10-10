# Ejercicio 4: Cache API y estrategia Cache-First

## Objetivo
Guardar los archivos estáticos del App Shell durante `install`. En `fetch`, buscar primero en la caché y consultar la red cuando el recurso no esté guardado.

## Prueba
1. Recarga la página dos veces.
2. Abre DevTools > Application > Cache Storage.
3. Verifica que exista `pwa-shell-v1` y que contenga los archivos.
4. En DevTools > Network activa Offline y recarga. La página principal y los archivos guardados deben seguir disponibles.

La caché se actualiza al cambiar el nombre `CACHE_NAME` si se necesita forzar una instalación limpia.
