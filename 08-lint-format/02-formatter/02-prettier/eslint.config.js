import globals from 'globals';
import pluginJs from '@eslint/js';
import tsEsLint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import pluginHooks from 'eslint-plugin-react-hooks';
import pluginRefresh from 'eslint-plugin-react-refresh';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginImport from 'eslint-plugin-import';
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import pluginUnusedImports from 'eslint-plugin-unused-imports';
import pluginJest from 'eslint-plugin-jest';
import pluginStylistic from '@stylistic/eslint-plugin';
import configPrettier from 'eslint-config-prettier';
import tsEslintParser from '@typescript-eslint/parser';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();
const pluginJsxA11yConfig = compat.config(pluginJsxA11y.configs.recommended)[0];

const reactConfig = {
  name: 'React Config',
  files: ['src/**/*.{ts,tsx,js,jsx}'],
  settings: {
    react: { version: 'detect' },
  },
  plugins: {
    ...pluginReactConfig.plugins,
    'react-hooks': pluginHooks,
    'react-refresh': pluginRefresh,
    'jsx-a11y': pluginJsxA11y,
  },
  rules: {
    ...pluginReactConfig.rules,
    ...pluginHooks.configs.recommended.rules,
    ...pluginJsxA11yConfig.rules,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};

const importConfig = {
  name: 'Import Config',
  files: ['src/**/*.{ts,tsx,js,jsx}'],
  plugins: {
    import: pluginImport,
    'simple-import-sort': pluginSimpleImportSort,
    'unused-imports': pluginUnusedImports,
  },
  settings: {
    ...pluginImport.configs.typescript.settings,
    'import/resolver': {
      ...pluginImport.configs.typescript.settings['import/resolver'],
      typescript: {
        alwaysTryTypes: true,
        project: ['./tsconfig.json', './tsconfig.node.json'],
      },
      node: true,
    },
  },
  rules: {
    ...pluginImport.configs.recommended.rules,
    ...pluginImport.configs.typescript.rules,
    // SEE: `node_modules/vite/client.d.ts`
    'import/no-unresolved': ['error', { ignore: ['^/.+\\.(svg|png)$'] }],

    // for eslint-plugin-simple-import-sort
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react(-dom)?', '^node:', '^@?\\w', '^@/.*', '^\\.+/(?!assets/)'],
          ['^.+\\.json$', '^.+\\.(svg|png)$', '^.+\\.s?css$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',

    // for eslint-plugin-unused-imports
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
};

const testConfig = {
  ...pluginJest.configs['flat/recommended'],
  name: 'Test Config',
  files: [
    'src/**/*.{test,spec}.{ts,tsx,js,jsx}',
    'src/**/__tests__/**/*.{ts,tsx,js,jsx}',
  ],
};

const styleConfig = {
  name: 'Style Config',
  files: ['src/**/*.{ts,tsx,js,jsx}'],
  plugins: { '@stylistic': pluginStylistic },
  rules: {
    '@stylistic/padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: ['function', `class`] },
      { blankLine: 'always', prev: '*', next: ['if', 'switch'] },
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'never', prev: 'directive', next: 'directive' },
    ],
  },
};

/** @type { import('eslint').Linter.FlatConfig[] } */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parser: tsEslintParser,
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.node.json'],
      },
    },
  },
  { files: ['**/*.{ts,tsx,mts,cts,js,jsx,mjs,cjs}'] },
  { ignores: ['**/dist/**', '**/public/**', '**/.*rc.*', '**/*.config.*'] },
  pluginJs.configs.recommended,
  ...tsEsLint.configs.recommendedTypeChecked,
  ...tsEsLint.configs.stylistic,
  reactConfig,
  importConfig,
  testConfig,
  styleConfig,
  configPrettier,
];
