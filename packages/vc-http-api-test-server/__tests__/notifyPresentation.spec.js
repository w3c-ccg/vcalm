let { suiteConfig } = global;

const httpClient = require("../services/httpClient");

if (suiteConfig.notifyPresentationConfiguration) {
  describe("Notify Presentation API", () => {
    const { notifyPresentationConfiguration } = suiteConfig;
    const { endpoint } = notifyPresentationConfiguration;
    it("1. the notify presentation should pass", async () => {
      const body = {
        query: [{ type: "UniversityDegreeCredential" }],
      };
      const res = await httpClient.postJson(endpoint, body, {});
      expect(res.status).toBe(200);
      expect(res.body.query).toBeDefined();
      expect(res.body.domain).toBeDefined();
      expect(res.body.challenge).toBeDefined();
    });
  });
}
