const User = require("../models/user.model")

exports.create = async (req, res) =>{
    try{

        const {userName , email, password, token, roll} = req.body
            // Validate user input
        if (!(userName && email)) {
            res.status(400).send("All input is required");
            }
        const oldUser = await User.findOne({where: { 
            email: req.body.email
        }});        
        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
          }
        const payload = {userName , email, password, token, roll}
        console.log(payload);
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