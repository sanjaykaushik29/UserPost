
const User = require("../models/user.model")
const Product = require("../models/products")

exports.createProducts = async (req, res) => {
    try {
      const user = await User.findOne({where:{id:req.query.id}})

    await Product.create({ name: 'Product 1', price: 10, userId: user.id });
    await Product.create({ name: 'Product 2', price: 20, userId: user.id });
  
      res.send({msg:'Products created successfully.'});
    } catch (error) {
      console.error('Error creating products:', error);
    }
  };

