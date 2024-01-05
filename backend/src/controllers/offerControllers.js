const models = require("../models/index");

const postOffer = (req, res) => {
  models.offer
    .create(req.body)
    .then(([rows]) => {
      res.send({
        id: rows.insertId,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(422).send({ error: err.message });
    });
};

module.exports = {
  postOffer,
};
