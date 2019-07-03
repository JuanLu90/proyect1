var createError = require('http-errors');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
// const mysql = require('mysql');
// const myConnection = require('express-myconnection');
const indexRouter = require('./routes/index');
var apiRouter = require('./routes/apiRoute');
const playerRouter = require('./routes/player');
const teamRouter = require('./routes/team');
var cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload')


const app = express();

// view engine setup
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(fileUpload())
app.use(morgan('dev'));
// app.use(myConnection(mysql, {
//     host: 'localhost',
//     user: 'root',
//     password: '1234',
//     port: 3306,
//     database: 'manasport'
// }, 'single'));

app.use('/', indexRouter);
app.use('/api', apiRouter);
// app.use('/player', playerRouter);
app.use('/team', teamRouter);

app.post('/upload',(req,res) => {
  let imagen = req.files.file
  console.log(req.files.file)
  imagen.mv(`public/images/images-bbdd/${imagen.name}`,err => {
     res.redirect('/'); 
  });
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
