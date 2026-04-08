import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative paths so GitHub Pages works for both
  // project pages and user/org pages.
  base: " /Kerala-Cuisine/ ",
})
