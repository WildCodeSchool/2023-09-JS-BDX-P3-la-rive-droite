const fs = require("fs");
const AbstractManager = require("./AbstractManager");

class UploadManager extends AbstractManager {
  constructor() {
    super({ table: "upload" });
  }

  async getUpload(uploadId) {
    const [upload] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [uploadId]
    );
    return upload;
  }

  create(data) {
    let fileName = data.destination.replace("/public", "");
    fileName += `${data.fileName}`;
    fileName += data.originalname.split(".").slice(-1);
    const filename = `${data.path}.${data.originalname.split(".").slice(-1)}`;

    return new Promise((resolve, reject) => {
      fs.rename(`${data.path}`, fileName, async (err) => {
        if (err) {
          reject(err);
        }
        const [result] = await this.database.query(
          `INSERT INTO ${this.table} (url) VALUES(?)`,
          [filename]
        );
        resolve({
          id: result.insertId,
          url: fileName,
        });
      });
    });
  }
}
module.exports = UploadManager;
