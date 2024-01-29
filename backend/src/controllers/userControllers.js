const jwt = require("jsonwebtoken");
const models = require("../models/index");

function generateAccessToken(data) {
  return jwt.sign(data, process.env.APP_SECRET);
}

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
    const user = result[0];
    delete user.password;
    return res.send(user);
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

const updateUserAsAdmin = async (req, res) => {
  try {
    const id = +req.params.id;
    let result = await models.user.updateUser(id, req.body);
    if (result.affectedRows.length === 0) {
      return res.status(404);
    }
    [result] = await models.user.findId(id);
    const user = result[0];
    delete user.password;

    return res.send(user);
  } catch (err) {
    console.error(err);
    return res.status(422).send({ error: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = +req.params.id;

    await models.user.deleteId(userId);
    res.status(201).json({ message: "Utilisateur supprimé." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "User not found ..." });
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

const addSkills = async (req, res) => {
  try {
    const userId = +req.params.id;
    // sécurité
    if (req.user.id !== userId && !req.user.is_admin) {
      return res.status(403).send({ error: "You do not have permission" });
    }

    await models.userCompetence.addUserCompetences(userId, req.body);
    const competences = await models.userCompetence.getUserCompetences(userId);

    return res.status(201).send(competences);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getUsers,
  postUser,
  postLogin,
  updateUser,
  updateUserAsAdmin,
  deleteUser,
  getProfile,
  getUserById,
  postSkills,
  getSkills,
  addSkills,
};
