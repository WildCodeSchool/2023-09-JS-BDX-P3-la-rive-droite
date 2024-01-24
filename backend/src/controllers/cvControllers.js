const models = require("../models/index");

const getCv = async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  if (userId !== req.user.id) {
    return res.status(403).send({ message: "Invalid user" }); // <=== Ton erreur vient d'ici
  }
  try {
    const [item] = await models.cv.findCvByUserId(userId);
    let cv = item[0] ?? null;
    if (cv === null) {
      const result = await models.cv.create(userId);
      if (result.affectedRows !== 1) {
        return res
          .status(422)
          .send({ message: "Une erreur inconnue est survenue" });
      }
      const [newCv] = await models.cv.findCvByUserId(userId);
      [cv] = newCv;
    }
    return res.json(cv);
  } catch (err) {
    console.error(err);
    return res.sendStatus(422);
  }
};

const postCv = async (req, res) => {
  try {
    const rows = await models.cv.create(req.body);
    res.send({
      id: rows.insertId,
      userId: rows.user_id,
    });
  } catch (err) {
    console.error(err);
    res.status(422).send({ error: err.message });
  }
};

module.exports = { postCv, getCv };
