const models = require("../models/index");

const postOffer = async (req, res) => {
  try {
    const result = await models.offer.create(req.body);
    res.json({ insertId: result.insertId });
  } catch (err) {
    console.error(err);
    res
      .status(400)
      .send({ message: "error pendant l'insertion dans la base de donnnées" });
  }
};

module.exports = {
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
