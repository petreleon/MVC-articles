const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')

mongoose.connect('mongodb://localhost:27017/Media');
mongoose.set('debug', true);
mongoose.set('useFindAndModify', false);

const routes = require('./src/routes/main');
var app = express();
app.use(cors())
app.use(express.json());

app.use('/api', routes);

app.use(express.static('public'));


app.listen(3001, () => {
  console.log('listening on port 3001');
});