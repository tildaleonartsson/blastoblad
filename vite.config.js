import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import "~slick-carousel/slick/slick.css"; @import "~slick-carousel/slick/slick-theme.css";`,
      },
    },
  },
});
