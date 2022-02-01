const controller = require("../controllers/product.controller");
const router = require("express").Router()
const { authToken } = require("../middleware");

router.get("/product/", [ authToken.isAuthUser ], controller.getAllProduct );
router.get("/view-product/:id", [ authToken.isAuthUser ], controller.getViewProductById );
router.get("/most-view-product/", controller.getMostViewProduct );
router.post("/product/", [ authToken.isAuthAdmin ], controller.addProduct );
router.put("/product/:id", [ authToken.isAuthAdmin ], controller.productUpdate );

module.exports = router