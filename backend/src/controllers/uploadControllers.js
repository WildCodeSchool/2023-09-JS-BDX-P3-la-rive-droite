const models = require("../models");
const userManager = require("../models/UserManager");

const getUploadById = async (req, res) => {
  try {
    const [item] = await models.upload.findId(req.params.id);
    if (item[0] != null) {
      res.json(item[0]);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const getAllUploads = async (req, res) => {
  try {
    const [item] = await models.upload.findAll(req.body);
    if (item) {
      res.json(item);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const createUpload = async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(400)
        .send({ message: "Aucun fichier n'a été téléchargé." });
    }
    // const { id } = req.params.id;
    const newUser = await models.upload.create({
      upload_url: req.file.path,
    });
    return res.status(201).send(newUser);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

async function updateUpload(req, res) {
  try {
    const { id } = req.params;
    const result = await userManager.updateUser(id, {
      upload_url: req.newPath,
    });
    res.send(result);
  } catch (error) {
    console.warn(error.message);
  }
}

// const updateUpload = async (req, res) => {
//   try {
//     const [result] = await models.user.findAll();
//     return res.send(result);
//   } catch (err) {
//     return res.status(400).send({ message: err.message });
//   }
// };

module.exports = { getUploadById, getAllUploads, updateUpload, createUpload };
