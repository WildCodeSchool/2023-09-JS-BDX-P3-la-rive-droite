const jwt = require("jsonwebtoken");
const models = require("../models/index");

function generateAccessToken(data) {
  return jwt.sign(data, process.env.APP_SECRET);
}

const getUsers = (_, res) => {
  models.user
    .findAll()
    .then((rows) => {
      // delete rows.forEach((info) => info.password);
      // console.log(rows);
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// const getUsers = (req, res) => {
//   console.log(req.body);
//   console.log(res.body);
//   models.user
//     .getAll(res.body)
//     .catch((err) => {
//       console.error(err);
//       res.sendStatus(500);
//     });
// };

const getUserById = async (req, res) => {
  const id = +req.params.id;
  try {
    const [result] = await models.user.findId(id);
    if (!result.length) {
      return res.status(404).send({ error: "User not found" });
    }
    return res.send(result[0]);
  } catch (error) {
    return res.status(422).send({ error: error.message });
  }
};

const postUser = (req, res) => {
  models.user
    .create(req.body)
    .then((rows) => {
      res.send({
        id: rows.insertId,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone: req.body.phone,
        address: req.body.address,
        email: req.body.email,
        is_admin: req.body.is_admin,
        competenceId: rows.competenceId,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(422).send({ error: err.message });
    });
};

const getSkills = (req, res) => {
  models.user
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
  const userId = +req.body.params.id;
  models.user
    .userCompetence(userId, req.body)
    .then((rows) => {
      res.status(201).send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: err.message });
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
  models.user
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

const getProfile = (req, res) => {
  delete req.user.password;
  res.send(req.user);
};

module.exports = {
  getUsers,
  postUser,
  postLogin,
  updateUser,
  getProfile,
  getUserById,
  postSkills,
  getSkills,
};
