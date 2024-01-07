const jwt = require("jsonwebtoken");
const models = require("../models/index");

function generateAccessToken(data) {
  return jwt.sign(data, process.env.APP_SECRET);
}

const getUsers = (_, res) => {
  models.user
    .findAll()
    .then(([rows]) => {
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
    .then(([rows]) => {
      const token = generateAccessToken({
        id: rows.insertId,
        email: req.body.email,
        is_admin: req.body.is_admin,
      });
      res.send({
        id: rows.insertId,
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

// const putUser = (req, res) => {
//   models.user.sigin(req.body).then((user) => {});
// };

module.exports = {
  getUsers,
  postUser,
  postLogin,
};
