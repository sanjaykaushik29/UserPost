
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
    type: DataTypes.STRING,
    allowNull: true,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  inStock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
});

Product.belongsTo(Seller); // This sets up the foreign key in the `Product` table
Seller.hasMany(Product);   // This sets up the association in the `Seller` model

module.exports = Product;