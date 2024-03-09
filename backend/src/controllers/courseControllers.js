const models = require("../models/index");

const getCourse = async (_, res) => {
  try {
    const rows = await models.course.findAll();
    res.send(rows);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const getCoursesByCvId = async (req, res) => {
  try {
    const rows = await models.course.findAllByCvId(req.params.id);
    res.send(rows);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const postCourse = async (req, res) => {
  try {
    const rows = await models.course.create(req.body);
    res.send({
      id: rows.insertId,
      domaine: req.body.domaine,
      name: req.body.name,
    });
  } catch (err) {
    console.error(err);
    res.status(422).send({ error: err.message });
  }
};

const deleteCourseById = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);

    const [result] = await models.course.deleteId(id);
    res.status(201).send({ message: result });
  } catch (err) {
    console.error(err);
    res.status(422).send({ message: "Course not found." });
  }
};

module.exports = {
  getCourse,
  postCourse,
  deleteCourseById,
  getCoursesByCvId,
};
