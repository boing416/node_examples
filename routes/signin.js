var express = require('express');
const { check, validationResult } = require('express-validator/check');
var router = express.Router();
var passport = require('passport');
const bcrypt = require('bcrypt');
const saltRounds = 10;

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/' , function (req, res) {
    res.render('login/signin');
});


router.post('/',
    // username must be an email
    check('username','Username field cannot be empty').not().isEmpty(),
    // password must be at least 5 chars long
    check('password','Password must be between 8-100 characters long').isLength({ min: 7 , max : 100})
    // check('passwordMath', 'Passwords do not match, plese try again').equals('password')

    , function (req, res) {
        // if (!req.body) return res.sendStatus(400);



        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        //    return res.status(422).json({ errors: errors.array() });
            console.log(errors.array());
        //     res.end();
            res.render('login/signin', {
                title : "Registration Error",
                errors : errors.array()
            });
        }
        else {
            const username = req.body.username;
            const password = req.body.password;
            const passwordMath = req.body.passwordMath;
            const email = req.body.email;

            // if(passwordMath === password){
                const db = require('../db_connect');

                bcrypt.hash(password, saltRounds, function(err, hash) {
                    // Store hash in your password DB.
                db.query('INSERT INTO user(username, password_hash, email, org_id) VALUES (?, ?, ? ,?)',[username, hash, email, 0], function (error, results, fields) {
                        if (error) throw error;
                     db.end();
                        // db.query('SELECT LAST_INSERT_ID() as user_id', function (error, result, fields) {
                        //
                        //     if(error) throw error;
                        //     db.end();
                        //     const user_id = result[0];
                            const user_id = results.insertId;

                            console.log(user_id);

                            req.login(user_id, function (err) {
                                res.redirect('/');
                            });

                            // res.render('index');
                        // });


                    });

                    // db.end();
                });

            passport.serializeUser(function(user_id, done) {
                done(null, user_id);
            });

            passport.deserializeUser(function(user_id, done) {
                done(null, user_id);
            });

            function authenticationMiddleware() {

                return (req,res,next) => {
                    console.log(`req.session.passport.user: req.session.passport.array()`);

                    if(req.isAuthenticated()) return next(

                    );

                    res.redirect('/login');
                }

            }

            // }
        }










   // console.log('SELECT * FROM `user` WHERE `username` = "' + req.body.login + '"');


    // app.get('http://trans-book.com/backend/web/user/auth?username='+req.body.login+'&password='+req.body.password , function (req, res) {
    //     // res.sendFile(__dirname + "/about.html");
    //     console.log(res);
    // });

    // request('http://trans-book.com/backend/web/user/auth?username=boing&password=123456', { json: true }, (err, res, body) {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     console.log(body.url);
    //     console.log(body.explanation);
    // });

    // var query = 'SELECT fullname FROM `user` WHERE `username` = "' + req.body.login + '"';
    //
    // db.connection.query(
    //     query,
    //     function(err, results, fields) {
    //         if(err) console.log("ERROR MAIN: " + err);
    //         if(results)
    //         {
    //             console.log("//////////////////////////////////////////RESULT//////////////////////////////////////////////////////////////////////////////");
    //             console.log(results[0].fullname);
    //             console.log("////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////");
    //         }
    //         // console.log(results); // results contains rows returned by server
    //         // console.log(fields); // fields contains extra meta data about results, if available
    //
    //
    //     }
    // );

    //  res.render('about-success', {data: req.body});
});

// app.get('/login' , function (req, res) {
//     // res.sendFile(__dirname + "/about.html");
//     res.render('login');
// });


module.exports = router;