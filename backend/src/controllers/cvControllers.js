const models = require("../models/index");

const getCv = async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  if (userId !== req.user.id && !req.user.isAdmin) {
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

module.exports = { getCv };
