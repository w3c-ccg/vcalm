const fastifySwagger = require('fastify-swagger');

const registerSwagger = (server) => {
  server.register(fastifySwagger, {
    swagger: {
      info: {
        title: 'VC HTTP API Test Server',
        description: 'VC HTTP API Test Conformance.',
        version: '0.0.0',
        contact: {
          name: 'GitHub Source Code',
          url: 'https://github.com/w3c-ccg/vc-http-api',
        },
      },

      basePath: '',
    },
    routePrefix: 'api/docs',
    exposeRoute: true,
  });
};

module.exports = { registerSwagger };