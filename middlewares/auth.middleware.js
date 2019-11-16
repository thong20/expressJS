var db = require("../db.js");

module.exports.requireAuth = function(req, res, next){
    if(!req.cookies.userId){ // gonna install cookie-parser
        res.redirect('/auth/login');
        return;
    };

    // // tìm user có id == userId, mà nằm tron db thì next(), ngược lại thì phải tiếp tục login
    var user = db.get("userList").find({id: req.cookies.userId}).value(); // value() sẽ trả về 1 object
    // console.log(user);
    if(!user){
        res.redirect("/auth/login");
        return;
    }
    res.locals.user = user;
    next();
}


