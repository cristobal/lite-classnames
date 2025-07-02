import eslintjs from '@eslint/js';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.mocha,
      },
    },
    plugins: {
      // order matters
      ['unicorn']: eslintPluginUnicorn,
    },
  },
  eslintjs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      // Enable eslint rules
      // https://eslint.org/docs/latest/rules/
      ['curly']: 2,
      'no-restricted-globals': ['error', 'history', 'location', 'name'],
      'no-nested-ternary': 'error',
      'max-params': ['error', 4],
      'prefer-const': ['error', { destructuring: 'all' }],
      'require-await': 'error',

      // Enable unicorn rules:
      // @see https://github.com/sindresorhus/eslint-plugin-unicorn
      'unicorn/prefer-node-protocol': 'error',
      'unicorn/explicit-length-check': 'error',
      'unicorn/no-array-for-each': 'error',
      'unicorn/no-array-reduce': 'error',
      'unicorn/no-invalid-remove-event-listener': 'error',
    },
  },

  // As recommended by prettier
  // https://github.com/prettier/eslint-plugin-prettier?tab=readme-ov-file#configuration-new-eslintconfigjs
  eslintPluginPrettierRecommended,
);
