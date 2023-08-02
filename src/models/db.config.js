// config/database.js
const { Sequelize } = require('sequelize');
const dotenv = require("dotenv")
dotenv.config()

const sequelize = new Sequelize(
    process.env.Database_Name,
    process.env.UserName,
    process.env.Password,
    {
      host: process.env.Host,
      dialect: process.env.Database,
    }
  );
  

module.exports = sequelize;
