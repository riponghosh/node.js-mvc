var homeController={
	index:function(req, res, next) {
		res.sendFile('index.html',{root:'views'});
	},

	about:function(req, res, next) {
		res.send('About');
	}
}

module.exports=homeController;