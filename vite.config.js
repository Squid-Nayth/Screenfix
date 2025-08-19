import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js", // to setup jest-dom
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './assets'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@sections': path.resolve(__dirname, './src/sections')
    }
  },
})
