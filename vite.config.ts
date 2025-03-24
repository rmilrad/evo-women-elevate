import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use relative paths for GitHub Pages deployment
  // This ensures assets are loaded correctly regardless of the base URL
  base: "./",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Ensure assets are properly handled
    assetsDir: "assets",
    // Generate sourcemaps for easier debugging
    sourcemap: mode === 'development',
    // Optimize output
    minify: mode === 'production',
    // Ensure CSS is extracted to separate files
    cssCodeSplit: true,
    // Ensure proper path handling
    outDir:  '_site',
    emptyOutDir: true, // also necessary
  }
}));
