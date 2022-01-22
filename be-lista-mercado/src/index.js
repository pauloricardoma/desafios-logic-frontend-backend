require('dotenv').config();
const express = require('express');

const app = express();
const mongoose = require('mongoose');

const routes = require('./routes');

mongoose.connect(process.env.CONNECTIONSTRING);

app.use(express.json());
app.use(routes);

app.listen(3001, () => {
  console.log('🔥 Server started at http://localhost:3001');
});
