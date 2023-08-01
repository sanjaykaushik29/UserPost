const router = require('express').Router()
const user = require("../controllers/user.controller")
const {verifyToken} = require("../../middleware/auth") 

router.use("/sign_up", user.create)
router.use("/get_users",verifyToken, user.get_users)
router.use("/login" ,user.login)


module.exports = router