module.exports = {
  testEnvironment: 'node',
  globals: {
    // Allow us to run the tests with jest without using the runLocal script
    suiteConfig: require('./config/Transmute'),
  },
};
