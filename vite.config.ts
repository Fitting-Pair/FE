import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
  plugins: [
    react(),
    mkcert({
      keyFile: "/localhost-key.pem",
      certFile: "/localhost.pem",
    } as any),
  ],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@": "/src",
      buffer: "buffer",
      stream: "stream-browserify",
    },
  },
  define: {
    "process.env": {},
  },
  build: {
    rollupOptions: {
      external: ["stream"],
    },
  },
});
