
const { DataTypes } = require('sequelize');
const sequelize = require('./db.config');
const Seller = require("../models/seller.model")
const Product = sequelize.define('productDetails', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },  
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category:{
    type: DataTypes.ENUM("Mobile","Headphone","Car","Bike"),
    defaultValue:"Headphone",
    allowNull:false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  inStock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  sellerId:{
    type: DataTypes.STRING,
    allowNull:false
  }
});


module.exports = Product;