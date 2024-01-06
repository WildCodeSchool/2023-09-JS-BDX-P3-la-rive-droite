const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const offerControllers = require("./controllers/offerControllers");
const experienceControllers = require("./controllers/experienceControllers");

router.get("/users", userControllers.getUsers);
router.get("/experiences", experienceControllers.getExperiences);
router.post("/users", userControllers.postUser);

router.post("/login", userControllers.postLogin);

router.post("/offer", offerControllers.postOffer);
router.post("/experience", experienceControllers.postExperience);

router.put("/experience/:id", experienceControllers.updateExperience);

module.exports = router;
