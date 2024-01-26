const models = require("../models/index");

const getOffers = async (req, res) => {
  try {
    const rows = await models.offer.findAll();
    res.send(rows);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const getOfferById = async (req, res) => {
  try {
    const id = +req.params.id;
    const [item] = await models.offer.findId(id);
    if (item[0] != null) {
      res.json(item[0]);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(422);
  }
};

const postOffer = async (req, res) => {
  try {
    const [rows] = await models.offer.create(req.body);
    res.send({
      id: rows.insertId,
      email: req.body.email,
    });
  } catch (err) {
    console.error(err);
    res.status(422).send({ error: err.message });
  }
};

const putOffer = async (req, res) => {
  try {
    const id = +req.params.id;

    const [rows] = await models.offer.update(req.body, id);

    if (rows.affectedRows > 0) {
      res.send({
        id: req.body.id,
        offer: req.body,
      });
    } else {
      res.status(404).send({ error: "Une erreur s'est produite." });
    }
  } catch (err) {
    console.error(err);
    res.status(422).send({ error: err.message });
  }
};

const deleteOfferById = async (req, res) => {
  try {
    const id = +req.params.id;

    await models.offer.deleteId(id);
    res.status(201).json({ message: "Deleted." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Offer not found." });
  }
};

const addSkills = async (req, res) => {
  try {
    const offerId = +req.params.id;

    await models.offerCompetence.addOfferCompetences(offerId, req.body);
    const competences = await models.offerCompetence.getOfferCompetences(
      offerId
    );

    return res.status(201).send(competences);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

module.exports = {
  addSkills,
  getOffers,
  getOfferById,
  postOffer,
  putOffer,
  deleteOfferById,
};
