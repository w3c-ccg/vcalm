const getReportResults = require("../services/getReportResults");

let config = require('../config');

const help = require('../help');

const registerRoutes = (server) => {
  server.get(
    "/",
    {
      schema: {
        hide: true,
      },
    },
    (req, reply) => {
      reply.redirect("/api/docs");
    }
  );
  server.post(
    "/test-suite-manager/generate-report",
    {
      schema: {
        tags: ["Test Suite Manager"],
        summary: "Generate Report",
        description: "Run tests on supplied suites",
        body: {
          type: "array",
          example: config,
          additionalProperties: true,
        },
        response: {
          200: {
            description: "Success",
            type: "object",
            additionalProperties: true,
          },
        },
      },
    },
    async (req, reply) => {
      try {
        let config = req.body;
        if (Array.isArray(config)) {
          config = config.map((item) => {
            return { 
              ...item, 
              verifiableCredentials: help.filterVerifiableCredentialsByDidMethods(item.verifiableCredentials, item.verifyCredentialConfiguration.didMethodsSupported) 
            }
          });
        }
        
        response = await getReportResults(config);
        reply.send({ ...response.suitesReportJson });
      } catch (e) {
        reply.status(500).send({ error: e.message });
      }
    }
  );
};

module.exports = { registerRoutes };