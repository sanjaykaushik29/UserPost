// app.js
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./src/routers/index.routes')
const port = process.env.Port || 3000
const app = express();
// const {initializeAdmin} = require("./middleware/admin")

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

app.use(bodyParser.json());
const cors = require('cors');


const options = {
  swaggerDefinition: {
    info: {
      title: 'Ecommerce',
      version: '1.0.0',
      description: 'This is Description of your API',
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ['./src/routers/*.js'],
};

const specs = swaggerJsDoc(options);


app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);
const startServer = async () =>{
  try{
    // await initializeAdmin()
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


module.exports = {
  specs,
  swaggerUi,
};
