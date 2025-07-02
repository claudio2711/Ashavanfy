import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";


export default defineConfig([
  {
    // JS base
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    // React
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser },
    ...pluginReact.configs.flat.recommended,

    /* 👇 regole personalizzate */
    rules: {
      "react/prop-types": "off",              // niente PropTypes
      "no-unused-vars": ["warn", {            // consenti arg. _unused
        "argsIgnorePattern": "^_"
      }]
    },
  },
]);
