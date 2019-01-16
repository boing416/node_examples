var express = require('express');
const { check, validationResult } = require('express-validator/check');
var router = express.Router();
var passport = require('passport');
const bcrypt = require('bcrypt');
const saltRounds = 10;

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/' , function (req, res) {

    req.logout();
    req.session.destroy();
    res.redirect('/');
});





module.exports = router;