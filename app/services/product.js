const Product = require("../models").product;
const ProductImage = require("../models").productimage;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.get_product_list = async (params) => {
	console.log("params",params)
	let result = [];
	let count = {}
	let limit = params.limit ? parseInt(params.limit) : 5;
	let page = parseInt(params.page) - 1 
  	let offset = page ? page*limit : 0;
	count = await Product.count({ where: { active : 1 }});
	result = await Product.findAll({ 
		where: { 
			active : 1,
			title: { [Op.like]: `%${params.title ? params.title:'%'}%` },  
			// brand: { [Op.like]: `%${params.brand ? params.brand:'%'}%` },  
			// type: { [Op.like]: `%${params.type ? params.type:'%'}%` },  
			//price: { [Op.like]: `%${params.price ? parseInt(params.price):'%'}%` },  
			// discount: { [Op.like]: `%${params.discount ? params.discount:'%'}%` },  
		},
		offset: offset, 
		limit: limit
	});
	result.push({ totalData : count})
	return result ;
};

exports.get_product = async (params) => {
	if (!params.id) {
		throw new Error("Product id is required !");
	}
	let response = {};
	let count = {};
	response =  await Product.findOne({ where: { id: params.id , active : 1} })
	if(response){
		let num = parseInt(response.view) + 1;
		count = await Product.update(
			{ view : num },
			{ where: { id : params.id } }
		  );
	}
	return response ;
};

exports.get_most_view_product = async (params) =>{
	return await Product.findAll({ 
		order: [
            ['view', 'DESC'],
        ],
        attributes: ['id', 'title', 'description', 'price', 'discount', 'view'],
		limit: 1 
    })
}

exports.create_product = async (params) => {
	console.log("params",params)
	return await Product.create({
		title: params.title ? params.title : null,
		description: params.description ? params.description : null,
		brand: params.brand ? params.brand : null,
		type: params.type ? params.type : null,
		price: params.email ? params.price : null,
		discount: params.password ? params.discount : null,
		view: 0,
		active: 1,
	});	
};

// exports.product_update = async(val, params) => {
// 	var updateproduct ={}
// 	if(!val.id){
// 		throw new Error("User id is required !")
// 	}		
// 	updateproduct = await Product.update({
// 		title: params.title ? params.title : "user",
// 		description: params.description ? params.description : null,
// 		brand: params.brand ? params.brand : null,
// 		type: params.type ? params.type : null,
// 		price: params.email ? params.price : null,
// 		discount: params.password ? params.discount : null,
// 		active: params.active ? params.active : null,
// 		},{ returning: true,  where:{ id : val.id}});
// 	return updateproduct;
// }