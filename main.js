// app.js
const express = require('express');
const bodyParser = require('body-parser');
const User = require('./src/models/user.model');
const router = require('./src/routers/user.routers')

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use("/api", router)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
