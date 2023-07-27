
const Seller = require("../models/seller.model")

exports.create = async (req, res) =>{
    try{
        const {sellerName , emailId,isVerified} = req.body
        const payload = {sellerName , emailId,isVerified}
        console.log(payload);
        data = await Seller.create(payload)
        res.send({"message" : "SellerDetails save sucessfully", result : data})
    }catch {
        res.send("ok")
    }
}
exports.get_users = async (req, res) =>{
    try{
        const result = await Seller.findAll()
        res.send({msg : "data fetched!!", count : result.length, result })
    }catch {
        res.send("not fetchjed")
    }
}


  