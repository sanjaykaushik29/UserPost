const router = require('express').Router()
const user = require("../controllers/user.controller")

router.use("/sign_up", user.create)
router.use("/get_users", user.get_users)


module.exports = router