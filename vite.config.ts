import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import type firebase from "firebase/compat/app";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      pages: path.resolve(__dirname, "./src/pages"),
      components: path.resolve(__dirname, "./src/components"),
      firebaseApp: path.resolve(__dirname, "./src/firebaseApp"),
    },
  },
});
