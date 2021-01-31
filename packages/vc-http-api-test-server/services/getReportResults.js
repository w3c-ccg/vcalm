const runSuite = require("./runSuite");

const extractTestSummary = require("./sanitizeAllResults");

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

module.exports = getReportResults = async (config) => {
  let results = [];
  const runAll = async () => {
    await Promise.all(
      config.map(async (element) => {
        const testResults = await runSuite(element);
        results.push({
          name: element.name,
          testResults
        });
      })
    );
  };
  const capturedReport = await capture(runAll, process.stderr);
  return {
    suitesReportTerminal: Buffer.from(capturedReport).toString("base64"),
    suitesReportJson: extractTestSummary(results),
  };
};