const router = require('express').Router()
const user = require("../controllers/user.controller")
const {verifyToken} = require("../../middleware/auth") 

router.post("/sign_up", user.create)
router.get("/get_users",verifyToken, user.get_users)
router.post("/login" ,user.login)


module.exports = router