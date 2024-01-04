// const jwt = require("jsonwebtoken");
const models = require("../models/index");

// function generateAccessToken(data) {
//   return jwt.sign(data, process.env.APP_SECRET, { expiresIn: "1800s" });
// }

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

module.exports = {
  getUsers,
};
