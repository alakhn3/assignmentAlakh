const Product = require('../services/product');
const ProductDb = require("../models").product;
const ProductImage = require("../models").productimage;
var express = require("express");
var bodyParser = require("body-parser");
var multer = require('multer');
var app = express();

app.use(bodyParser.json());

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './assets/');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now()+".png");
  }
});

var upload = multer({ storage : storage }).array('image', 5);

exports.addProduct = async (req, res) => {
    let responseData = {}
    upload(req,res,function(err) {
      if(err) {
          return res.end("Error uploading file.");
      }else{
        let result = {};
        ProductDb.create({
          title: req.body.title ? req.body.title : null,
          description: req.body.description ? req.body.description : null,
          brand: req.body.brand ? req.body.brand : null,
          type: req.body.type ? req.body.type : null,
          price: req.body.price ? req.body.price : 0,
          discount: req.body.discount ? req.body.discount : 0,
          view: 0,
          active: 1,
        }).then( poductDetails =>{
          if(poductDetails){
            for( let i = 0 ; i < req.files.length; i++){
                ProductImage.create({
                  product_id	: poductDetails.id ? poductDetails.id : 0,
                  image : req.files[i].path ? req.files[i].path : null,
                });
              }
              responseData = {
                  "success": true,
                  "message": "Create product records Successfully",
                  "data": poductDetails
                }
                res.status(200).send(responseData);
          }else{
            responseData = {
              "success": false,
              "message": "Create product records Failed",
              "data": []
            }
            res.status(401).send(responseData);
          }
        }).catch(err=>{
          throw new Error("Failed to check user authorization !")
        })
      }
    });     
};

exports.productUpdate = async (req, res) => {
  let responseData = {}
  upload(req,res,function(err) {
    if(err) {
        return res.end("Error uploading file.");
    }else{
      if(!req.params.id){
        return res.end("Product Id not found !");
      }
      let result = {};
      updateproduct = ProductDb.update({
        title: req.body.title ? req.body.title : null,
        description: req.body.description ? req.body.description : null,
        brand: req.body.brand ? req.body.brand : null,
        type: req.body.type ? req.body.type : null,
        price: req.body.price ? req.body.price : 0,
        discount: req.body.discount ? req.body.discount : 0,
        view: 0,
        active: 1,
      },{ returning: true,  where:{ id : req.params.id}});
        
      let deleteAllProductImage = ProductImage.destroy({ where : { product_id: req.params.id}});
      for( let i = 0 ; i < req.files.length; i++){
          ProductImage.create({
            product_id	: req.params.id ? req.params.id : 0,
            image : req.files[i].path ? req.files[i].path : null,
          });
        }
       if(result){
            responseData = {
                "success": true,
                "message": "Update product records Successfully",
              }
              res.status(200).send(responseData);
        }else{
          responseData = {
            "success": false,
            "message": "Update product records Failed",
          }
          res.status(401).send(responseData);
        }
      
    }
  });     
};

exports.getAllProduct = async (req, res) => {
  try{
    let productList = await Product.get_product_list(req.query);
    responseData = {
      "success": true,
      "message": "Get products records successfully",
      "data": productList
    }
    res.status(200).send(responseData);
  }catch (e) {
    responseData = {
      "success": false,
      "message": "Get products records Failed",
      "data": []
    }
    res.status(500).send(responseData);
  }  
};

exports.getMostViewProduct = async (req, res) => {
  try{
    let productList = await Product.get_most_view_product(req.params);
    responseData = {
      "success": true,
      "message": "Get most view product records successfully !",
      "data": productList
    }
    res.status(200).send(responseData);
  }catch (e) {
    responseData = {
      "success": false,
      "message": "Get most view product records Failed !",
      "data": []
    }
    res.status(500).send(responseData);
  }  
};

exports.getViewProductById = async (req, res) => {
  try{
    let productList = await Product.get_product(req.params);
    responseData = {
      "success": true,
      "message": "Get product records successfully !",
      "data": productList
    }
    res.status(200).send(responseData);
  }catch (e) {
    responseData = {
      "success": false,
      "message": "Get product records Failed !",
      "data": []
    }
    res.status(500).send(responseData);
  }  
};
