var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.a = 123;
  res.username = 'Murat';
  res.product = {
      id : '123123',
      name : 'name1',
      price : 123,
      photo : '1.png'
  };

  res.products = [
      { id : '123123', name : 'name1', price : 123, photo : '1.png' },
      { id : '123123', name : 'name1', price : 123, photo : '1.png' },
      { id : '123123', name : 'name1', price : 123, photo : '1.png' },
      { id : '123123', name : 'name1', price : 123, photo : '1.png' },
  ];
  res.render('demo/index', res);
});

module.exports = router;
