import { defineConfig, UserConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import browserslistToEsbuild from "browserslist-to-esbuild";
import path from "path";

export default defineConfig({
  plugins: [react()] as UserConfig["plugins"],
  build: {
    target: browserslistToEsbuild(),
    sourcemap: false,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@tests": path.resolve(__dirname, "./tests"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    reporters: ["verbose"],
    setupFiles: "./vitest-setup.ts",
    coverage: {
      reporter: ["text", "json", "html"],
      include: ["src/**/*"],
      exclude: [],
    },
  },
});
