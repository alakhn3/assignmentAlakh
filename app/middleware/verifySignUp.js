const User = require("../models").user;

checkDuplicateEmail = (req, res, next) => {
	try{		
		if (req.body.email) {
		User.findOne({
			where: {
				email: req.body.email
			}
		}).then(user => {
			if (user) {
				res.status(400).send({
					status:400,
					message: "Failed! Email is already in use !"
				});
				return;
			}
			next();
		});
		}else{
			throw new Error("Email required !")
		}
	}catch(err){
		throw new Error("Email authentication failed, Error: ", err)
	};
};


const verifySignUp = {
	checkDuplicateEmail: checkDuplicateEmail
};

module.exports = verifySignUp;
