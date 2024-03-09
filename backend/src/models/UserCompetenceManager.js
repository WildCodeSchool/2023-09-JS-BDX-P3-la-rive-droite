const AbstractManager = require("./AbstractManager");

class UserCompetenceManager extends AbstractManager {
  constructor() {
    super({ table: "user_competence" });
  }

  async setUserCompetencesList(userId, body) {
    try {
      await this.database.query(
        `DELETE FROM ${this.table} WHERE user_id = ${userId}`
      );

      const competences = body.competences ?? [];

      let sql = `INSERT INTO ${this.table} (user_id, competence_id) VALUES`;

      const sqlValues = [];
      competences.forEach((competenceId) => {
        sql += `${sqlValues.length > 0 ? "," : ""} (?,?)`;
        sqlValues.push(userId);
        sqlValues.push(competenceId);
      });
      const [result] = await this.database.query(sql, sqlValues);
      return result;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  async getUserCompetences(userId) {
    // Je sélécionne toutes les colonnes de la table compétences
    // Je fais une jointure avec la table user_competence
    // Je filtre sur les user_competence qui ont l'id de l'utilisateur actuel

    const [result] = await this.database.query(
      `SELECT competence.* FROM competence 
      LEFT JOIN ${this.table} ON competence.id = ${this.table}.competence_id 
      WHERE ${this.table}.user_id = ?`,
      [userId]
    );

    return result;
  }
}

module.exports = UserCompetenceManager;
