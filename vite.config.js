import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
  plugins: [
    vue(),
  ],
  base: "http://parnec.nuaa.edu.cn/_upload/tpl/02/db/731/template731/",
  // base:"",
  // build: {
  //   outDir:"./assets/fuck"
  // },
  // publicDir: true,
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    strictPort: false,
    https: false
  }
})
