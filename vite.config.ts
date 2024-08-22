import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const layout_version = loadEnv(mode, process.cwd()).VITE_LAYOUT_VERSION

  console.log(`src/layout${layout_version}`)
  return {
    root: `src/layout${layout_version}`,
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
