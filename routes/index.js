var express = require('express');
var router = express.Router();
var homeController=require('../controllers/homeController');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
});

router.get('/about',homeController.about);

module.exports = router;
