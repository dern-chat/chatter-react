module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react-hooks/exhaustive-deps': 'off',
    'no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 1 }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    quotes: ['warn', 'single', { avoidEscape: true }],
  },
}
