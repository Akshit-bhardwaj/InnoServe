// Router
const express = require("express");
const router = express.Router();
const controller = require("../controllers/authController");
// const validate = require("../middlewares/validate-middlewares");
// const signupSchema = require("../validator/auth-validator");

// Routers

router.get("/home", controller.home);
router.get("/about" , controller.aboutPage)
router.get("/register", controller.formPage);
router.post("/register", controller.register);
router.get("/login", controller.loginPage);
router.post("/login", controller.login); //post we use to store data in Database.
router.get("/logout" , controller.logout)

module.exports = router;
