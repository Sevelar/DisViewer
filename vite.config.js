import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import postcssNested from "postcss-nested";

export default defineConfig({
  base: "./",
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
    postcss: {
      plugins: [postcssNested()],
    },
  },
});
