## vc-http-api

[![Implementation Interoperability Report](https://github.com/w3c-ccg/vc-http-api/actions/workflows/cd.yml/badge.svg)](https://github.com/w3c-ccg/vc-http-api/actions/workflows/cd.yml)

The VC HTTP API repository contains a standard API specification for constructing and verifying objects which conform to the [Verifiable Credential Data Model](https://www.w3.org/TR/vc-data-model/) specification, along with documentation, integration and compatability tests, and related assets for the test and integration process.

### Structure

The vc-http-api repository is structured with two main sections:

- [docs](./docs/) which contains the VC HTTP API spec itself in [OpenAPI](https://swagger.io/specification/) (formerly known as Swagger) form as well as related documentation to assist in building and testing a compliant implementation of the API spec
  - Architecture for the issuer model is discussed in the [architecture document](./docs/architecture.md)
  - Within docs, the versions of the API are stored in the appropriate folder under [versions](./docs/versions)
  - The core API itself is detailed in the [spec file](./docs/vc-http-api.yml) and this spec should be used as the master reference for the API
- [packages](./packages/) which contains test suites and related utilities for integration testing, test suite results, and related assets.

### Data Visualization

You may wish to programatically download the latest test results as JSON.

#### Test Results for All Implementations

- HTML Report: TODO

  ```
  curl -s https://w3c-ccg.github.io/vc-http-api/test-suite/testResults.json | jq
  ```

#### Test Results for a Specific Implementation

- HTML Report: https://w3c-ccg.github.io/vc-http-api/test-suite/IMPLEMENTATION_NAME

  ```
  curl -s https://w3c-ccg.github.io/vc-http-api/test-suite/IMPLEMENTATION_NAME/testResults.json | jq
  ```

### Contributing

We encourage contributions meeting the [Contribution Guidelines](CONTRIBUTING.md).  
While we prefer the creation of issues and Pull Requests in the GitHub repository, discussions often occur on the [public-credentials](http://lists.w3.org/Archives/Public/public-credentials/) mailing list as well.
