import { defineConfig } from "vitest/config";

export default defineConfig({
  base: "/testTs/",
  test: {
    globals: true,
    environment: "node",
    // Optionally add more config here
  },
});
