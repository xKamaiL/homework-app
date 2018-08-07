module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['eslint:recommended', 'airbnb'],
  rules: { 'react/react-in-jsx-scope': 0 }
};
