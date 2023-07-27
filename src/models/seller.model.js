
const { DataTypes } = require('sequelize');
const sequelize = require('./db.config');
const Seller = sequelize.define('sellerDetails', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },  
  sellerName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  emailId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:true,
  
  },
  isVerified: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
});
module.exports = Seller;