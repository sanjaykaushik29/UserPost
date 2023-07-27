
const Product = require("../models/product.model")
const Seller = require("../models/seller.model")
exports.create = async (req, res) =>{
    try{
        // const {emailId} = req.params
        const seller =  await Seller.findOne({where:{emailId:req.query.emailId}})
     
        if(seller.isVerified){

            const {productName , description ,category,price,inStock} = req.body
            const payload = { productName, description,category,price,inStock}
            console.log(payload);
            data = await Product.create(payload)
            res.send({"message" : "Product save sucessfully", result : data})
        }else{

            res.send("You are not a verified seller")
        }

    }catch {
        res.send("You are not a verified seller")
    }
}
exports.get_users = async (req, res) =>{
    try{
        const result = await Product.findAll()
        res.send({msg : "data fetched!!", count : result.length, result })
    }catch {
        res.send("not fetchjed")
    }
}


  