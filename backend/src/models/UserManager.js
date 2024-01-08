const bcrypt = require("bcrypt");
const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  create(user) {
    return UserManager.hashPassword(user.password).then(async (hash) => {
      const [rows] = await this.database.query(
        `INSERT INTO ${this.table} (firstname, lastname, phone, address, email, competence, password, is_admin) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          user.firstname,
          user.lastname,
          user.phone,
          user.address,
          user.email,
          user.competence,
          hash,
          user.is_admin,
        ]
      );
      return rows;
    });
  }

  async login(user) {
    const { email, password } = user;
    const [rows] = await this.database.query(
      `SELECT * FROM user WHERE email LIKE ?`,
      [email]
    );
    if (!rows.length) {
      return undefined;
    }

    const dbUser = rows[0];

    const result = await bcrypt.compare(password, dbUser.password);

    return result ? dbUser : undefined;
  }

  addOffer() {
    return this.database.query(`INSERT INTO ${this.table} (title, )`);
  }

  static hashPassword(password, workFactor = 5) {
    return bcrypt.hash(password, workFactor);
  }
}

module.exports = UserManager;
