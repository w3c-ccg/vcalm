module.exports = extractTestSummary = (results) => {
  return {
    name: results.name,
    testResults: {
      numFailedTests: results.numFailedTests,
      numPassedTests: results.numPassedTests,
      numTotalTests: results.numTotalTests,
      testResults: results.testResults.map((result) => {
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