
var express = require('express');
var router = express.Router();
var db = require('../db.js');

var controller = require("../controller/user.controller");

router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/create/', controller.createPage);

router.get('/:idUser', controller.userDetail);
router.get('/delete/:idUser', controller.removeUser);

router.post('/create', controller.createNew);
 
module.exports = router;
