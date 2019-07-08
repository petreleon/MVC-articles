const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/testdb');
mongoose.set('debug', true);

const routes = require('./src/routes/main');
var app = express();

app.use(express.json());

app.use(routes);


app.listen(3001, () => {
  console.log('listening on port 3001');
});