const router = require('express').Router()
const user = require("../controller/product.controller")
const seller = require("../controller/seller.controller")

router.use("/uploadProduct", user.create)
router.use("/getProducts", user.get_users)
router.use("/seller_signUp", seller.create)
router.use("/getSellers", seller.get_users)
module.exports = router