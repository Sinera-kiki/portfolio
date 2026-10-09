import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages 部署时通过命令行指定 base：
//   npm run build:pages   （等价于 vite build --base=/portfolio/，产物复制到 docs/）
export default defineConfig({
  plugins: [vue()],
  server: { host: '0.0.0.0', port: 5173 },
  build: { outDir: 'dist', emptyOutDir: true },
})
