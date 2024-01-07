const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const offerControllers = require("./controllers/offerControllers");
const experienceControllers = require("./controllers/experienceControllers");

router.get("/users", userControllers.getUsers);
router.post("/users", userControllers.postUser);

router.post("/login", userControllers.postLogin);

router.get("/offer", offerControllers.getOffers);
router.get("/offer/:id", offerControllers.getOfferById);
router.post("/offer", offerControllers.postOffer);
router.delete("/offer/:id", offerControllers.deleteOfferById);

router.get("/experiences", experienceControllers.getExperiences);
router.post("/experience", experienceControllers.postExperience);
router.put("/experience/:id", experienceControllers.updateExperience);

// router.post("/signin", userControllers.postUser);
// router.update("/signin", userControllers.putUser);
module.exports = router;
