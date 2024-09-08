import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import pluginHooks from 'eslint-plugin-react-hooks';
import pluginRefresh from 'eslint-plugin-react-refresh';

const reactConfig = {
  ...pluginReactConfig,
  name: 'React Config',
  files: ['src/**/*.{ts,tsx,js,jsx}'],
  settings: {
    react: { version: 'detect' },
  },
  plugins: {
    ...pluginReactConfig.plugins,
    'react-hooks': pluginHooks,
    'react-refresh': pluginRefresh,
  },
  rules: {
    ...pluginReactConfig.rules,
    ...pluginHooks.configs.recommended.rules,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
  },
  { files: ['**/*.{ts,tsx,mts,cts,js,jsx,mjs,cjs}'] },
  { ignores: ['**/dist/**', '**/public/**', '**/.*rc.*', '**/*.config.*'] },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  reactConfig,
];
