// Get variables from .env file for database connection
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

// Create a connection pool to the database
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

// Try to get a connection to the database
pool
  .getConnection()
  .then((connection) => {
    console.info(`Using database ${DB_NAME}`);

    connection.release();
  })
  .catch((error) => {
    console.warn(
      "Warning:",
      "Failed to establish a database connection.",
      "Please check your database credentials in the .env file if you need a database access."
    );
    console.error("Error message:", error.message);
  });

const models = {};
const UserManager = require("./UserManager");
const OfferManager = require("./OfferManager");

models.user = new UserManager();
models.offer = new OfferManager();

models.user.setDatabase(pool);
models.offer.setDatabase(pool);
// bonus: use a proxy to personalize error message,
// when asking for a non existing model
const handler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop];
    }
    const pascalize = (string) =>
      string.slice(0, 1).toUpperCase() + string.slice(1);
    throw new ReferenceError(
      `models.${prop} is not defined. Did you create ${pascalize(
        prop
      )}Manager.js, and did you register it in backend/src/models/index.js?`
    );
  },
};
module.exports = new Proxy(models, handler);
