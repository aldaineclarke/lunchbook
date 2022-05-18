
function getLoginPage(req, res, next){
    res.render("login")
}
// function getOrderPage(req, res, next){
//     res.render("MealOrder")
// }
function getHomePage(req, res, next){
    res.render("MealOrder")
}


module.exports = {
    getLoginPage,
    getHomePage,

}