const fs = require("fs");

function renameFile(req, res, next) {
  const proxyHost = req.headers["x-forwarded-host"];

  const host = proxyHost ?? req.headers.host;

  if (req.file && req.file.destination) {
    const { originalname, filename } = req.file;
    const relativePath = `uploads/${Date.now()}_${originalname}`;
    const newPath = `./public/${relativePath}`;
    const fullPath = `${req.protocol}://${host}/${relativePath}`;

    fs.rename(`./public/uploads/${filename}`, newPath, (err) => {
      if (err) {
        return;
      }
      req.newPath = fullPath;
      req.relativePath = relativePath;
      next();
    });
  } else {
    next(new Error("La destination du fichier est indéfinie."));
  }
}
module.exports = { renameFile };
