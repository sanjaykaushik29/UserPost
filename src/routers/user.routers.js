const router = require('express').Router()
const user = require("../controllers/user.controller")
const {verifyToken} = require("../../middleware/auth") 

/**
 * @swagger
 * /api/user/sign_up:
 *   post:
 *     summary: Create a users.
 *     description: list of examples from the server.
 *     responses:
 *       200:
 *         description: A list of users.
 */
router.post("/sign_up", user.create)
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
router.get("/get_users", user.get_users)
router.post("/login" ,user.login)


module.exports = router