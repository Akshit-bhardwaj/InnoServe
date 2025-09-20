const express = require("express")
const router = express.Router()
const controller = require("../controllers/serviceController")

router.get("/services" , controller.getServices)

module.exports = router