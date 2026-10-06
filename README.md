# ELGSUS

Aplicación web construida con **Vite + React + TypeScript**.

## Requisitos

- Node.js 20 o superior

## Desarrollo

```bash
npm install
npm run dev
```

El dev server arranca en `http://localhost:5173` y escucha en todas las
interfaces (`0.0.0.0`), de modo que también es accesible desde el preview
alojado.

## Scripts

| Comando           | Descripción                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Dev server con recarga en caliente (HMR)     |
| `npm run build`   | Chequeo de tipos y build de producción       |
| `npm run preview` | Sirve localmente el build de producción      |
| `npm run lint`    | Linter (oxlint)                              |

## Estructura

```
index.html          Documento raíz
public/             Archivos estáticos servidos tal cual
src/
  main.tsx          Punto de entrada de React
  App.tsx           Componente principal
  index.css         Estilos globales y variables de tema
  App.css           Estilos del componente App
vite.config.ts      Configuración de Vite (host, puerto, HMR)
```
