var db = require('../db.js');
var shortid = require('shortid');

module.exports.index = function(req, res){
    res.render('./user/user.pug',
        {danhSach: db.get('userList').value()}
    );
};

module.exports.search = function(req, res){
    var q = req.query.q;
    var matchedUser = db.get('userList').filter(function(x){
         return x.name.indexOf(q) !== -1;
    });
    res.render('./user/detail.pug',{
        danhSach: matchedUser.value()
    });
};

module.exports.createPage = function(req, res){
    res.render('./create/create.pug',{})
};

module.exports.userDetail = function(req, res){
    var idU = req.params.idUser;
    var user = db.get('userList').find({id: idU}).value();
    res.render('./user/detail.pug',
    {
        danhSach: user
    })
};

module.exports.createNew = function(req, res){
    req.body.id = shortid.generate();
    
    db.get('userList').push(req.body).write();
    res.redirect('/user');  // Phải là đường dẫn tuyệt đối đến folder
                            // Nghĩa là: chuyển hướng tới url localhost:3000/user
                            // Do ta đã định nghĩa ở trên:
                            //   module.export.index sẽ render trang user.pug
                            //   res.render('./user/user.pug')
                            // (xem lại code ở phía trên hoặc bài 02-template-enginer)
                            // Giả sử: nếu ta định nghĩa:
                            //   module.export.index sẽ render trang detail.pug
                            //   res.render('./user/detail.pug')
                            //   thì khi ta redirect('/user')
                            //   nó sẽ chuyển hướng tới trang user/detail.pug
    
  
};

module.exports.removeUser = function(req, res){
    var idU = req.params.idUser;
    db.get('userList').remove({ id: idU }).write();
    res.render('./user/user.pug',
    {
        danhSach: db.get('userList').value()
    });
};




