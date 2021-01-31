### Jest Test Server

See [The VC HTTP API](https://github.com/w3c-ccg/vc-http-api) for motivation.

This module exposes a set of jest suites that operate on custom json configurations as an async function `getReportResults`.

## Usage

You may need to [install node.js](https://nodejs.org/en/).
You may also need to [install docker](https://docs.docker.com/get-docker/).

```
git clone git@github.com:w3c-ccg/vc-http-api.git
npm i
cd ./packages/vc-http-api-test-server
```

The suites can be tests manually, using:

```
npm run test
```

Or via http,

```
npm run start-test-server
```

### Testing with CURL

```
curl -s -X POST http://localhost:8080/test-suite-manager/generate-report \
-H "Content-Type: application/json" \
-d @./suites/did-spec/default.json
```