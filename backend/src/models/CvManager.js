const AbstractManager = require("./AbstractManager");

class CvManager extends AbstractManager {
  constructor() {
    super({ table: "cv" });
  }

  async create(userId) {
    try {
      const [res] = await this.database.query(
        `INSERT INTO ${this.table} (user_id) VALUES (?)`,
        [userId]
      );

      return res;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  async findCvByUserId(userId) {
    try {
      return this.database.query(
        `SELECT * FROM ${this.table} WHERE user_id = ?`,
        [userId]
      );
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  async findAllByCvId(cvId) {
    try {
      const [results] = await this.database.query(
        `SELECT * FROM ${this.table} WHERE cv_id = ?`,
        [cvId]
      );
      return results;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

module.exports = CvManager;
