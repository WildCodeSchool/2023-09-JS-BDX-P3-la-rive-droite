const bcrypt = require("bcrypt");

const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  create(user) {
    return UserManager.hashPassword(user.password).then((hash) => {
      return this.database.query(
        `insert into ${this.table} (firstname, lastname, phone, address, email, password, is_admin) values (?, ?, ?, ?, ?, ?, ?)`,
        [
          user.firstname,
          user.lastname,
          user.phone,
          user.address,
          user.email,
          hash,
          user.is_admin,
        ]
      );
    });
  }

  async login({ email, password }) {
    const [rows] = await this.database.query(
      `select * from user where email like ?`,
      [email]
    );
    // console.log(rows);
    if (!rows.length) {
      return undefined;
    }

    const user = rows[0];
    // console.log(user);

    const result = await bcrypt.compare(password, user.password);
    // console.log(result);

    return result ? user : undefined;
  }

  static hashPassword(password, workFactor = 5) {
    return bcrypt.hash(password, workFactor);
  }
}

module.exports = UserManager;
