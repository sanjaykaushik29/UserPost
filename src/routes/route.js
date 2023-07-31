const router = require('express').Router()
const product = require("../controller/product.controller")
const seller = require("../controller/seller.controller")
const user = require("../controller/user.controller")
const verifyToken = require("../middleware/auth")

router.use("/uploadProduct", product.create)
router.use("/getProducts", product.get_products)
router.use("/getSellerProduct",product.getsellerProduct)
router.use("/getProductByCategory",product.getProductByCategory)
router.use("/getAllCategory",product.get_allCategory)
module.exports = router