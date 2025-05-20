import { defineConfig } from "./src/utils/defineConfig";

export default defineConfig({
  contentDir: "./content",
  outputDir: "./docs", // GitHub will push this to gh-pages
});
