import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://crazydiamond24.github.io/Fylo-landing-page/',
  plugins: [vue()],
})
