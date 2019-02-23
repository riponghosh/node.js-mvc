var mongoose = require('mongoose');
const db="mongodb://127.0.0.1:27017/mvc";
mongoose.connect(db, { useNewUrlParser: true },err=>{
	if (err) {
		console.log("Error! "+err);
	}
	else{
		console.log("Connected to mongodb");
	}
})
module.exports=db;