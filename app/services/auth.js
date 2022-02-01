const User = require("../models").user;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const config = require("../config/auth.config");

exports.get_user_list = async (req, res) => {
	return await User.findAll({ where: { role: "user" } });
};

exports.sign_out = async (params, res) => {
	var token = await jwt.sign({ id: user.id }, config.secret, {
		expiresIn: 0 
	  });
  
	  if (!token) {
		return res.status(200).send({
		  accessToken: null,
		  message: "Sign out successfully!"
		});
	  }
};

exports.sign_in = async (params, res) => {
	let userDetails = {};
	let result = {};
	userDetails = await User.findOne({ where: { email: params.email } })
	if(userDetails){
		var passwordIsValid = bcrypt.compareSync(
				params.password,
				userDetails.password
			);
		if (!passwordIsValid) {
			throw new Error("Invalid Password !");
		}
		var token = jwt.sign({ id: userDetails.id }, config.secret, {
			expiresIn: 86400
			});				
		result = {
				id: userDetails.id,
				name: userDetails.name,
				email: userDetails.email,
				accessToken: token
			}
			console.log('result:',result);	
		return result;
	}else{
		throw new Error("User not exist !");
	}	
};