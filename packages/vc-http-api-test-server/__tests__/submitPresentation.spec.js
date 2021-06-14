let { suiteConfig } = global;

const httpClient = require("../services/httpClient");
const utilities = require("../services/utilities");

if (
  suiteConfig.submitPresentationConfiguration &&
  suiteConfig.notifyPresentationConfiguration &&
  suiteConfig.authentication
) {
  describe("Submit Presentation API", () => {
    let verifiablePresentations = suiteConfig.verifiablePresentations;

    const {
      authentication,
      submitPresentationConfiguration,
      notifyPresentationConfiguration,
    } = suiteConfig;
    const { endpoint, proveEndpoint } = submitPresentationConfiguration;
    const { endpoint: notifyEndpoint } = notifyPresentationConfiguration;

    let domain, challenge, accessToken;

    beforeAll(async () => {
      const res = await httpClient.postJson(
        authentication.endpoint,
        authentication.request,
        {}
      );
      accessToken = res.body.access_token;
    });

    beforeEach(() => {
      verifiablePresentations = utilities.cloneObj(
        suiteConfig.verifiablePresentations
      );
    });

    it("1. the submit presentation should fail if wallet has no record of the challenge", async () => {
      const body = verifiablePresentations[0];
      const res = await httpClient.postJson(endpoint, body, {});
      expect(res.status).toBe(400);
    });

    it("2. the submit presentation should pass", async () => {
      const body = {
        query: [{ type: "UniversityDegreeCredential" }],
      };
      const res = await httpClient.postJson(notifyEndpoint, body, {});
      expect(res.status).toBe(200);
      expect(res.body.query).toBeDefined();
      expect(res.body.domain).toBeDefined();
      expect(res.body.challenge).toBeDefined();
      ({ domain, challenge } = res.body);
      const body2 = {
        presentation: verifiablePresentations[0],
        options: {
          // Will be filled with the signing key id by the API
          verificationMethod: null,
          proofPurpose: "assertionMethod",
          domain,
          challenge,
        },
      };
      const res2 = await httpClient.postJson(proveEndpoint, body2, {
        type: "oauth2-bearer-token",
        accessToken,
      });
      expect(res2.status).toBe(201);
    });
  });
}
