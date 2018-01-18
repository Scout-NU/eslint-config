module.exports = {
  plugins: ['prettier'],
  env: { es6: true },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        bracketSpacing: true,
        trailingComma: 'none',
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        semi: true
      }
    ],
    'no-var': 'error'
  }
};
