// app.js
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./src/routers/user.routers')

const app = express();

app.use(bodyParser.json());

app.use("/api", router)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${process.env.Port}`);
});
