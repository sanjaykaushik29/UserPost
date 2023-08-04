// app.js
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./src/routers/index.routes')
const port = process.env.Port
const app = express();
const {initializeAdmin} = require("./middleware/admin")
app.use(bodyParser.json());
const cors = require('cors');


const startServer = async () =>{
  try{
    await initializeAdmin()
    app.use(cors())
    app.get("/", (req,res)=>{
      res.send( 'running ok' );
  })
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