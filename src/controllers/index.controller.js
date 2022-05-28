const db = require("../config/db.config");

function getLoginPage(req, res, next){
    res.render("login",{title:"Login",messages:{error: req.flash("error")}})
}
function authenticateUser(req, res,next){
    let password = req.body.password;
    let email = req.body.email;

    db.query(`SELECT * FROM administrators WHERE email = '${req.body.email}' `, email, (error, records, fields)=>{
        if(error) throw error;
        if(records.length < 1){
            req.flash("error", "The credentials were incorrect.");
            return res.redirect("/login")
        }
        let user = (records[0].password == password) ? records[0] : null;
        
        if(user){
            req.session.user = user;
            res.redirect("/")
        }
    })
}

function getHomePage(req, res, next){
    res.render("index",{title:"Home",user: req.session.user})
}


module.exports = {
    getLoginPage,
    getHomePage,
    authenticateUser
}