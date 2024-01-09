const models = require("../models/index");

const getCv = (req, res) => {
  const userId = parseInt(req.params.userId, 10);

  models.cv
    .findCvByUserId(userId)
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

const postCv = (req, res) => {
  models.cv
    .create(req.body)
    .then((rows) => {
      res.send({
        id: rows.insertId,
        userId: rows.user_id,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(422).send({ error: err.message });
    });
  // res.status(418).send(req.body)
};

module.exports = { postCv, getCv };
