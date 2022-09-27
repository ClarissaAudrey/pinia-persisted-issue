import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import ssr from "vite-plugin-ssr/plugin";
import vue from "@vitejs/plugin-vue";
import path from "path";

const pathSrc = path.resolve(__dirname, "./src");

export default defineConfig({
  plugins: [vue(), ssr()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@import "${pathSrc}/scss/main";` },
    },
  },
});
