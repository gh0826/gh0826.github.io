import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 添加这一行，确保打包后的资源路径是相对路径
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
