const AbstractManager = require("./AbstractManager");

class ExperienceManager extends AbstractManager {
  constructor() {
    super({ table: "experience" });
  }

  async create(experience) {
    try {
      const [res] = await this.database.query(
        `INSERT INTO ${this.table} (title, company, city, type, is_working, date_begin, date_end, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          experience.title,
          experience.company,
          experience.city,
          experience.type,
          experience.isWorking,
          experience.dateBegin,
          experience.dateEnd,
          experience.description,
        ]
      );

      return res;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  async update(id, experience) {
    const {
      title,
      company,
      city,
      type,
      isWorking,
      dateBegin,
      dateEnd,
      description,
    } = experience;

    try {
      const [result] = await this.database.query(
        `UPDATE ${this.table} SET title = ?, company = ?, city = ?, type = ?, is_working = ?, date_begin = ?, date_end = ?, description = ? WHERE id = ?`,
        [
          title,
          company,
          city,
          type,
          isWorking,
          dateBegin,
          dateEnd,
          description,
          id,
        ]
      );

      return result;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

module.exports = ExperienceManager;
