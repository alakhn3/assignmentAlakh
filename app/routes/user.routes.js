const controller = require("../controllers/user.controller");
const router = require("express").Router()
const { verifySignUp } = require("../middleware");

router.get("/user/", controller.getAllUser );
router.get("/user/:id", controller.getUserById );
router.post("/register", [verifySignUp.checkDuplicateEmail ], controller.register );

module.exports = router