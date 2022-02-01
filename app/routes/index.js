const user_route = require("./user.routes");
const product_route = require("./product.routes");
const wishlist_route = require("./wishlist.routes");
const auth_route = require("./auth.routes");
const router = require("express").Router()
   
router.use("/api/",user_route);
router.use("/api/",product_route);
router.use("/api/",wishlist_route);
router.use("/api/auth",auth_route);

module.exports = {
    router : router
}