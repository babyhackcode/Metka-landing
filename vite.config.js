import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'


export default defineConfig({
  plugins: [react()],
  base: "/Metka-landing/",
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "${path.resolve('src/styles/helpers/mixins.scss')}" as *;
        @use "${path.resolve('src/styles/helpers/media.scss')}" as *;
        `
      }
    }
  }
})
