import globals from 'globals';
import pluginJs from '@eslint/js';
import tsEsLint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginHooks from 'eslint-plugin-react-hooks';
import pluginRefresh from 'eslint-plugin-react-refresh';

const reactConfig = {
  name: 'React Config',
  files: ['{src,app,pages}/**/*.{js,ts,jsx,tsx}'],
  settings: {
    react: { version: 'detect' },
  },
  plugins: {
    react: pluginReact,
    'react-hooks': pluginHooks,
    'react-refresh': pluginRefresh,
  },
  rules: {
    ...pluginReact.configs.flat.recommended.rules,
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
  { files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'] },
  { ignores: ['{dist,build,public,node_modules}/**', '**/*.config.*'] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2024,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tsEsLint.configs.recommended,
  reactConfig,
];
