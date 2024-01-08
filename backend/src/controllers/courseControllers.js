const models = require("../models/index");

const getCourse = (_, res) => {
  models.course
    .findAll()
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getCourseById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  models.course
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

const postCourse = (req, res) => {
  models.course
    .create(req.body)
    .then((rows) => {
      res.send({
        id: rows.insertId,
        domaine: req.body.domaine,
        name: req.body.name,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(422).send({ error: err.message });
    });
  // res.status(418).send(req.body)
};

const updateCourse = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (!id) {
    res.sendStatus(500);
  }

  models.course
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

const deleteCourseById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  models.course
    .deleteId(id)
    .then(([result]) => {
      res.status(201).send({ message: result });
    })
    .catch((err) => {
      console.error(err);
      res.status(422).send({ message: "Course not found." });
    });
};

module.exports = {
  getCourse,
  getCourseById,
  postCourse,
  updateCourse,
  deleteCourseById,
};
