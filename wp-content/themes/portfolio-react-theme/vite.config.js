import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Build configuration
  build: {
    // Output directory for compiled assets
    outDir: 'dist',
    
    // Generate manifest for WordPress
    manifest: true,
    
    // Rollup options
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/main.jsx'),
      },
      output: {
        // Output assets to dist/assets/
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
    
    // Minify for production
    minify: 'terser',
    
    // Source maps for debugging
    sourcemap: false,
  },
  
  // Development server
  server: {
    // Customize port if needed
    port: 3000,
    
    // Enable CORS for WordPress
    cors: true,
    
    // Hot Module Replacement
    hmr: {
      host: 'localhost',
    },
  },
  
  // Resolve configuration
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
