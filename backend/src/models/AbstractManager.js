// Import database client

// Provide database access through AbstractManager class
class AbstractManager {
  constructor({ table }) {
    // Store the table name
    this.table = table;

    // Provide access to the database client
  }

  async findAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  findId(id) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE name = ?`, [
      id,
    ]);
  }

  setDatabase(database) {
    this.database = database;
  }

  deleteId(id) {
    return this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
  }
}

// Ready to export
module.exports = AbstractManager;
