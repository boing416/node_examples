var express = require('express');
var router = express.Router();

router.get('/' , function (req, res) {


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

    res.render('news/index', {
        newsId : req.params.id,
        obj : obj

    });
});



module.exports = router;