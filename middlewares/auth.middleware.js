var db = require("../db.js");

module.exports.requireAuth = function(req, res, next){
    console.log(req.cookies);
    if(!req.cookies.userId){
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
    next();
}


