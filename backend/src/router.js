const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const offerControllers = require("./controllers/offerControllers");

router.get("/users", userControllers.getUsers);
router.post("/users", userControllers.postUser);

router.post("/login", userControllers.postLogin);

router.post("/offer", offerControllers.postOffer);

module.exports = router;
