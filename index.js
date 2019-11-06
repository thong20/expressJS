
var pug = require('pug');
var express = require('express');
var app = express();
var port = 3000;

var cookieParser = require('cookie-parser');

var db = require('./db.js');
var userRouter = require('./routers/user.route.js');
var authRouter = require('./routers/auth.route.js');

app.set('views', './view');
app.set('view engine', 'pug');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());

app.get('/', function(req, res){
    res.render('index.pug',
        {danhSach: db.get('userList').value()}
    )
});

app.use('/user', userRouter);
app.use('/auth', authRouter);

app.listen(port, function(){
    console.log("Server start in port", port);
})





