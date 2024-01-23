const models = require("../models/index");

const getSkills = (req, res) => {
  models.user_competence
    .findAll(req.body)
    .then((rows) => {
      res.status(201).send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: err.message });
    });
};

const postSkills = (req, res) => {
  models.user_competence
    .skills(req.body)
    .then((rows) => {
      res.status(201).send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: err.message });
    });
};

module.exports = {
  postSkills,
  getSkills,
};
