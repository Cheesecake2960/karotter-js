import eslintConfigPrettier from "eslint-config-prettier"
import { defineConfig } from "eslint/config"
import tseslint from "typescript-eslint";
import js from "@eslint/js"

export default defineConfig(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["src/**/*.ts"],
    ...tseslint.configs.recommendedTypeChecked[0],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      semi: "error",
      "prefer-const": "error",
    },
  },

  {
    ignores: ["dist/**"],
  },

  eslintConfigPrettier,
);
