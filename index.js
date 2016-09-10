"use strict";

var express = require('express');
var bodyParser = require('body-parser');
var authorRoutes = require('./app/routers/author');
var referenceRoutes = require('./app/routers/reference');
var workRoutes = require('./app/routers/work');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));

app.use(bodyParser.json());

app.use('/author', authorRoutes);
app.use('/reference', referenceRoutes);
app.use('/work', workRoutes);

app.listen(3000, function(){
  console.log('Listening on 3000');
});
