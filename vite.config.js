import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import postcssNesting from "postcss-nesting";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    postcss: {
      plugins: [postcssNesting],
    },
  },
});
