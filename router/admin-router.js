// Make admin router.

const express = require("express");
const router = express.Router();
const controller = require("../controllers/admin-controller");
const authentication = require("../middlewares/auth-middleware");
const authorizeRole = require("../middlewares/authorizationRole");

// Admin route.

router.get(
  "/admin",
  authentication,
  authorizeRole(["admin"]),
  controller.getAdminPage
);

router.get(
  "/admin/user",
  authentication,
  authorizeRole(["admin"]),
  controller.getAllUser
);

router.get(
  "/admin/edit/user/:id",
  authentication,
  authorizeRole(["admin"]),
  controller.editPage
);

router.put(
  "/admin/edit/user/:id",
  authentication,
  authorizeRole(["admin"]),
  controller.editUser
);

router.delete(
  "/admin/delete/user/:id",
  authentication,
  authorizeRole(["admin"]),
  controller.deleteUser
);
router.get(
  "/admin/contact",
  authentication,
  authorizeRole(["admin"]),
  controller.getAllContacts
);
router.post(
  "/admin/delete/contact/:id",
  authentication,
  authorizeRole(["admin"]),
  controller.deleteContact
);

module.exports = router;
