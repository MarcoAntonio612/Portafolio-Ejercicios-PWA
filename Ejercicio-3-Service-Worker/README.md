# Ejercicio 3: Registro y ciclo de vida del Service Worker

## Objetivo
Registrar `sw.js` de forma asíncrona y observar los eventos `install`, `activate` y `fetch`.

## Prueba
1. Abre DevTools > Application > Service Workers.
2. Recarga la página.
3. Abre Console para ver los mensajes de los eventos.
4. Comprueba que el Service Worker esté registrado.

Nota: los Service Workers requieren un contexto seguro: HTTPS o `localhost`. Para estos ejercicios, usa XAMPP y una dirección `http://localhost/...`, no abras el HTML directamente con `file://`.
