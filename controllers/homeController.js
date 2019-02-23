const User=require('../models/user');
var homeController={
	index:function(req, res, next) {
		res.sendFile('index.html',{root:'views'});
	},

	about:function(req, res, next) {
		res.send('About');
	},

	register:function(req, res, next) {
		res.sendFile('register.html',{root:'views'});
	},

	store:function(req, res, next) {
		let user=new User(req.body)
		user.save((err,registerUser)=>{
			if (err) {
				res.send("Error");
			}
			res.send("Registration Complete");
		});
	}, 
	login:function(req,res){
		try{
			User.findOne(req.body,(err,user)=>{
				if(user){
					res.send("You are login as "+user.email);
				}
				else{
					res.send("Email or Password not match");
				}
			})
		}catch(e){
			res.send(e);
		}
	}

}

module.exports=homeController;