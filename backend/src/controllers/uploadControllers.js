const models = require("../models");

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
    const { id } = req.params;
    const result = await models.upload.create(req.file);
    await models.user.updateUser(id, {
      upload_url: result.url,
    });
    return res.status(201).send({ avatar: result });
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

// const updateUpload = async (req, res) => {
//   try {
//     const [result] = await models.user.findAll();
//     return res.send(result);
//   } catch (err) {
//     return res.status(400).send({ message: err.message });
//   }
// };

module.exports = { getUploadById, getAllUploads, createUpload };
