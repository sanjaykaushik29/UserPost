const router = require('express').Router()
const product = require("../controllers/product.controller")

router.post("/createProduct", product.create)
router.get("/getProducts", product.get_products)
router.get("/getSellerProduct",product.getsellerProduct)
router.get("/getProductByCategory",product.getProductByCategory)
/**
 * @swagger
 * /api/user/sign_up:
 *   get:
 *     summary: Create a users.
 *     description: list of examples from the server.
 *     responses:
 *       200:
 *         description: A list of users.
 */
router.get("/getAllCategory",product.get_allCategory)
module.exports = router