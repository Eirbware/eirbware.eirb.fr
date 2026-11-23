import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rolldownOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]', // do not change the assets filenames and put them in assets directory (WHY it's not the default)
      },
    }
  }
})
