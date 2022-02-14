import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path' // pnpm add @types/node

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    host: '0.0.0.0',
    port: 4567, // 设置服务启动端口号
    open: false, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域

    // 设置代理，根据项目实际情况配置
    proxy: {
      '/api': {
        target: 'http://192.168.2.182:80',
        changeOrigin: true,
        secure: false
        // rewrite: path => path.replace('/api/v0', '/api/v0')
      }
    }
  }
})
