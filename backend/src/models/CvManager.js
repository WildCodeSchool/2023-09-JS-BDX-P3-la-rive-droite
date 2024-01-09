const AbstractManager = require("./AbstractManager");

class CvManager extends AbstractManager {
  constructor() {
    super({ table: "cv" });
  }

  async create(cv) {
    try {
      const [res] = await this.database.query(
        `INSERT INTO ${this.table} (user_id) VALUES (?)`,
        [cv.userId]
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
}

module.exports = CvManager;
