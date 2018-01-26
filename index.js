module.exports = {
  plugins: ['prettier'],
  env: { es6: true },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        bracketSpacing: true,
        trailingComma: 'es5',
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        semi: true
      }
    ],
    'no-var': 'error'
  }
};
