import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
    target: 'esnext',
    cssCodeSplit: true,
    minify: 'esbuild',
    // The SSR bundle (used only at build time to prerender HTML) keeps
    // dependencies external, so manual chunking applies to the client build only.
    rollupOptions: isSsrBuild ? {} : {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          icons: ['lucide-react']
        }
      }
    }
  }
}));
