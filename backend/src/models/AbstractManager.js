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

  setDatabase(database) {
    this.database = database;
  }

  deleteAll() {
    return this.database.query(`DELETE FROM ${this.table}`);
  }
}

// Ready to export
module.exports = AbstractManager;
