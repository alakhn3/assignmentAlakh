const User = require("../models").user;
var bcrypt = require("bcryptjs");

exports.get_user_list = async (req, res) => {
	return await User.findAll({ where: { role: "user" } });
};

exports.get_user = async (params, res) => {
	if (!params.id) {
		throw new Error("User id is required !");
	}
	return await User.findOne({ where: { id: params.id , role : "user"} })
};

exports.register = async (params) => {
	return await User.create({
		role: params.role ? params.role : "user",
		name: params.name ? params.name : null,
		email: params.email ? params.email : null,
		password: params.password ? bcrypt.hashSync(params.password, 8) : null,
	});	
};