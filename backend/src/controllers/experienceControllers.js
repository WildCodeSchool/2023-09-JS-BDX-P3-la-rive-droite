// const jwt = require("jsonwebtoken");
const models = require("../models/index");

// function generateAccessToken(data) {
//   return jwt.sign(data, process.env.APP_SECRET);
// }

const getExperiences = (_, res) => {
  models.experience
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getExperienceById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  models.experience
    .findId(id)
    .then(([item]) => {
      if (item[0] != null) {
        res.json(item[0]);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(422);
    });
};

const postExperience = (req, res) => {
  models.experience
    .create(req.body)
    .then((rows) => {
      res.send({
        id: rows.insertId,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(422).send({ error: err.message });
    });
  // res.status(418).send(req.body)
};

const updateExperience = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (!id) {
    res.sendStatus(500);
  }

  models.experience
    .update(id, req.body)
    .then((result) => {
      if (result.affectedRows === 0) {
        res.sendStatus(500);
      }
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error(error);
      res.status(422).send({ error: error.message });
    });
};

const deleteExperienceById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  models.experience
    .deleteId(id)
    .then(([result]) => {
      res.status(201).send({ message: result });
    })
    .catch((err) => {
      console.error(err);
      res.status(422).send({ message: "Experience not found." });
    });
};

module.exports = {
  getExperiences,
  getExperienceById,
  postExperience,
  updateExperience,
  deleteExperienceById,
};
