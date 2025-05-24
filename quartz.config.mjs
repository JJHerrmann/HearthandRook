import { defineConfig } from "./src/utils/defineConfig";

export default defineConfig({
  contentDir: "content",
  outputDir: "public",
  css: ["/static/custom.css"],  // Correct: this is URL path from the site root
});
