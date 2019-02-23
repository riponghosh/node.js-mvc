var express = require('express');
var router = express.Router();
var homeController=require('../controllers/homeController');

/* GET home page. */
router.get('/', homeController.index);

router.get('/about',homeController.about);
router.get('/register',homeController.register);
router.post('/register',homeController.store);
router.post('/login',homeController.login);

module.exports = router;
