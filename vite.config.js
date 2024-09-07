import { defineConfig } from 'vite';

export default defineConfig({
  base: 'https://reinnillo.github.io/reinnilloPortafolio/',
  server: {
    open: true,
    port: 3000, // Cambia el puerto del servidor de desarrollo si es necesario.
  },
  build: {
    outDir: 'dist', // Directorio de salida para los archivos de producción.
    rollupOptions: {
      output: {
        manualChunks: undefined, // Personaliza cómo Vite divide el código en chunks.
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src', // Alias para simplificar importaciones.
    },
  },
  plugins: [], // Añade plugins de Vite aquí si es necesario.
});

