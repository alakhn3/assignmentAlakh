const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const User = require("../models").user;

isAuthAdmin = async(req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      message: "No token provided !"
    });
  }
  jwt.verify(token, config.secret, async(err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized !"
      });
    }
    await User.findOne({ where: { id: decoded.id } }).then(userDetails =>{
      if(userDetails.role != "admin"){
        return res.status(401).send({
          message: "Unauthorized to perform any functionality !"
        });
      }else{
        next()
      }
    }).catch(err=>{
      throw new Error("Failed to check user authorization !")
    })
  
  })
}

isAuthUser = async(req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      message: "No token provided !"
    });
  }
  jwt.verify(token, config.secret, async(err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized !"
      });
    }
    await User.findOne({ where: { id: decoded.id } }).then(userDetails =>{
      if(userDetails.role != "user"){
        return res.status(401).send({
          message: "Unauthorized to perform any functionality !"
        });
      }else{
        next()
      }
    }).catch(err=>{
      throw new Error("Failed to check user authorization !")
    })
  
  })
}

const authToken = {
  isAuthAdmin : isAuthAdmin,
  isAuthUser : isAuthUser
};

module.exports = authToken;
