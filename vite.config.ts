import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// El preview alojado (p. ej. https://<puerto>-<sandbox>.e2b.app) llega por proxy
// sobre el puerto 443. Define VITE_PREVIEW_HOST si además quieres que el HMR
// viaje por ese túnel; en local no hace falta.
const previewHost = process.env.VITE_PREVIEW_HOST

export default defineConfig({
  plugins: [react()],
  server: {
    // Escucha en todas las interfaces para que el preview pueda alcanzar el server.
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    // Acepta el host del preview alojado sin bloquear la petición.
    allowedHosts: true,
    hmr: previewHost
      ? { protocol: 'wss', clientPort: 443, host: previewHost }
      : undefined,
  },
  preview: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    allowedHosts: true,
  },
})
