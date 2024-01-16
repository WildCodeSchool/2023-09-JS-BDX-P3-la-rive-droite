const AbstractManager = require("./AbstractManager");

class SkillManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "competence" });
  }

  skills(user) {
    const columns = Object.keys(user).filter((key) => user[key] === true);

    if (columns.length === 0) {
      // Aucune compétence à insérer
      return Promise.resolve(); // ou une autre logique adaptée
    }

    const values = columns.map((key) => ({ name: key, confirmed: user[key] }));

    const placeholders = Array(values.length).fill("(?, ?)").join(", ");
    const flattenedValues = values.reduce(
      (acc, val) => acc.concat([val.name, val.confirmed]),
      []
    );

    const query = `INSERT INTO competence (name, confirmed) VALUES ${placeholders}`;

    return this.database.query(query, flattenedValues);
  }
}
module.exports = SkillManager;
