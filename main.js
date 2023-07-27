// app.js
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./src/routers/user.routers')
const port = process.env.Port
const app = express();
const {initializeAdmin} = require("./middleware/admin")
app.use(bodyParser.json());
// const { createProducts } = require('./src/controllers/product.controller');


const startServer = async () =>{
  try{
    await initializeAdmin()
    // await createProducts()
    app.use("/api", router)
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
    
  }
  catch(error){
    console.error('Error starting the server:', error);
  }
}

startServer();