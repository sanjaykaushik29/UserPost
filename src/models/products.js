// product.js
const { DataTypes } = require('sequelize');
const sequelize = require("./db.config") // Your Sequelize instance
const User = require('./user.model'); // Import the User model

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  }
});

// Define the association between User and Product
User.hasMany(Product);
Product.belongsTo(User);

module.exports = Product;