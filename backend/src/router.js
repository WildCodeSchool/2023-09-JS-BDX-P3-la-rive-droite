const express = require("express");
const multer = require("multer");

const upload = multer({ dest: "public/uploads/" });

const router = express.Router();

const uploadController = require("./controllers/uploadControllers");
const userControllers = require("./controllers/userControllers");
const offerControllers = require("./controllers/offerControllers");
const experienceControllers = require("./controllers/experienceControllers");
const courseControllers = require("./controllers/courseControllers");
const cvControllers = require("./controllers/cvControllers");
const {
  authMiddleware,
  authAdminMiddleware,
} = require("./middlewares/security/auth.middlewares");

/* USER. */
router.get(
  "/users",
  authMiddleware,
  authAdminMiddleware,
  userControllers.getUsers
);
router.get("/users/:id([0-9]+)/cvs", authMiddleware, cvControllers.getCv);
router.get("/users/me", authMiddleware, userControllers.getProfile);
router.post("/users", userControllers.postUser);
router.post(
  "/users/:id([0-9]+)/add/skills",
  authMiddleware,
  userControllers.addSkills
);
router.put("/users/:id([0-9]+)", authMiddleware, userControllers.updateUser);
// FOR ADMIN. */
router.get("/users/:id([0-9]+)", authMiddleware, userControllers.getUserById);
// router.put("/admin/edit-users/:id([0-9]+)", authMiddleware, authAdminMiddleware, userControllers.updateUserAsAdmin);
router.delete(
  "/admin/users/:id([0-9]+)",
  authMiddleware,
  authAdminMiddleware,
  userControllers.deleteUser
);

router.post("/user/skills", userControllers.postSkills);
router.get("/user/skills", userControllers.getSkills);
// router.post("/user/skills/:id([0-9]+)", userControllers.postSkills);
router.post("/login", userControllers.postLogin);

/* OFFERS. */
router.get("/offer", offerControllers.getOffers);
router.get("/offer/:id([0-9]+)", offerControllers.getOfferById);
router.post(
  "/offer",
  authMiddleware,
  authAdminMiddleware,
  offerControllers.postOffer
);
router.put(
  "/offer/:id([0-9]+)",
  authMiddleware,
  authAdminMiddleware,
  offerControllers.putOffer
);
router.delete(
  "/offer/:id([0-9]+)",
  authMiddleware,
  authAdminMiddleware,
  offerControllers.deleteOfferById
);
router.post(
  "/offers/:id([0-9]+)/add/skills",
  authMiddleware,
  authAdminMiddleware,
  offerControllers.addSkills
);

/* EXPERIENCES. */
router.get(
  "/experiences",
  authMiddleware,
  experienceControllers.getExperiences
);
router.get(
  "/experiences/by-cv-id/:id([0-9]+)",
  authMiddleware,
  experienceControllers.getExperiencesByCvId
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
// router.put(
//   "/experience/:id([0-9]+)",
//   authMiddleware,
//   experienceControllers.updateExperience
// );
router.delete(
  "/experience/:id([0-9]+)",
  authMiddleware,
  experienceControllers.deleteExperienceById
);

/* COURSES. */
router.get("/course", authMiddleware, courseControllers.getCourse);
router.get(
  "/courses/by-cv-id/:id([0-9]+)",
  authMiddleware,
  courseControllers.getCoursesByCvId
);
router.get(
  "/course/:id([0-9]+)",
  authMiddleware,
  courseControllers.getCourseById
);
router.post("/course", authMiddleware, courseControllers.postCourse);
// router.put(
//   "/course/:id([0-9]+)",
//   authMiddleware,
//   courseControllers.updateCourse
// );
router.delete(
  "/course/:id([0-9]+)",
  authMiddleware,
  courseControllers.deleteCourseById
);
// UPLOADS
router.get("/uploads", authMiddleware, uploadController.getList);

router.post(
  "/uploads",
  authMiddleware,
  upload.single("avatar"),
  uploadController.create
);
/* CV. */
router.post("/cvs", authMiddleware, cvControllers.postCv);

// router.post("/signin", userControllers.postUser);
// router.update("/signin", userControllers.putUser);
module.exports = router;
