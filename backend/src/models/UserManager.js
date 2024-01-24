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

  async update(id, user) {
    const { firstname, lastname, phone, address, email } = user;

    try {
      const [result] = await this.database.query(
        `UPDATE ${this.table} SET firstname = ?, lastname = ?, phone = ?, address = ?, email = ? WHERE id = ?`,
        [firstname, lastname, phone, address, email, id]
      );

      return result;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  // Ancienne méthode.
  // skills(user) {
  //   return this.database.query(
  //     `INSERT INTO skill (html, css, javascript, angular, react, php, symphony, git, github, trello) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  //     [
  //       user.html,
  //       user.css,
  //       user.javascript,
  //       user.angular,
  //       user.react,
  //       user.php,
  //       user.symphony,
  //       user.git,
  //       user.github,
  //       user.trello,
  //     ]
  //   );
  // }

  skills(user) {
    const columns = Object.keys(user).filter((key) => user[key] === true);

    if (columns.length === 0) {
      // Aucune compétence à insérer
      return Promise.resolve(); // ou une autre logique adaptée
    }

    const values = columns.map((key) => ({ name: key, confirmed: user[key] }));

    const placeholders = Array(values.length).fill("(?, ?)").join(", ");
    const flattenedValues = values.reduce(
      (acc, val) => acc.concat([val.name, val.confirmed]),
      []
    );

    const query = `INSERT INTO competence (name, confirmed) VALUES ${placeholders}`;

    return this.database.query(query, flattenedValues);
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
    return this.database.query(`SELECT * FROM ${this.table} WHERE id = ?`, [
      id,
    ]);
  }

  static hashPassword(password, workFactor = 5) {
    return bcrypt.hash(password, workFactor);
  }
}

module.exports = UserManager;
