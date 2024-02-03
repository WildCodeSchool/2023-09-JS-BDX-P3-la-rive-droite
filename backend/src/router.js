const express = require("express");
const multer = require("multer");

const multerMiddleware = require("./middlewares/multerMiddleware");

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
// const OfferCompetenceManager = require("./models/OfferCompetenceManager");

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
router.get(
  "/users/me/get-matching-offers",
  authMiddleware,
  userControllers.getMatchingOffers
);

router.put("/users/:id([0-9]+)", authMiddleware, userControllers.updateUser);
// FOR ADMIN. */
router.get("/users/:id([0-9]+)", authMiddleware, userControllers.getUserById);
router.put(
  "/admin/edit-users/:id([0-9]+)",
  authMiddleware,
  authAdminMiddleware,
  userControllers.updateUserAsAdmin
);
router.delete(
  "/admin/users/:id([0-9]+)",
  authMiddleware,
  authAdminMiddleware,
  userControllers.deleteUser
);
/* SKILLS. */
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

// router.get(
//   "/offers/:id([0-9]+)/group/offers",
//   authMiddleware,
//   authAdminMiddleware,
//   OfferCompetenceManager.getOfferBySkill
// );

// router.get(
//   "/offers/:id([0-9]+)/group/offers",
//   authMiddleware,
//   authAdminMiddleware,
//   async (req, res) => {
//     console.log("Début de la route");
//     try {
//       // Votre logique de route ici
//       await OfferCompetenceManager.getOfferBySkill(req, res);
//       console.log("Fin de la route (success)");
//     } catch (error) {
//       console.error(error);
//       console.log("Fin de la route (erreur)");
//       res.status(500).send("Internal Server Error");
//     }
//   }
// );

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
router.get("/upload/:id", authMiddleware, uploadController.getUploadById);

router.get("/uploads", uploadController.getAllUploads);

router.post(
  "/uploads/:id",
  authMiddleware,
  upload.single("avatar"),
  multerMiddleware.renameFile,
  uploadController.createUpload
);

// router.put("/uploads", authMiddleware, uploadController.updateUpload);

/* CV. */
router.post("/cvs", authMiddleware, cvControllers.postCv);

// router.post("/signin", userControllers.postUser);
// router.update("/signin", userControllers.putUser);
module.exports = router;
