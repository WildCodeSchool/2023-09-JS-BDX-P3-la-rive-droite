const bcrypt = require("bcrypt");
const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  create(user) {
    return UserManager.hashPassword(user.password).then(async (hash) => {
      const [rows] = await this.database.query(
        `INSERT INTO user (firstname, lastname, phone, address, email, password, is_admin) VALUES (?, ?, ?, ?, ?, ?, ?)`,
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
      // const userId = rows.insertId;

      // const [userCompetence] = await this.database.query(
      //   "INSERT INTO user_competence (user_id, html, css, javascript, angular, react, php, symphony, git, github, trello) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      //   [
      //     userId,
      //     user.html,
      //     user.css,
      //     user.javascript,
      //     user.angular,
      //     user.react,
      //     user.php,
      //     user.symphony,
      //     user.git,
      //     user.github,
      //     user.trello,
      //   ]
      // );

      return { rows };
    });
  }

  async update(id, user) {
    const { firstname, lastname, phone, email, address } = user;

    try {
      const [result] = await this.database.query(
        `UPDATE ${this.table} SET firstname = ?, lastname = ?, phone = ?, email = ?, address = ? WHERE id = ?`,
        [firstname, lastname, phone, email, address, id]
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
    return this.database.query(`SELECT * FROM user WHERE id = ?;`, [id]);
  }

  addAvatar(userId, avatarId) {
    return this.database.query(
      `UPDATE ${this.table} SET avatar = ? WHERE id = ?`,
      [avatarId, userId]
    );
  }

  static hashPassword(password, workFactor = 5) {
    return bcrypt.hash(password, workFactor);
  }
}

module.exports = UserManager;
