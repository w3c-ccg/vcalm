const jest = require("jest");
const path = require("path");

const JEST_TEST_TIMEOUT_MS = 15000;

module.exports = async (config) => {
  let results = await jest.runCLI(
    {
      json: false,
      roots: [path.resolve(`${__dirname}/../../`)],
      globals: JSON.stringify({ suiteConfig: config }),
      testTimeout: JEST_TEST_TIMEOUT_MS
    },
    [process.cwd()]
  );
  return results;
};