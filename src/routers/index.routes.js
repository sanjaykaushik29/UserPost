
const apiRouter = require('express').Router();

const router = require("./user.routers")
const productRoutes = require("./product.routes")

apiRouter.use('/user', router)
apiRouter.use('/product', productRoutes)

module.exports = apiRouter;


