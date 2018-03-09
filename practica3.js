// JavaScript source code
var express = require('express');
var app = express();
var rutas = require('./routes/rutas');

app.set('view engine', 'pug');

app.use(express.static('public'));

app.use('/', rutas);

app.listen(8080);