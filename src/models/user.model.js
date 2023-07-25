// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('./db.config');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

User.sequelize.sync();

module.exports = User;
