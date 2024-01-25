const jwt = require("jsonwebtoken");
const models = require("../models/index");

function generateAccessToken(data) {
  return jwt.sign(data, process.env.APP_SECRET);
}

// const getUsers = (_, res) => {
//   models.user
//     .findAll()
//     .then((rows) => {
//       // delete rows.forEach((info) => info.password);
//       // console.log(rows);
//       res.send(rows);
//     })
//     .catch((err) => {
//       console.error(err);
//       res.sendStatus(500);
//     });
// };

const getUsers = async (_, res) => {
  try {
    const rows = await models.user.findAll();
    res.send(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: err.message });
  }
};

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

const postUser = async (req, res) => {
  try {
    const rows = await models.user.create(req.body);
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
  } catch (err) {
    console.error(err);
    res.status(422).send({ error: err.message });
  }
};

const getSkills = async (req, res) => {
  try {
    const rows = await models.user.findAll(req.body);
    res.status(201).send(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const postSkills = async (req, res) => {
  try {
    const userId = +req.body.params.id;
    const rows = await models.user.userCompetence(userId, req.body);
    res.status(201).send(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const postLogin = async (req, res) => {
  try {
    const user = await models.user.login(req.body);
    if (user) {
      const token = generateAccessToken(user);
      res.send({ token });
    } else {
      res.status(401).send({ error: "Identifiant incorrect!!!" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (!id) {
      res.sendStatus(500);
    }
    const result = await models.user.update(id, req.body);
    if (result.affectedRows.length === 0) {
      res.sendStatus(500);
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(422).send({ error: error.message });
  }
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
