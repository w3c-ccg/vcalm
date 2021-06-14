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
    let verifiableCredentials = suiteConfig.verifiableCredentials;

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
      const notifyBody = {
        query: [{ type: "UniversityDegreeCredential" }],
      };
      const notifyRes = await httpClient.postJson(notifyEndpoint, notifyBody, {});
      expect(notifyRes.status).toBe(200);
      expect(notifyRes.body.query).toBeDefined();
      expect(notifyRes.body.domain).toBeDefined();
      expect(notifyRes.body.challenge).toBeDefined();
      ({ domain, challenge } = notifyRes.body);
      verifiablePresentations[0].verifiableCredential = verifiableCredentials[0].data;
      const proveBody = {
        presentation: verifiablePresentations[0],
        options: {
          // Will be filled with the signing key id by the API
          verificationMethod: null,
          proofPurpose: "assertionMethod",
          domain,
          challenge,
        },
      };
      const proveRes = await httpClient.postJson(proveEndpoint, proveBody, {
        type: "oauth2-bearer-token",
        accessToken,
      });
      expect(proveRes.status).toBe(201);
      expect(proveRes.body).toBeDefined();
      expect(proveRes.body.type).toEqual(['VerifiablePresentation']);
      expect(proveRes.body.proof).toBeDefined();
      const submissionRes = await httpClient.postJson(endpoint, proveRes.body);
      expect(submissionRes.status).toBe(200);
      expect(submissionRes.body).toBeDefined();
      expect(submissionRes.body.verified).toBeTruthy();
    });
  });
}
