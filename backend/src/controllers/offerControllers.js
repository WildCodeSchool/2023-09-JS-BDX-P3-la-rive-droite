const models = require("../models/index");

const getOffers = (req, res) => {
  models.offer
    .findAll()
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getOfferById = (req, res) => {
  const id = +req.params.id;

  models.offer
    .findId(id)
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

// const getOfferById = (req, res) => {
//   const id = parseInt(req.params.id);
//   console.log("Étape 01.");

//   models.offer
//   .query(`SELECT * FROM offer WHERE id = ?`,[id])
//   .then(([item]) => {
//     console.log("Étape 02.");
//     console.log(item);
//     if (item[0] != null) {
//         res.json(item[0]);
//       } else {
//         res.sendStatus(404);
//       }
//     })
//     .catch((err) => {
//       console.error(err);
//       res.sendStatus(422);
//     });
// };

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

const putOffer = (req, res) => {
  const id = +req.params.id;
  // const updated

  models.offer
    .update(req.body, id)
    .then(([rows]) => {
      if (rows.affectedRows > 0) {
        res.send({
          id: req.body.id,
          offer: req.body,
        });
      } else {
        res.status(404).send({ error: "Une erreur s'est produite." });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(422).send({ error: err.message });
    });
};

const deleteOfferById = (req, res) => {
  const id = +req.params.id;

  models.offer
    .deleteId(id)
    .then(() => {
      res.status(201).json({ message: "Deleted." });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Offer not found." });
    });
};

module.exports = {
  getOffers,
  getOfferById,
  postOffer,
  putOffer,
  deleteOfferById,
};
