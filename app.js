const express = require("express");
const app = express();
const { healthCheckController } = require("./controllers/api.controllers");

app.listen(9090, () => {
  console.log("Server is listening on port 9090!");
});

app.get("/api/healthcheck", (req, res) => {
  healthCheckController(req, res);
  console.log(healthCheckController(req, res));
  res.end();
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ msg: "err" });
});

module.exports = app;
