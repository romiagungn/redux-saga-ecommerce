var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
const fileUpload = require("express-fileupload");

var indexRouter = require('./routes/index');
var barangRouter = require('./routes/barang');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(fileUpload({ limits: { fileSize: 3 * 1024 * 1024 } }));

app.use('/', indexRouter);
app.use('/barang', barangRouter);

module.exports = app;
