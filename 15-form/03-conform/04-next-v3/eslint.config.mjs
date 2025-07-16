import globals from "globals";
import pluginJs from "@eslint/js";
import tsEsLint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginHooks from "eslint-plugin-react-hooks";
import pluginRefresh from "eslint-plugin-react-refresh";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginImport from "eslint-plugin-import";
import pluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import pluginUnusedImports from "eslint-plugin-unused-imports";
import pluginJest from "eslint-plugin-jest";
import pluginStylistic from "@stylistic/eslint-plugin";
import pluginNext from "@next/eslint-plugin-next";
import configPrettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

const assetPattern =
  ".+\\.(jpe?g|gif|png|webp|avif|ico|svg|mp4|webm|woff2?)(\\?.*)?$";

const reactConfig = {
  name: "React Config",
  files: ["{src,app,pages}/**/*.{js,ts,jsx,tsx}"],
  languageOptions: {
    ...pluginJsxA11y.flatConfigs.recommended.languageOptions,
  },
  settings: {
    react: { version: "detect" },
  },
  plugins: {
    react: pluginReact,
    "react-hooks": pluginHooks,
    "react-refresh": pluginRefresh,
    "jsx-a11y": pluginJsxA11y,
    "@next/next": pluginNext,
  },
  rules: {
    ...pluginReact.configs.flat.recommended.rules,
    ...pluginHooks.configs.recommended.rules,
    ...pluginJsxA11y.flatConfigs.recommended.rules,
    ...pluginNext.configs.recommended.rules,
    ...pluginNext.configs["core-web-vitals"].rules,
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react-refresh/only-export-components": [
      "warn",
      {
        allowConstantExport: true,
        allowExportNames: ["metadata", "generateMetadata"],
      },
    ],
  },
};

const typeConfig = {
  name: "Type Config",
  files: ["{src,app,pages}/**/*.{ts,tsx}"],
  plugins: {
    "typescript-eslint": tsEsLint,
  },
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      { prefer: "type-imports" },
    ],
  },
};

const importConfig = {
  name: "Import Config",
  files: ["{src,app,pages}/**/*.{js,ts,jsx,tsx}"],
  plugins: {
    import: pluginImport,
    "simple-import-sort": pluginSimpleImportSort,
    "unused-imports": pluginUnusedImports,
  },
  settings: {
    ...pluginImport.configs.react.settings,
    ...pluginImport.configs.typescript.settings,

    // resolve typescript path aliathes
    "import/resolver": {
      ...pluginImport.configs.typescript.settings["import/resolver"],
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    ...pluginImport.configs.recommended.rules,
    ...pluginImport.configs.typescript.rules,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "always",
        jsx: "always",
        ts: "always",
        tsx: "always",
      },
    ],

    // for eslint-plugin-simple-import-sort
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          [
            "^react(-dom)?",
            "^next(/.+)?",
            "^node:",
            "^@?\\w",
            "^[@~]/.*",
            "^\\.+/(?!assets/)",
          ],
          [".+\\.json$", ".+\\.s?css$", assetPattern],
        ],
      },
    ],
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",

    // for eslint-plugin-unused-imports
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        args: "after-used",
        argsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        vars: "all",
        varsIgnorePattern: "^_",
      },
    ],
  },
};

const stylisticConfig = {
  name: "Stylistic Config",
  files: ["{src,app,pages}/**/*.{js,ts,jsx,tsx}"],
  plugins: { "@stylistic": pluginStylistic },
  rules: {
    "@stylistic/padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: "*", next: ["function", `class`] },
      { blankLine: "always", prev: "*", next: ["if", "switch"] },
      { blankLine: "always", prev: "directive", next: "*" },
      { blankLine: "never", prev: "directive", next: "directive" },
    ],
  },
};

const testConfig = {
  name: "Test Config",
  ...pluginJest.configs["flat/recommended"],
  files: [
    "{src,app,pages}/**/*.{test,spec}.{js,ts,jsxt,sx}",
    "{src,app,pages}/**/__tests__/**/*.{ts,js,jsx,tsx}",
  ],
};

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"] },
  {
    ignores: [
      "{dist,build,public,node_modules}/**",
      "{.react-router,.next}/**",
      "**/lib/utils.{js,ts}",
      "**/components/ui/**/*.{js,jsx,tsx}",
      "**/*.config.*",
    ],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2025,
      },
      parserOptions: {
        project: ["tsconfig.json", "tsconfig.*.json"],
      },
    },
  },
  pluginJs.configs.recommended,
  tsEsLint.configs.recommendedTypeChecked,
  tsEsLint.configs.stylistic,
  reactConfig,
  typeConfig,
  importConfig,
  stylisticConfig,
  testConfig,
  configPrettier,
]);
