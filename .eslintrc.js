module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  // 0 off, 1 warn, 2 err
  rules: {
    'arrow-body-style': 0,
    'jsx-a11y/label-has-for': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'max-lines-per-function': [
      2,
      { max: 320, skipComments: true, skipBlankLines: true }
    ],
    'no-confusing-arrow': 0,
    'no-nested-ternary': 0,
    'no-console': 0,
    'no-param-reassign': [
      2,
      { props: true, ignorePropertyModificationsFor: ['draft'] }
    ],
    'react/no-this-in-sfc': 0,
    'react/prop-types': 0,
    'react/display-name': 'off'
  }
}
