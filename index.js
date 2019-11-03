
var pug = require('pug');
var express = require('express');
var app = express();
var port = 3000;

var db = require('./db.js');
var router = require('./routers/user.route.js');

app.set('views', './view');
app.set('view engine', 'pug');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', function(req, res){
    res.render('index.pug',
        {danhSach: db.get('userList').value()}
    )
});

app.use('/user', router);

app.listen(port, function(){
    console.log("Server start in port", port);
})




