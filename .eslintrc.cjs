module.exports = {
  env: {
    browser: true
  },
  extends: [
    'digitalbazaar',
    'digitalbazaar/jsdoc'
  ],
  rules: {
    quotes: ['off', 'single', {allowTemplateLiterals: true}],
  }
};
