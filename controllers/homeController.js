var homeController={
	index:function(req, res, next) {
		res.send('hello');
	},

	about:function(req, res, next) {
		res.send('About');
	}
}

module.exports=homeController;