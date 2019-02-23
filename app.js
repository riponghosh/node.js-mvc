var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var path = require('path');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', indexRouter);
app.use('/users', usersRouter);

require('./config/static-files')(app,express);
require('./config/database');

module.exports = app;
