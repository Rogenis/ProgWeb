
const express = require("express")
const router = express.Router()
const mainController = require("../app/controllers/main")

router.get("/", mainController.index)
router.get("/sobre", mainController.sobre)
router.get("/game", mainController.game)
router.get("/ui", mainController.ui)


module.exports = router