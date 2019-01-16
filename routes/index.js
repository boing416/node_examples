var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', authenticationMiddleware(),  function(req, res, next) {

  console.log(req.user);
  console.log(req.isAuthenticated());

    // if(req.isAuthenticated()) (
        res.render('app/index', { title: 'Express' })
    // );

    // res.redirect('login');


});


function authenticationMiddleware() {

    return (req,res,next) => {
        console.log(`req.session.passport.user: req.session.passport.array()`);

        if(req.isAuthenticated()) return next(

        );

        res.redirect('login');
    }

}

module.exports = router;


