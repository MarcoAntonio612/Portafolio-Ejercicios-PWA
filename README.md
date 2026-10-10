# Portafolio de Ejercicios PWA

Este repositorio contiene cinco prácticas progresivas sobre los componentes técnicos básicos de una Progressive Web App (PWA).

## Ejercicios
1. Web App Manifest y metadatos de instalación.
2. Maquetado del App Shell y comprobación de la experiencia de instalación.
3. Registro y ciclo de vida del Service Worker.
4. Cache API y estrategia Cache-First.
5. Interceptor de peticiones y modo sin conexión.

## Requisitos
- Visual Studio Code.
- Google Chrome.
- XAMPP o un servidor local que sirva los archivos por HTTP.
- Git para publicar el repositorio en GitHub.

## Ejecución local con XAMPP
1. Copia la carpeta `Portafolio-Ejercicios-PWA` dentro de `C:\xampp\htdocs\`.
2. Inicia Apache desde el panel de XAMPP.
3. Abre, por ejemplo, `http://localhost/Portafolio-Ejercicios-PWA/Ejercicio-1-Manifest/`.
4. Repite con las carpetas de los ejercicios 2 a 5.

No abras los HTML con doble clic (`file://`), porque los Service Workers requieren HTTPS o localhost.

## Pruebas
Usa Chrome DevTools > Application para inspeccionar Manifest, Service Workers y Cache Storage. Usa Network > Offline para simular la pérdida de conexión.

## Nota
La disponibilidad de la instalación y la pantalla de inicio nativa varía por navegador y sistema operativo. Las prácticas son educativas y deben probarse localmente antes de publicarse.
