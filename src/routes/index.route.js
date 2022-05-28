const router = require("express").Router()
const indexController = require("../controllers/index.controller")

router.get("/login",indexController.getLoginPage);
router.post("/authenticate",indexController.authenticateUser)
router.get("/",authGuard, indexController.getHomePage);



function authGuard(req, res, next){
    console.log("in the auth")
	if(!(req.session.user)){

		return res.redirect("/login");
	}
	return next();
}





module.exports = router