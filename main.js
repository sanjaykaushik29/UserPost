// app.js
const express = require('express');
const bodyParser = require('body-parser');


const app = express();


const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

app.use(bodyParser.json());
const cors = require('cors');
const dotenv = require("dotenv")
dotenv.config()

const router = require('./src/routers/index.routes')

const port = process.env.Port
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



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
app.use(cors({
  origin: "*"
}))
app.get("/", (req, res) => {
  res.send('running ok');
})
app.use("/api", router)

require("./middleware/admin")

module.exports = {
  specs,
  swaggerUi,
};
