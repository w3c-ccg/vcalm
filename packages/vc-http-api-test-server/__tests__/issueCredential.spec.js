let { suiteConfig } = global;

const httpClient = require('../services/httpClient');

if (suiteConfig.issueCredentialConfiguration) {
  describe("Issue Credential API - Conformance", () => {
    // Load in the static test fixtures
    const credentials = suiteConfig.credentials;

    // Deal with possible polymorphic issuer configuration
    const issuerConfiguration = Array.isArray(suiteConfig.issueCredentialConfiguration) ? suiteConfig.issueCredentialConfiguration : [ suiteConfig.issueCredentialConfiguration ];

    issuerConfiguration.forEach((value) => {
      describe(`with issuer: ${value.id}`, () => {
        it('1. The Issuer\'s Issue Credential HTTP API MUST return a 201 HTTP response status code after successful credential issuance.', async () => {
            const body = {
                credential: { ...credentials[0].data, issuer: value.id },
            };
            const res = await httpClient.postJson(value.endpoint, body, {});
            expect(res.status).toBe(201);
            expect(res.body.proof).toBeDefined();
        });

        it(`2. The Issuer's Issue Credential HTTP API MUST require "credential" in the body of the POST request. The field "credential" MUST be conformant to [Verifiable Credentials Data Model 1.0](https://www.w3.org/TR/vc-data-model/).`, async () => {
            const body = {
                credential: { ...credentials[0].data, issuer: value.id },
            };
            const res = await httpClient.postJson(value.endpoint, body, {});
            expect(res.status).toBe(201);
            expect(res.body.proof).toBeDefined();
        });

        it(`3. The Issuer's Issue Credential HTTP API MUST return a 400 HTTP response status code when the request is rejected.`, async () => {
            const body = {
              credential: {
                ...credentials[0],
                '@context': 'force_error',
              },
            };
            const res = await httpClient.postJson(value.endpoint, body, {});
            expect(res.status).toBe(400);
        });

        it(`4. The Issuer's Issue Credential HTTP API MUST return a Verifiable Credential with the value of its "issuer" or "issuer.id" as a URI in the body of the response.`, async () => {
            const body = {
              credential: { ...credentials[0].data, issuer: value.id },
            };
            const res = await httpClient.postJson(value.endpoint, body, {});
            expect(res.status).toBe(201);
            expect(res.body).toBeDefined();
            expect(res.body.issuer).toBeDefined();
            const issuerId = res.body.issuer || res.body.issuer.id;
            expect(issuerId).toBeDefined();
        });

        it(`5. The Issuer's Issue Credential HTTP API MUST reject if the value of "options.proofPurpose" in the body of the POST request is not supported.`, async () => {
            const body = {
              credential: {
                ...credentials[0].data,
                issuer: value.id
              },
              options: {
                proofPurpose: 'foo',
              },
            };
            const res = await httpClient.postJson(value.endpoint, body, {});
            expect(res.status).toBe(400);
        });

        it(`6. The Issuer's Issue Credential HTTP API MUST reject if the value of "options.assertionMethod" in the body of the POST request does not exist.`, async () => {
            const body = {
              credential: {
                ...credentials[0].data,
                issuer: value.id
              },
              options: {
                ...value.options[0],
                assertionMethod: 'foo',
              },
            };
            const res = await httpClient.postJson(value.endpoint, body, {});
            expect(res.status).toBe(400);
        });

        it(`7. The Issuer's Issue Credential HTTP API MUST reject if the value of "credential" in the body of the POST request does not contain a context.`, async () => {
            const body = {
              credential: {
                ...credentials[0].data,
                issuer: value.id
              },
            };
            delete body.credential['@context'];
            const res = await httpClient.postJson(value.endpoint, body, {});
            expect(res.status).toBe(400);
        });

        it(`8. The Issuer's Issue Credential HTTP API MUST reject if the value of "credential" in the body of the POST request contains a malformed JSON-LD context.`, async () => {
          const body = {
            credential: {
              ...credentials[0].data,
              issuer: value.id
            },
          };
          body.credential['@context'] = [
            'https://www.w3.org/2018/credentials/v1',
            'broken',
          ];
          const res = await httpClient.postJson(value.endpoint, body, {});
          expect(res.status).toBe(400);
        });

        it(`9. The Issuer's Issue Credential HTTP API MUST must support no "options" in the body of the POST request.`, async () => {
          const body = {
            credential: {
              ...credentials[0].data,
              issuer: value.id
            }
          };
          const res = await httpClient.postJson(value.endpoint, body, {});
          expect(res.status).toBe(201);
          expect(res.body.proof).toBeDefined();
        });
      });
    });
  });
  
  describe("Issue Credential API - Credential Type Interop", () => {
    // Load in the static test fixtures
    const credentials = suiteConfig.credentials;

    // Deal with possible polymorphic issuer configuration
    const issuerConfiguration = Array.isArray(suiteConfig.issueCredentialConfiguration) ? suiteConfig.issueCredentialConfiguration : [ suiteConfig.issueCredentialConfiguration ];

    issuerConfiguration.forEach((value) => {
      describe(`With issuer: ${value.id}`, () => {
        credentials.forEach((credential) => {
          it(`Can issue ${credential.name} credential`, async () => {
            const body = {
              credential: { ...credentials[0].data, issuer: value.id },
          };
          const res = await httpClient.postJson(value.endpoint, body, {});
          expect(res.status).toBe(201);
          expect(res.body.proof).toBeDefined();
          })
        })
      });
    });
  });
}