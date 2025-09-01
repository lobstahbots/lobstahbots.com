import { defineConfig, globalIgnores } from "eslint/config";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  {
    extends: compat.extends("eslint:recommended", "next/core-web-vitals"),

    rules: {
      eqeqeq: "warn",
      "no-console": "warn",
      "array-bracket-spacing": "warn",
      "arrow-spacing": "warn",
      "block-spacing": "warn",
      "brace-style": "warn",
      "comma-dangle": ["warn", "always-multiline"],
      "comma-spacing": "warn",
      "eol-last": "error",
      "func-call-spacing": "warn",
      indent: ["warn", 2],
      "jsx-quotes": "warn",
      "key-spacing": "warn",
      "keyword-spacing": "warn",
      "no-trailing-spaces": "warn",
      "object-curly-spacing": ["warn", "always"],
      quotes: ["warn", "double"],
      semi: ["warn", "always"],
      "space-before-blocks": "warn",
      "space-before-function-paren": "off",
      "space-in-parens": "warn",
      "no-unused-vars": [
        "error",
        {
          caughtErrors: "none",
        },
      ],
    },
  },
  globalIgnores(["node_modules/", ".next/"]),
]);
