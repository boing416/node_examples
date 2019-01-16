var express = require('express');
var bodyParser = require('body-parser');


var expressValidator = require('express-validator');

//Auth packages///////////////////////////////////////////////////
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var MySQLStore = require('express-mysql-session')(session);
const bcrypt = require('bcrypt');

//////////////////////////////////////////////////////////////////

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



const request = require('request');



var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine' , 'ejs');




app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var options = {
    connectionLimit : 10,
    host: 'localhost',
    user: 'root',
    database: 'tb',
    password: '316250'
};

var sessionStore = new MySQLStore(options);

app.use(session({
    secret: 'gsgrthyjhyukisdsd',
    resave: false,
    store: sessionStore,
    saveUninitialized: false
    // cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(function (req,res,next) {
   res.locals.isAuthenticated = req.isAuthenticated();
    next();

});


app.use(expressValidator());


app.use('/public', express.static('public'));
 


var indexRouter = require('./routes/index');
var newsRouter = require('./routes/news');
var loginRouter = require('./routes/login');
var registrRouter = require('./routes/signin');
var signoutRouter = require('./routes/signout');

var loadsRouter = require('./routes/app/loads');


app.use('/', indexRouter);
app.use('/news', newsRouter);
app.use('/login', loginRouter);
app.use('/signin', registrRouter);
app.use('/signout', signoutRouter);
app.use('/app/loads', loadsRouter);


passport.use(new LocalStrategy(
    function(username, password, done) {
        console.log(username);
        console.log(password);

        var db = require('./db_connect');


        db.query('SELECT id, password_hash FROM user WHERE username = ?', [username], function (err, results, fields) {
             if(err) { done(err)};
            console.log(results);

            if (typeof results == 'undefined') {
                return done(null, false);
            }
             if(results.length === 0) {
                 return done(null, false);
             }
             else {
                 console.log(results[0]);
                 const hash = results[0].password_hash.toString();

                 bcrypt.compare(password, hash, function (err, response) {
                     if(response === true)
                     {
                         return done(null, {user_id : results[0].id});
                     }
                     else{
                         return done(null, false);
                     }
                 });
             }





        });


    }
));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    console.log(err.message);
    res.render('error');
});

module.exports = app;


// app.get('/' , function (req, res) {
//     // res.sendFile(__dirname + "/index.html");
//     res.render('index');
// });
//
// app.get('/about' , function (req, res) {
//     // res.sendFile(__dirname + "/about.html");
//     res.render('about');
// });
//
// app.get('/login' , function (req, res) {
//     // res.sendFile(__dirname + "/about.html");
//     res.render('login');
// });
//
// app.post('/about', urlencodedParser  , function (req, res) {
//     if (!req.body) return res.sendStatus(400);
//     console.log(req.body);
//     res.render('about-success', {data: req.body});
// });
//
// app.post('/login', urlencodedParser  , function (req, res) {
//     if (!req.body) return res.sendStatus(400);
//     console.log(req.body.login);
//    // console.log('SELECT * FROM `user` WHERE `username` = "' + req.body.login + '"');
//
//
//     // app.get('http://trans-book.com/backend/web/user/auth?username='+req.body.login+'&password='+req.body.password , function (req, res) {
//     //     // res.sendFile(__dirname + "/about.html");
//     //     console.log(res);
//     // });
//
//     // request('http://trans-book.com/backend/web/user/auth?username=boing&password=123456', { json: true }, (err, res, body) {
//     //     if (err) {
//     //         return console.log(err);
//     //     }
//     //     console.log(body.url);
//     //     console.log(body.explanation);
//     // });
//
//     // var query = 'SELECT fullname FROM `user` WHERE `username` = "' + req.body.login + '"';
//     //
//     // db.connection.query(
//     //     query,
//     //     function(err, results, fields) {
//     //         if(err) console.log("ERROR MAIN: " + err);
//     //         if(results)
//     //         {
//     //             console.log("//////////////////////////////////////////RESULT//////////////////////////////////////////////////////////////////////////////");
//     //             console.log(results[0].fullname);
//     //             console.log("////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////");
//     //         }
//     //         // console.log(results); // results contains rows returned by server
//     //         // console.log(fields); // fields contains extra meta data about results, if available
//     //
//     //
//     //     }
//     // );
//
//     //  res.render('about-success', {data: req.body});
// });
//
// app.get('/news/:id' , function (req, res) {
//
//
//     console.log(req.query);
//
//     var obj = {
//         title: "SUPER NEWS",
//         id : 32,
//         parag : [
//           'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eos est exercitationem',
//           'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eos est exercitationem',
//           'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eos est exercitationem',
//
//         ]
//     };
//
//     res.render('news', {
//         newsId : req.params.id,
//         obj : obj
//
//     });
// });


// app.get('/' , function (req, res) {
//     res.send('This is home');
// });
//
// app.get('/news' , function (req, res) {
//     res.send('This is news');
// });
//
// app.get('/news/:id' , function (req, res) {
//     res.send('This is news is ' + req.params.id);
// });

app.listen(3001);
