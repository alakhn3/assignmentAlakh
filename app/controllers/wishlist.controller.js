const wishlist = require('../services/wishlist');

exports.getUserWishListProduct = async (req, res) => {
  try{
    let wishList = await wishlist.get_user_wishlist_product({ ...req.params});
    responseData = {
      "success": true,
      "message": "Get user wishlist records successfully !",
      "data": wishList
    }
    res.status(200).send(responseData);
  }catch (e) {
    responseData = {
      "success": false,
      "message": "Get users wishlist records Failed !",
      "data": []
    }
    res.status(500).send(responseData);
  }  
};

exports.getMostWishListProduct = async (req, res) => {
  try{
    let wishlistData = await wishlist.get_most_wish_list_product();
    responseData = {
      "success": true,
      "message": "Get wishlist records successfully !",
      "data": wishlistData
    }
    res.status(200).send(responseData);
  }catch (e) {
    responseData = {
      "success": false,
      "message": "Get wishlist records Failed !",
      "data": []
    }
    res.status(500).send(responseData);
  }
};

exports.addWishList = async (req, res) => {
  try{
    let responseData = {}
    let dataWishList = await wishlist.create_wish_list({...req.body});
    responseData = {
      "success": true,
      "message": "Create wishlist records Successfully !",
      "data": dataWishList
    }
    res.status(200).send(responseData);
  }catch (e) {   
    responseData = {
      "success": false,
      "message": "Create wishlist records Failed !",
      "data": []
    }
    res.status(401).send(responseData); 
  }
};

exports.deleteWishList = async (req, res) =>{
  try{
    let responseData = {}
    let dataWishListDelete = await wishlist.delete_wishlist({ ...req.body });
    responseData = {
      "success": true,
      "message": "Delete wishlist record successfully !",
      "data": dataWishListDelete
    }
    res.status(200).send(responseData);
  }catch (e) {  
    responseData = {
      "success": false,
      "message": "Delete wishlist record Failed !",
      "data": []
    }
    res.status(401).send(responseData);
  }  
};