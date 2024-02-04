const models = require("../models/index");

const getSkills = async (req, res) => {
  try {
    const rows = await models.competence.findAll();
    res.send(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getSkills,
};
