
const Product = require("../models/product.model")
const User = require("../models/user.model")
require("../models/assosiations")
exports.create = async (req, res) => {
    try {

        const { productName, description, category, price, inStock } = req.body
        const seller = await User.findOne({ where: { id: req.query.id } })
        if (seller.isVerified) {
            const payload = { productName, description, category, price, inStock, sellerId: seller.id }
            console.log(".....>",payload);
            data = await Product.create(payload)
            res.send({ "message": "Product save sucessfully", result: data })
        }
    } catch {
        res.send("You are not a verified seller")
    }
}

exports.getsellerProduct = async (req, res) => {

    try {
        const seller = await User.findOne({ where: { id: req.query.id } })
        const userWithPosts = await User.findByPk(seller.id, { include: Product });
        console.log(userWithPosts.Products);
        if (userWithPosts.Products.length != 0) {
            res.send({ msg: "Product Fetched fetched!!", data: userWithPosts.Products })
        } else {
            res.send("Dont have product")
        }
    } catch {
        res.send("not fetchjed")
    }
}



exports.get_products = async (req, res) => {
    try {
        const result = await Product.findAll()
        res.send({ msg: "Product Fetched fetched!!", count: result.length, result })
    } catch {
        res.send("not fetchjed")
    }
}

exports.getProductByCategory = async(req,res)=>{
    try {
        
        const category = await Product.findAll({where:{category:req.query.category }})
        res.send({ msg: "Product Fetched fetched!!", category})

    } catch (error) {
        res.send(error)
    }
}

exports.get_allCategory = async(req,res)=>{
    try {
        const modelAttributes = Product.getAttributes();
        const enumValues = modelAttributes.category.values;
        res.json(enumValues);
      } catch (error) {
        res.status(500).json({ message: 'Internal server error.' });
      }
}
