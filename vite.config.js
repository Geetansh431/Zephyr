import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Code splitting optimization
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries
          'react-vendor': ['react', 'react-dom'],
          'gsap-vendor': ['gsap', '@gsap/react'],
          'icons-vendor': ['react-icons/fa', 'react-icons/ti'],
          'utils-vendor': ['clsx', 'react-use']
        }
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1600,
    // Enable minification
    minify: 'esbuild',
    // Generate source maps for debugging
    sourcemap: false,
    // Optimize CSS
    cssCodeSplit: true,
    // Asset optimization
    assetsInlineLimit: 2048, // Inline small assets < 2kb
  },
  // Optimize dev server
  server: {
    // Enable compression
    compress: true,
  },
  // Enable compression in preview
  preview: {
    compress: true,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'gsap', 'clsx'],
    // Pre-bundle these for faster dev startup
    exclude: []
  },
  // Asset processing
  assetsInclude: ['**/*.mp4', '**/*.webp', '**/*.woff2']
})
