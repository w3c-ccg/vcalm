const fs = require('fs');
const getReportResults = require('./services/getReportResults');
const help = require('./help');

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

  const { suitesReportJson } = await getReportResults(config);

  fs.writeFileSync(
    `test-report.json`,
    JSON.stringify(suitesReportJson, null, 2)
  );
})();