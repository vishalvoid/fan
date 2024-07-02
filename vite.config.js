// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
  plugins: [react(), mkcert()],
  server: {
    https: {
      key: "./key.pem",
      cert: "./cert.pem",
    },
    host: "0.0.0.0",
    port: 3000,
  },
});
