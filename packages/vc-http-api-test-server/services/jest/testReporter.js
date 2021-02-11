const MyCustomReporter = require("jest-html-reporters");
const fs = require('fs');
const { promises } = require('fs');

module.exports = async (directory, name, results) => {
  if (!fs.existsSync(directory)) {
    await promises.mkdir(directory, { recursive: true });
  }
  const reporter = new MyCustomReporter({}, {
    filename: `${directory}/report.html`,
    pageTitle: `${name} VC-HTTP-API Test Report`
  });
  
  await reporter.onRunComplete({}, results);
};