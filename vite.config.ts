import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tsconfigPaths from 'vite-tsconfig-paths' // 1. استيراد الحزمة

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths() // 2. إضافة الإضافة هنا
  ],
  resolve: {
    alias: {
      // هذا هو نفس الإعداد الموجود في tsconfig.json
      // وهو يضمن التوافق الكامل
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
