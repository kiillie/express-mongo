var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var http = require('http');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var routes = require('./routes/index');
var users = require('./routes/users');
var insert = require('./routes/insert');
var twitter = require('./routes/twitter');
var display = require('./routes/display');
var instagram = require('./routes/insta-search');
var facebook = require('./routes/facebook');
var imported = require('./routes/imported');
var login = require('./routes/login');
var influencers = require('./routes/influencers');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json({limit: '5000mb'}));
app.use(bodyParser.urlencoded({limit: '5000mb', extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: "ifu438ujfsoifj30cmsdijfi4", resave: true, saveUninitialized: true, cookie : {maxAge: 60000}}));
app.use('/', routes);
app.use('/display', display);
app.use('/users', users);
app.use('/insert', insert);
app.use('/twitter/', twitter);
app.use('/instagram', instagram);
app.use('/facebook', facebook);
app.use('/imported', imported);
app.use('/login', login);
app.use('/influencers', influencers);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
  mongoose.connect('mongodb://localhost:27017/express-db', function(err, db){
    console.log("Database Connected");
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

http.createServer(app).listen(8081, function(err){
  console.log("Connected to port 8081");
});
module.exports = app;
