import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from 'path';
import fs from 'fs';

// Read base URL from package.json homepage
const getBase = () => {
  try {
    const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
    if (packageJson.homepage) {
      // Extract the path from the URL if it's a full URL
      try {
        const url = new URL(packageJson.homepage);
        return url.pathname.endsWith('/') ? url.pathname : `${url.pathname}/`;
      } catch {
        // If not a valid URL, use as is
        return packageJson.homepage.endsWith('/') ? packageJson.homepage : `${packageJson.homepage}/`;
      }
    }
  } catch (e) {
    console.warn('Could not read package.json homepage field, using default base');
  }
  return '/'; // Default to root if homepage cannot be parsed
};

// https://vite.dev/config/
export default defineConfig({
  base: getBase(),
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    host: true,
    hmr: {
      clientPort: 3000,
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
