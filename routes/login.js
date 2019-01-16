var express = require('express');
var router = express.Router();
var passport = require('passport');


router.get('/' , function (req, res) {
    res.render('login/login');
});


router.post('/', passport.authenticate('local',{
    successRedirect: '/',
    failureRedirect: 'login'
}));



passport.serializeUser(function(user_id, done) {
    done(null, user_id);
});

passport.deserializeUser(function(user_id, done) {
    done(null, user_id);
});


// app.get('/login' , function (req, res) {
//     // res.sendFile(__dirname + "/about.html");
//     res.render('login');
// });


module.exports = router;