const models = require("../models/index");

const getOffers = (req, res) => {
  models.offer
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const postOffer = (req, res) => {
  models.offer
    .create(req.body)
    .then(([rows]) => {
      res.send({
        id: rows.insertId,
        email: req.body.email,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(422).send({ error: err.message });
    });
};

module.exports = {
  getOffers,
  postOffer,
};

// const postOffer = (req, res) => {
//     models.offer
//       .create(req.body)
//       .then(([rows]) => {
//         res.send({
//           id: rows.insertId,
//         });
//       })
//       .catch((err) => {
//         console.error(err);
//         res.status(422).send({ error: err.message });
//       });
//   };
