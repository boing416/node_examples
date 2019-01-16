var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db_connect');

const request = require('request');

var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine' , 'ejs');

app.use('/public', express.static('public'));

app.get('/' , function (req, res) {
    // res.sendFile(__dirname + "/index.html");
    res.render('index');
});

app.get('/about' , function (req, res) {
    // res.sendFile(__dirname + "/about.html");
    res.render('about');
});

app.get('/login' , function (req, res) {
    // res.sendFile(__dirname + "/about.html");
    res.render('login');
});

app.post('/about', urlencodedParser  , function (req, res) {
    if (!req.body) return res.sendStatus(400);
    console.log(req.body);
    res.render('about-success', {data: req.body});
});

app.post('/login', urlencodedParser  , function (req, res) { 
    if (!req.body) return res.sendStatus(400);
    console.log(req.body.login);
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

app.get('/news/:id' , function (req, res) {


    console.log(req.query); 

    var obj = {
        title: "SUPER NEWS",
        id : 32,
        parag : [
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eos est exercitationem',
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eos est exercitationem',
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eos est exercitationem',

        ]
    };

    res.render('news', {
        newsId : req.params.id,
        obj : obj

    });
});


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
