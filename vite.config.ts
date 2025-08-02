import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.ico',     // ✅ include favicon.ico from public/
        'robots.txt',
        'favicon.ico', // optional if using Apple devices
      ],
      manifest: {
        name: 'Codeinca Agency',
        short_name: 'Codeinca',
        description: 'My awesome PWA using Vite!',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          // optional maskable icon
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@assets": resolve(__dirname, "./attached_assets"),
      "@shared": resolve(__dirname, "./src/shared"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
