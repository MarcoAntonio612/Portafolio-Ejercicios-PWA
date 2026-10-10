# Ejercicio 5: Interceptor de peticiones y modo offline

## Objetivo
Detectar fallos de red y mostrar una página `offline.html` cuando una navegación no se puede recuperar desde la caché.

## Prueba
1. Abre la página con conexión y espera a que se registre el Service Worker.
2. Recarga para que el Service Worker controle la pestaña.
3. En DevTools > Network activa Offline.
4. Intenta navegar a una URL dentro de la carpeta del ejercicio que no exista en caché. Debe aparecer la página de respaldo.
5. Revisa Application > Cache Storage para confirmar que `offline.html` está guardada.

Importante: el fallback de navegación funciona cuando el Service Worker controla la página y `offline.html` se guardó correctamente.
