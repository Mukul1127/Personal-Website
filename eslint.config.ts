import type { Linter } from "eslint";

import js from "@eslint/js";
import tsEslint from "typescript-eslint";

import tailwind from "eslint-plugin-tailwindcss";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  js.configs.recommended,
  ...tsEslint.configs.recommended,
  ...tailwind.configs["flat/recommended"],
  ...eslintPluginAstro.configs["flat/recommended"],
  eslintPluginPrettierRecommended,
] satisfies Linter.FlatConfig[];
