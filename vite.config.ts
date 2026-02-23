import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
// base: '/' for Hostinger (root). For GitHub Pages use: base: '/Truesoft/' and rebuild.
export default defineConfig(({ mode }) => ({
  base: "/",
  define: {
    "process.env.PUBLIC_URL": JSON.stringify(""),
  },
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
