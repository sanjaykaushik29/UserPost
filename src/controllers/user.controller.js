const User = require("../models/user.model")

exports.create = async (req, res) =>{
    try{

        const {name , email } = req.body
        const payload = { name, email}
        data = await User.create(payload)
        res.send({"message" : "data save sucessfully", result : data})

    }catch {
        res.status()
    }
}

exports.get_users = async (req, res) =>{
    try{
        const result = await User.findAll()
        res.send({msg : "data fetched!!", count : result.length, result })
    }catch {
        res.send("not fetchjed")
    }
}