import eslintConfigPrettier from "eslint-config-prettier"
import { defineConfig } from "eslint/config"

export default defineConfig([
  {
    rules: {
      semi: "error",
      "prefer-const": "error",
      "@typescript-eslint/no-explicit-any": "error",
    },
  },
  eslintConfigPrettier,
])
