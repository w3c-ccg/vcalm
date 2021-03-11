const fastify = require("fastify");
const { registerSwagger } = require("./services/swagger");
const { registerRoutes } = require("./routes");

const opts = {
  ignoreTrailingSlash: true,
};

const app = fastify(opts);
app.register(require("fastify-cors"));

registerSwagger(app);
registerRoutes(app);

module.exports = { app };