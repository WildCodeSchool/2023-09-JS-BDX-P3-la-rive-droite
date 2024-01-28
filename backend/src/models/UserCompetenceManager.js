const AbstractManager = require("./AbstractManager");

class UserCompetenceManager extends AbstractManager {
  constructor() {
    super({ table: "user_competence" });
  }

  async addUserCompetences(userId, body) {
    const uniqValues = new Set(body.competences ?? []);
    const [userCompetences] = await this.database.query(
      `SELECT competence_id from ${this.table} where user_id = ?`,
      [userId]
    );

    userCompetences.forEach((userCompetence) => {
      if (uniqValues.has(userCompetence.competence_id)) {
        uniqValues.delete(userCompetence.competence_id);
      }
    });

    if (!uniqValues.size) {
      return [];
    }

    const sqlValues = [];
    let sql = `insert into ${this.table} (user_id, competence_id) VALUES`;

    [...uniqValues.values()].forEach((competenceId) => {
      sql += `${sqlValues.length > 0 ? "," : ""} (?,?)`;
      sqlValues.push(userId);
      sqlValues.push(competenceId);
    });

    const [result] = await this.database.query(sql, sqlValues);
    return result;
  }

  async getUserCompetences(userId) {
    // Je sélécionne toutes les colonnes de la table compétences
    // Je fais une jointure avec la table user_competence
    // Je filtre sur les user_competence qui ont l'id de l'utilisateur actuel

    const [result] = await this.database.query(
      `SELECT competence.* FROM competence LEFT JOIN ${this.table} ON competence.id = ${this.table}.competence_id WHERE ${this.table}.user_id = ?`,

      userId
    );

    return result;
  }
}

module.exports = UserCompetenceManager;
