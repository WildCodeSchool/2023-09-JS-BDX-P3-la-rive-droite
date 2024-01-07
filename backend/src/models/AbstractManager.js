// Import database client

// Provide database access through AbstractManager class
class AbstractManager {
  constructor({ table }) {
    // Store the table name
    this.table = table;

    // Provide access to the database client
  }

  findAll() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }

  findId(id) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE id = ?`, [
      id,
    ]);
  }

  setDatabase(database) {
    this.database = database;
  }

  deleteAll() {
    return this.database.query(`DELETE FROM ${this.table}`);
  }

  deleteId(id) {
    return this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
  }
}

// Ready to export
module.exports = AbstractManager;
