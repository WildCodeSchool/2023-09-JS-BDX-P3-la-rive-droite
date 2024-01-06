const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const offerControllers = require("./controllers/offerControllers");

router.get("/users", userControllers.getUsers);
router.post("/users", userControllers.postUser);

router.post("/login", userControllers.postLogin);

router.get("/offer", offerControllers.getOffers);
router.get("/offer/:id", offerControllers.getOfferById);
router.post("/offer", offerControllers.postOffer);
router.delete("/offer/:id", offerControllers.deleteOfferById);

module.exports = router;
