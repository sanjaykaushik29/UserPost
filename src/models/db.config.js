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
    port: process.env.Port
  }
);


sequelize
  .authenticate()
  .then(function (err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

module.exports = sequelize;
