const AbstractManager = require("./AbstractManager");

class OfferManager extends AbstractManager {
  constructor() {
    super({ table: "offer" });
  }

  create(offer) {
    return this.database.query(
      `INSERT INTO ${this.table} (title, company, type, city, mission, search_profile, work_place, salary, info, email) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        offer.title,
        offer.company,
        offer.type,
        offer.city,
        offer.mission,
        offer.search_profile,
        offer.work_place,
        offer.salary,
        offer.info,
        offer.email,
      ]
    );
  }
}

module.exports = OfferManager;
