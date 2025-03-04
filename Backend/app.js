var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// var studentRouter = require('./routes/students');
// var expenseRouter = require('./routes/expenses');
// var savingsRouter = require('./routes/savings');
// var recurringRouter = require('./routes/recurring');
// const reportsRouter = require('./routes/reports'); 
var cors = require('cors');
require('dotenv').config();
var app = express();
mongoose.connect('mongodb://localhost:27017/students')
  .then(() => console.log("Database Connected Successfully"))
  .catch(err => console.log(err));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
//app.use('/students', studentRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.use('/expenses', expenseRouter);
// app.use('/savings', savingsRouter);
// app.use('/recurring', recurringRouter);
// app.use('/reports', reportsRouter);
app.use(function(req, res, next) {
  next(createError(404));
});
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});
app.listen(5000, () => {
  console.log(`Server running on http://localhost:5001`);
});
module.exports = app;
