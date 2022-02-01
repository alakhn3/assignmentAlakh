const auth = require('../services/auth');

exports.signOut = async (req, res) => {
  try{
    let signOut = await auth.sign_out({ ...req.params});
    responseData = {
      "success": true,
      "message": "User sign out successfully",
      "data": signOut
    }
    res.status(200).send(responseData);
  }catch (e) {
    responseData = {
      "success": false,
      "message": "User sign out Failed",
      "data": []
    }
    res.status(500).send(responseData);
  }    
}

exports.signIn = async (req, res) => {
  try{
    let signIn = await auth.sign_in({ ...req.body});
    responseData = {
      "success": true,
      "message": "User sign in successfully",
      "data": signIn
    }
    res.status(200).send(responseData);
  }catch (e) {
    responseData = {
      "success": false,
      "message": "User sign in Failed",
      "data": []
    }
    res.status(500).send(responseData);
  }
};
