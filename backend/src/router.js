const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const offerControllers = require("./controllers/offerControllers");
const experienceControllers = require("./controllers/experienceControllers");
const courseControllers = require("./controllers/courseControllers");
const cvControllers = require("./controllers/cvControllers");
const {
  authMiddleware,
  authAdminMiddleware,
} = require("./middlewares/security/auth.middlewares");

router.get("/users", userControllers.getUsers);
router.post("/users", userControllers.postUser);
router.get("/users/:id/cvs", authMiddleware, cvControllers.getCv);
router.get("/users/me", authMiddleware, userControllers.getProfile);
router.post("/login", userControllers.postLogin);

router.get("/offer", offerControllers.getOffers);
router.get("/offer/:id", offerControllers.getOfferById);
router.post(
  "/offer",
  authMiddleware,
  authAdminMiddleware,
  offerControllers.postOffer
);
router.delete(
  "/offer/:id",
  authMiddleware,
  authAdminMiddleware,
  offerControllers.deleteOfferById
);

router.get(
  "/experiences",
  authMiddleware,
  experienceControllers.getExperiences
);
router.get(
  "/experience/:id",
  authMiddleware,
  experienceControllers.getExperienceById
);
router.post(
  "/experience",
  authMiddleware,
  experienceControllers.postExperience
);
router.put(
  "/experience/:id",
  authMiddleware,
  experienceControllers.updateExperience
);
router.delete(
  "/experience/:id",
  authMiddleware,
  experienceControllers.deleteExperienceById
);

router.get("/course", authMiddleware, courseControllers.getCourse);
router.get("/course/:id", authMiddleware, courseControllers.getCourseById);
router.post("/course", authMiddleware, courseControllers.postCourse);
router.put("/course/:id", authMiddleware, courseControllers.updateCourse);
router.delete(
  "/course/:id",
  authMiddleware,
  courseControllers.deleteCourseById
);

router.post("/cvs", authMiddleware, authAdminMiddleware, cvControllers.postCv);

// router.post("/signin", userControllers.postUser);
// router.update("/signin", userControllers.putUser);
module.exports = router;
