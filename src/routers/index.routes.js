
const apiRouter = require('express').Router();

const router = require("./user.routers")
const productRoutes = require("./product.routes")


/**
 * @swagger
 * /api/user/get_users:
 *   get:
 *     summary: Get a list of users.
 *     description: Get a list of examples from the server.
 *     responses:
 *       200:
 *         description: A list of users.
 */
apiRouter.use('/user', router)
apiRouter.use('/product', productRoutes)

module.exports = apiRouter;