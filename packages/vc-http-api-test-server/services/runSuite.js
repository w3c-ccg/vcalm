const jestRunner = require("jest");
const path = require("path");

module.exports = async (config) => {
  let results = await jestRunner.runCLI(
    {
      json: false,
      roots: [path.resolve(`${__dirname}/../`)],
      globals: JSON.stringify({ suiteConfig: config }),
    },
    [process.cwd()]
  );
  return results;
};