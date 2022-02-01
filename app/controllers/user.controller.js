const user = require('../services/user');

exports.getAllUser = async (req, res) => {
  try{
    let userList = await user.get_user_list(req.query);
    responseData = {
      "success": true,
      "message": "Get users records successfully",
      "data": userList
    }
    res.status(200).send(responseData);
  }catch (e) {
    responseData = {
      "success": false,
      "message": "Get users records Failed",
      "data": []
    }
    res.status(500).send(responseData);
  }  
};

exports.getUserById = async (req, res) => {
  try{
    let userData = await user.get_user({ ...req.params});
    responseData = {
      "success": true,
      "message": "Get user records successfully",
      "data": userData
    }
    res.status(200).send(responseData);
  }catch (e) {
    responseData = {
      "success": false,
      "message": "Get user records Failed",
      "data": []
    }
    res.status(500).send(responseData);
  }
};

exports.register = async (req, res) => {
  try{
    let responseData = {}
    let dataUserCreate = await user.register({...req.body});
    responseData = {
      "success": true,
      "message": "User register Successfully",
      "data": dataUserCreate
    }
    res.status(200).send(responseData);
  }catch (e) {   
    responseData = {
      "success": false,
      "message": "User registeration Failed",
      "data": []
    }
    res.status(401).send(responseData); 
  }
};