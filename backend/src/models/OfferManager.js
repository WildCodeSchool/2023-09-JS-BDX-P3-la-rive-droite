const AbstractManager = require("./AbstractManager");

class OfferManager extends AbstractManager {
  constructor() {
    super({ table: "offer" });
  }

  // findId(id) {
  //   return this.database.query(`SELECT * FROM ${this.table} WHERE id = ?`, [
  //     id,
  //   ]);
  // }

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

  // deleteId(id) {
  //   return this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
  // }
}

module.exports = OfferManager;

// Methode de Mahdi. ->
// async create(offer) {
//   console.error("manager ");
//   try {
//     const [res] = await this.database.query(
//       `INSERT INTO ${this.table} (title, company, type, city, mission, search_profile, work_place, salary, info, email) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
//       [
//         offer.title,
//         offer.company,
//         offer.type,
//         offer.city,
//         offer.mission,
//         offer.search_profile,
//         offer.work_place,
//         offer.salary,
//         offer.info,
//         offer.email,
//       ]
//     );
//     return res;
//   } catch (err) {
//     console.error(err);
//     return null;
//   }
// }
