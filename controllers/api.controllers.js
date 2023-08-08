const models = require("../models/api.model.js");

exports.healthCheckController = (req, res) => {
  res.status(200).send({ msg: `server is running` });
  res.end();
};

exports.getParksController = (req, res) => {
  models.readParks().then((parks) => {
    res.status(200).send({ parks });
    res.end();
  });
};

exports.getRideByIdController = (req, res) => {
  const id = req.params.ride_id;

  models.getRideById(id).then((ride) => {
    res.status(200).send({ ride });
    res.end();
  });
};
