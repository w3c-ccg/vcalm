const { app } = require("./app");

const port = 8080;

app.listen(port, "0.0.0.0", (err, address) => {
  if (err) {
    console.error(err);
  }
  console.log(`🚧 server listening on ${address}`);
});