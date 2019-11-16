var express = require('express');
var router = express.Router();
var db = require('../db.js');

var controller = require("../controller/user.controller");
var validate = require("../validate/user.validate");
var middleware = require("../middlewares/auth.middleware");

router.get('/', middleware.requireAuth, controller.index);

router.get('/search', controller.search);

router.get('/create', controller.createPage);

router.get('/:idUser', controller.userDetail);
router.get('/delete/:idUser', controller.removeUser);

// router.post('/create', controller.createNew);
router.post('/create', validate.postCreate, controller.createNew);


module.exports = router;
