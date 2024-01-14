const bcrypt = require("bcrypt");
const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  create(user) {
    return UserManager.hashPassword(user.password).then(async (hash) => {
      const [rows] = await this.database.query(
        `INSERT INTO ${this.table} (firstname, lastname, phone, address, email, password, is_admin) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
          user.firstname,
          user.lastname,
          user.phone,
          user.address,
          user.email,
          hash,
          0,
        ]
      );
      return rows;
    });
  }

  skills(user) {
    return this.database.query(
      `INSERT INTO skill (html, css, javascript, angular, react, php, symphony, git, github, trello) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user.html,
        user.css,
        user.javascript,
        user.angular,
        user.react,
        user.php,
        user.symphony,
        user.git,
        user.github,
        user.trello,
      ]
    );
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

  getProfile(id) {
    return this.database.query(
      `SELECT id, email, is_admin AS isAdmin FROM ${this.table} WHERE id = ?`,
      [id]
    );
  }

  getInfoProfile(user) {
    return this.database.query(
      `SELECT firstname, lastname, phone, email, address FROM ${this.table} WHERE id = ?`,
      [user.id]
    );
  }

  static hashPassword(password, workFactor = 5) {
    return bcrypt.hash(password, workFactor);
  }
}

module.exports = UserManager;
