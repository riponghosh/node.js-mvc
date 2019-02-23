var path = require('path');
module.exports = function (app,express){
	app.use('/css',express.static(path.join(__dirname, '../public/stylesheets')));
	app.use('/views', express.static(path.join(__dirname, '../views')));//you can access views folder file as localhost:3000/views/login.html
}