// config/database.js
const { Sequelize } = require('sequelize');
const dotenv = require("dotenv")
dotenv.config()

// const sequelize = new Sequelize(
//   process.env.Database_Name,
//   process.env.UserName,
//   process.env.Password,
//   {
//     host: process.env.Host,
//     dialect: process.env.Database,
//     port:5432,
//     dialectOptions: {
//           ssl: {
//             require: true,
//             rejectUnauthorized: false  // Only needed for self-signed certificates
//           }
//         }
//   }
// );

const sequelize = new Sequelize('postgres://root:oihyXIsOtR8wQvl2qWrfXlv9HL9Ng1oz@dpg-cj9ilv63ttrc73ct99r0-a.oregon-postgres.render.com/ecommerce_s5xi',{
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false  // Only needed for self-signed certificates
      }
    }})

sequelize
  .authenticate()
  .then(function (err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

module.exports = sequelize;
