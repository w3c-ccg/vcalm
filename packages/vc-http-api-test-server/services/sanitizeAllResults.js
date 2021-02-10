module.exports = extractTestSummary = (results) => {
    const summary = results.map((element) => {
      return {
        name: element.name,
        testResults: {
          numFailedTests: element.testResults.results.numFailedTests,
          numPassedTests: element.testResults.results.numPassedTests,
          numTotalTests: element.testResults.results.numTotalTests,
          testResults: element.testResults.results.testResults.map((result) => {
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
    });

    return summary.sort((a, b) =>
      JSON.stringify(a).localeCompare(JSON.stringify(b))
    );
};