const runJestCli = require("./cli");
const generateTestReport = require('./testReporter');
const extractTestSummary = require("./utilities");

const fs = require('fs');
const { promises } = require('fs');

const TEST_RESULTS_DIRECTORY = 'test_results';
const TEST_FILE_JSON = 'testResults.json';

async function capture(fn, p) {
  const originalWrite = p.write;
  let output = "";
  try {
    p.write = (chunk) => {
      if (typeof chunk === "string") {
        output += chunk;
      }
      return true;
    };
    await fn();
  } catch (e) {
    throw e;
  } finally {
    p.write = originalWrite;
  }
  return output;
}

module.exports = runTests = async (config) => {
  let results = [];
  const run = async () => {
    if (Array.isArray(config)) {
      await Promise.all(
        config.map(async (element) => {
          const directory = `${TEST_RESULTS_DIRECTORY}/${element.name}`;
          if (!fs.existsSync(directory)) {
            await promises.mkdir(directory, { recursive: true });
          }
          
          const output = await runJestCli(element);
          await generateTestReport(directory, element.name, output.results);
          const summary = extractTestSummary(output.results);
          console.log(summary);
          await promises.writeFile(
            `${directory}/${TEST_FILE_JSON}`,
            JSON.stringify(summary, null, 2)
          );
          results.push({
            name: element.name,
            results: summary
          })
        })
      );
    }
    else {
      const directory = `${TEST_RESULTS_DIRECTORY}/${config.name}`;
      const output = await runJestCli(config);
      await generateTestReport(directory, config.name, output.results);
      const summary = extractTestSummary(output.results);
      await promises.writeFile(
        `${directory}/${TEST_FILE_JSON}`,
        JSON.stringify(summary, null, 2)
      );
      results.push({
        name: config.name,
        results: summary
      })
    }
  };
  
  const capturedReport = await capture(run, process.stderr);

  return {
    suitesReportTerminal: Buffer.from(capturedReport).toString("base64"),
    suitesReportJson: results
  };
};