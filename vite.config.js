import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: path.resolve(__dirname, "./dist/"),
  plugins: [react()],
});
