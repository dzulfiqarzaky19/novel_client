import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  { ignores: ['dist', 'eslint.config.js'] },

  ...compat.config({
    extends: [
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
      'prettier',
    ],

    env: { browser: true, es2021: true, 'jest/globals': true },

    plugins: [
      'import',
      'no-relative-import-paths',
      'risxss',
      'react-hooks',
      'prettier',
      '@typescript-eslint',
      'boundaries',
    ],

    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      ecmaFeatures: { jsx: true },
    },

    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        typescript: true,
        node: { moduleDirectory: ['src/', 'node_modules'] },
      },
      'boundaries/include': ['src/**/*'],
      'boundaries/elements': [
        {
          mode: 'full',
          type: 'shared',
          pattern: [
            'src/assets/**',
            'src/components/**',
            'src/hooks/**',
            'src/lib/**',
            'src/utils/**',
          ],
        },
        {
          mode: 'full',
          type: 'feature',
          capture: ['featureName'],
          pattern: ['src/features/*/**/*'],
        },
        {
          mode: 'full',
          type: 'app',
          capture: ['_', 'fileName'],
          pattern: ['src/app/**/*'],
        },
        {
          mode: 'full',
          type: 'neverImport',
          pattern: ['src/task/*'],
        },
        {
          mode: 'full',
          type: 'main',
          capture: ['fileName'],
          pattern: ['src/*'],
        },
      ],
    },

    rules: {
      'import/prefer-default-export': 'off',
      'import/no-extraneous-dependencies': ['off'],
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'type',
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'no-console': ['warn', { allow: ['error', 'warn'] }],
      'risxss/catch-potential-xss-react': 'error',
      'react/no-danger': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
        { blankLine: 'always', prev: 'multiline-const', next: '*' },
        { blankLine: 'always', prev: '*', next: 'multiline-const' },
        { blankLine: 'always', prev: '*', next: 'expression' },
        { blankLine: 'always', prev: 'expression', next: '*' },
        { blankLine: 'always', prev: '*', next: 'block-like' },
        { blankLine: 'always', prev: 'block-like', next: '*' },
      ],
      'react/jsx-key': 'error',
      'no-relative-import-paths/no-relative-import-paths': [
        'warn',
        { allowSameFolder: true, rootDir: 'src', allowedDepth: 2 },
      ],
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/default-param-last': 'off',
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: ['variableLike'],
          format: ['camelCase', 'PascalCase', 'UPPER_CASE', 'snake_case'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'forbid',
        },
      ],
      'react/function-component-definition': [
        'warn',
        {
          namedComponents: ['function-declaration', 'arrow-function'],
          unnamedComponents: 'arrow-function',
        },
      ],
      quotes: ['error', 'single', { avoidEscape: true }],
      'no-underscore-dangle': ['warn', { allowAfterThis: true }],
      'react/jsx-props-no-spreading': 'off',
      'react/no-did-update-set-state': 'off',
      'react/require-default-props': 'off',
      'react/jsx-newline': ['error'],

      // boundaries
      'boundaries/no-unknown': ['error'],
      'boundaries/no-unknown-files': ['error'],
      'boundaries/element-types': [
        'error',
        {
          default: 'disallow',
          rules: [
            {
              from: ['shared'],
              allow: ['shared'],
            },
            {
              from: ['feature'],
              allow: [
                'shared',
                ['feature', { featureName: '${from.featureName}' }],
              ],
            },
            {
              from: ['app', 'neverImport'],
              allow: ['shared', 'feature'],
            },
            {
              from: ['main'],
              allow: [['main', { fileName: ['*.css', 'App.tsx'] }]],
            },
          ],
        },
      ],
    },

    overrides: [
      {
        files: ['**/*.ts', '**/*.tsx'],
        extends: [
          'plugin:@typescript-eslint/recommended-type-checked',
          'plugin:@typescript-eslint/stylistic-type-checked',
        ],
        parser: '@typescript-eslint/parser',
        parserOptions: {
          project: ['./tsconfig.eslint.json'],
          tsconfigRootDir: __dirname,
          ecmaVersion: 2021,
          sourceType: 'module',
          ecmaFeatures: { jsx: true },
        },
        rules: {
          '@typescript-eslint/default-param-last': 'error',
        },
      },

      {
        files: ['**/store/**/reducers.ts', '**/store/**/reducers.js'],
        rules: {
          'default-param-last': 'off',
          '@typescript-eslint/default-param-last': 'off',
        },
      },
    ],
  }),
];
