const runTestRunner = require('./services/jest/testRunner');
const help = require('./services/utilities');
let config = require('./config');

(async () => {
  if (Array.isArray(config)) {
    config = config.map((item) => {
      return { 
        ...item, 
        verifiableCredentials: help.filterVerifiableCredentialsByDidMethods(item.verifiableCredentials, item.verifyCredentialConfiguration.didMethodsSupported) 
      }
    });
  }

  await runTestRunner(config);

})();