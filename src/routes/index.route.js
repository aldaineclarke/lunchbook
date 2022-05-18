const router = require("express").Router()
const indexController = require("../controllers/index.controller")

router.get("/login", indexController.getLoginPage);
router.get("/", indexController.getHomePage);







module.exports = router