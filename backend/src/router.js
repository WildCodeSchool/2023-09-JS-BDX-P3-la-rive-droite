const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const offerControllers = require("./controllers/offerControllers");
const experienceControllers = require("./controllers/experienceControllers");
const courseControllers = require("./controllers/courseControllers");
const cvControllers = require("./controllers/cvControllers");

router.get("/users", userControllers.getUsers);
router.post("/users", userControllers.postUser);

router.post("/login", userControllers.postLogin);

router.get("/offer", offerControllers.getOffers);
router.get("/offer/:id", offerControllers.getOfferById);
router.post("/offer", offerControllers.postOffer);
router.delete("/offer/:id", offerControllers.deleteOfferById);

router.get("/experiences", experienceControllers.getExperiences);
router.get("/experience/:id", experienceControllers.getExperienceById);
router.post("/experience", experienceControllers.postExperience);
router.put("/experience/:id", experienceControllers.updateExperience);
router.delete("/experience/:id", experienceControllers.deleteExperienceById);

router.get("/course", courseControllers.getCourse);
router.get("/course/:id", courseControllers.getCourseById);
router.post("/course", courseControllers.postCourse);
router.put("/course/:id", courseControllers.updateCourse);
router.delete("/course/:id", courseControllers.deleteCourseById);

router.get("/cvs/:userId", cvControllers.getCv);
router.post("/cvs", cvControllers.postCv);

// router.post("/signin", userControllers.postUser);
// router.update("/signin", userControllers.putUser);
module.exports = router;
