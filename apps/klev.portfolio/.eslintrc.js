/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['next-typescript'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/jsx-curly-brace-presence': 'off',
    '@typescript-eslint/no-shadow': 'off',
  },
};
