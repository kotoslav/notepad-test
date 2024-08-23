import { fileURLToPath, URL } from 'node:url'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    root: `src/layout${env.VITE_LAYOUT_VERSION}`,
    publicDir: path.join(__dirname, '/public'),
    plugins: [
      vue(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['icon-512.png'],
        manifest: {
          theme_color: '#ffffff',
          icons: [
            {
              src: 'icon-512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        }
      })
    ],
    define: {
      API_URL: JSON.stringify(env.VITE_BACKEND_URL)
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    build: {
      outDir: path.join(__dirname, '/dist'),
      emptyOutDir: true
    }
  }
})
