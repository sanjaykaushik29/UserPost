
const {Sequelize} = require("sequelize");
require('dotenv').config();
const sequelize = new Sequelize(
 process.env.Database_Name,
 process.env.UserName,
 process.env.Password,
  {
    host:  process.env.Host,
    dialect: 'mysql'
  }
);
    module.exports =sequelize;