module.exports = extractTestSummary = (results) => {
  return {
    name: results.name,
    testResults: {
      numFailedTests: results.testResults.results.numFailedTests,
      numPassedTests: results.testResults.results.numPassedTests,
      numTotalTests: results.testResults.results.numTotalTests,
      testResults: results.testResults.results.testResults.map((result) => {
        return {
          numFailingTests: result.numFailingTests,
          numPassingTests: result.numPassingTests,
          testResults: result.testResults.map((result) => {
            return {
              ancestorTitles: result.ancestorTitles,
              failureDetails: result.failureDetails,
              failureMessages: result.failureMessages,
              fullName: result.fullName,
              status: result.status,
              title: result.title
            }
          })
        }
      })
    }
  }
};