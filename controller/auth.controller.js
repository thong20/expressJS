var db = require('../db.js');

module.exports.loginPage = function(req, res){
    
    res.render('./auth/login.pug')
}

module.exports.postLogin = function(req, res){
    // /email=xxx&pass=***
    var email = req.body.email;
    var password = req.body.password;

    // Tìm user trong db thông qua email
    var user = db.get('userList').find({email: email}).value();
    if(!user){
        res.render('./auth/login.pug',
            {
                errors: ['User does not exist'],
                values: req.body
            }
        );
        return;
    }

    if(password !== user.password){
        res.render('./auth/login.pug',
            {
                errors: ['Wrong password!'],
                values: req.body
            }
        );
        return;
    }
    res.cookie('userId', user.id);
    res.redirect('/user');

}