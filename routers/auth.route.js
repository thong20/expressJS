var express = require('express');
var router = express.Router();
var db = require('../db.js');

var controller = require("../controller/auth.controller");

router.get('/login', controller.loginPage);
router.post('/login', controller.postLogin);

module.exports = router;

