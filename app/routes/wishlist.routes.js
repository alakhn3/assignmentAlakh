const controller = require("../controllers/wishlist.controller");
const router = require("express").Router()
const { authToken } = require("../middleware");

router.get("/user-wishlist-product/:id", [authToken.isAuthUser], controller.getUserWishListProduct );
router.get("/most-wishlist-product", [authToken.isAuthAdmin], controller.getMostWishListProduct );
router.post("/wishlist/", [authToken.isAuthUser], controller.addWishList );
router.delete("/wishlist/", [authToken.isAuthUser], controller.deleteWishList );

module.exports = router