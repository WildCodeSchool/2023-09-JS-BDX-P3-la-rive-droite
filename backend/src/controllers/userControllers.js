const jwt = require("jsonwebtoken");
const models = require("../models/index");

function generateAccessToken(data) {
  return jwt.sign(data, process.env.APP_SECRET);
}

const getUsers = (_, res) => {
  models.user
    .findAll()
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const postUser = (req, res) => {
  models.user
    .create(req.body)
    .then((rows) => {
      const token = generateAccessToken({
        id: rows.insertId,
        email: req.body.email,
        is_admin: req.body.is_admin,
      });
      res.send({
        id: rows.insertId,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone: req.body.phone,
        address: req.body.address,
        competence: req.body.competence,
        email: req.body.email,
        is_admin: req.body.is_admin,
        token,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(422).send({ error: err.message });
    });
  // res.status(418).send(req.body)
};

const postSkills = (req, res) => {
  models.user
    .skills(req.body)
    .then((rows) => {
      res.sendStatus(201).send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.send({ message: err.message });
    });
};

const postLogin = (req, res) => {
  models.user.login(req.body).then((user) => {
    if (user) {
      // todo : filtrer les données à envoyer
      const token = generateAccessToken(user);
      res.send({ token });
    } else {
      res.status(401).send({ error: "Identifiant incorrect!!!" });
    }
  });
};

const updateUser = async (req, res) => {
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

module.exports = {
  getUsers,
  postUser,
  postSkills,
  postLogin,
  updateUser,
};
