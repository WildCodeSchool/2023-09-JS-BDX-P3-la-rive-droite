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

router.get(
  "/users",
  authMiddleware,
  authAdminMiddleware,
  userControllers.getUsers
);
router.post("/users", userControllers.postUser);
router.get("/users/:id([0-9]+)/cvs", authMiddleware, cvControllers.getCv);
router.get(
  "/user/:id([0-9]+)",
  authMiddleware,
  authAdminMiddleware,
  userControllers.getUserById
);
router.get("/users/me", authMiddleware, userControllers.getProfile);
router.get("/user/profile", authMiddleware, userControllers.getInfoProfile);
router.post("/login", userControllers.postLogin);

router.get("/offer", offerControllers.getOffers);
router.get("/offer/:id([0-9]+)", offerControllers.getOfferById);
router.post(
  "/offer",
  authMiddleware,
  authAdminMiddleware,
  offerControllers.postOffer
);
router.delete(
  "/offer/:id([0-9]+)",
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
  "/experience/:id([0-9]+)",
  authMiddleware,
  experienceControllers.getExperienceById
);
router.post(
  "/experience",
  authMiddleware,
  experienceControllers.postExperience
);
router.put(
  "/experience/:id([0-9]+)",
  authMiddleware,
  experienceControllers.updateExperience
);
router.delete(
  "/experience/:id([0-9]+)",
  authMiddleware,
  experienceControllers.deleteExperienceById
);

router.get("/course", authMiddleware, courseControllers.getCourse);
router.get(
  "/course/:id([0-9]+)",
  authMiddleware,
  courseControllers.getCourseById
);
router.post("/course", authMiddleware, courseControllers.postCourse);
router.put(
  "/course/:id([0-9]+)",
  authMiddleware,
  courseControllers.updateCourse
);
router.delete(
  "/course/:id([0-9]+)",
  authMiddleware,
  courseControllers.deleteCourseById
);

router.post("/cvs", authMiddleware, authAdminMiddleware, cvControllers.postCv);

// router.post("/signin", userControllers.postUser);
// router.update("/signin", userControllers.putUser);
module.exports = router;
