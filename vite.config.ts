import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import browserslistToEsbuild from "browserslist-to-esbuild";

export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  build: {
    target: browserslistToEsbuild(),
    sourcemap: false,
  },
  test: {
    globals: true,
    environment: "jsdom",
    reporters: ["verbose"],
    setupFiles: "./vitest-setup.ts",
    globalSetup: "./test-globals.ts",
    coverage: {
      reporter: ["html"],
      include: ["src/**/*"],
      exclude: ["**/*.stories.*"],
    },
  },
});
