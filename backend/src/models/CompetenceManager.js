const AbstractManager = require("./AbstractManager");

class CompetenceManager extends AbstractManager {
  constructor() {
    super({ table: "competence" });
  }
}

module.exports = CompetenceManager;
