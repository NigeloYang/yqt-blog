import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import \'@/assets/styles/abstracts/_variables.scss\';'
      },
      less: {
        modifyVars: {
          // 在这里添加你想要修改的 Ant Design Vue 主题变量
          // 例如，修改主色为蓝色
          '@primary-color': "#f54325",
          '@success-color': "#80b178",
          '@warning-color': "#d8c49a",
          '@error-color': "#d1786b",
          '@heading-color': "#333333",
          '@text-color': "#666666",
          '@text-color-secondary': "#999999",
        },
        javascriptEnabled: true
      }

    },
  }
})
