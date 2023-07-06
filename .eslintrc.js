/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  env: {
    node: true,
    jest: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@repo-tooling/dprint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  // root: true,
  // ignorePatterns: ['.eslintrc.js'],
  rules: {
    // '@typescript-eslint/interface-name-prefix': 'off',
    // '@typescript-eslint/explicit-function-return-type': 'off',
    // '@typescript-eslint/explicit-module-boundary-types': 'off',
    // '@typescript-eslint/no-explicit-any': 'off',
    '@repo-tooling/dprint/dprint': [
      'error',
      {
        config: {
          indentWidth: 2,
          lineWidth: 120,
          semiColons: 'asi',
          quoteStyle: 'alwaysSingle',
          trailingCommas: 'onlyMultiLine',
          operatorPosition: 'maintain',
          'arrowFunction.useParentheses': 'force',
          newLineKind: 'lf',
          quoteProps: 'asNeeded',
        },
      },
    ],
  },
}
