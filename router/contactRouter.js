// Router
const express = require("express");
const router = express.Router();
const controller = require("../controllers/contact-controller");

router.get(
  "/contact",
  controller.form
);
router.post(
  "/contact",
  controller.contactForm
);

module.exports = router;
