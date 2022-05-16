module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': 0,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'react-native/no-inline-styles': 0,
        'prettier/prettier': ['error', {'no-inline-styles': false}],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
