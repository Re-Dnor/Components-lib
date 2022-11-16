import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true
    }),
  ],
  build: {
    rollupOptions: {
      external: ["react", "react-dom", "styled-components"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "styled-components": "styled",
        },
      },
    },
  },
});