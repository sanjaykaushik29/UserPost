const express = require('express');
const bodyParser = require('body-parser');
const Product = require('./src/models/product.model');
const router = require('./src/routes/route')
require('dotenv').config();

const app = express();
const port = process.env.PORT;
app.use(bodyParser.json());
app.use("/api", router)
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});