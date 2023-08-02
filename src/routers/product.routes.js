const router = require('express').Router()
const product = require("../controllers/product.controller")

router.use("/createProduct", product.create)
router.use("/getProducts", product.get_products)
router.use("/getSellerProduct",product.getsellerProduct)
router.use("/getProductByCategory",product.getProductByCategory)
router.use("/getAllCategory",product.get_allCategory)
module.exports = router