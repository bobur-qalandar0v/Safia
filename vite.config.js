import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  // define: {
  //   global: "globalThis", // globalni aniqlash
  //   dirname: JSON.stringify(path.resolve()), // dirname ni aniqlash
  // },
  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "src"), // Agar kerak bo'lsa, alias sozlang
  //   },
  // },
});
