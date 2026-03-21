import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import next from "eslint-config-next";

const config = [
  // ✅ Ignore build files
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "dist/**",
      "build/**",
    ],
  },

  // ✅ Base JS rules
  js.configs.recommended,

  // ✅ TypeScript rules
  ...tseslint.configs.recommended,

  // ✅ Next.js rules (FIXED)
  ...next,

  // ✅ Globals
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
  },
];

export default config;