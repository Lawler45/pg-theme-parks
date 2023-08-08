const express = require("express");
const app = express();
const controllers = require("./controllers/api.controllers");
// app.use(express.json());

app.get("/api/healthcheck", controllers.healthCheckController);

app.get("/api/parks", controllers.getParksController);

app.get("/api/ride/:ride_id", controllers.getRideByIdController);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ msg: "err" });
});

module.exports = app;
