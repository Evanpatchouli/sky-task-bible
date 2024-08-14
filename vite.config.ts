import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/sky-task-bible",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@router": path.resolve(__dirname, "src/router"),
      "@views": path.resolve(__dirname, "src/views"),
      "@locale": path.resolve(__dirname, "src/locale"),
      "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
  plugins: [vue()],
  build: {
    outDir: "sky-task-bible",
  },
});
