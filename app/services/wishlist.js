const Wishlist = require("../models").wishlist;
const Product = require("../models").product;
const User = require("../models").user;

exports.get_most_wish_list_product = async (req, res) => {
	return  await Wishlist.findOne({
		attributes: ['product_id', [sequelize.fn('count', sequelize.col('product_id')), 'num']],
		include : [{ model : Product }],
		group: ["product_id"]
	})
};

exports.get_user_wishlist_product = async (params, res) => {
	if (!params.id) {
		throw new Error("User id is required !");
	}
	let response = [];  
	let produtDetails = [];
	let userDetails = {};
	let result  = await Wishlist.findAll({ where: { user_id: params.id } });
	if (result.length <= 0) {
		throw new Error("Wishlist not exist !");
	}else{
		for(let i = 0; i < result.length; i++){
			produtDetails[i] = await Product.findOne({ where : { id : result[i].product_id }});
			response.push({ id: result[i].id, user_id : result[i].user_id, product_id :result[i].product_id, 
				 title : produtDetails[i].title, price : produtDetails[i].price, discount : produtDetails[i].discount
			})
		}
		userDetails = await User.findOne({ where : { id : result[0].user_id }});
		response.push({ userDetails : userDetails })
	}	
	return response;
};

exports.create_wish_list = async (params) => {
	let result  = [];
	let response = {};
	result  = await Wishlist.findAll({ where: { user_id: params.user_id, product_id : params.product_id } });
	if (result.length <= 0) {
		throw new Error("Wishlist not exist !");
	}else{
		response = await Wishlist.create({
			user_id: params.user_id ? params.user_id : null,
			product_id: params.product_id ? params.product_id : null,
		});
	}
	return response;
};

exports.delete_wishlist = async (params) => {
	if (!params.id) {
		throw new Error("Wishlist id is required !");
	}
	let wishlistdata = {}
	wishlistdata = await Wishlist.findOne({ where: { id: params.id } })
	if (!wishlistdata) {
		throw new Error("Wishlist records not exit for this id !");
	}
	return await Wishlist.destroy({ where : { id: params.id } });	
};