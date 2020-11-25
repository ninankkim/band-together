const http = require('http');
const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const hostname = '127.0.0.1';
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const port = 3000;

var models = require('./models');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var donationRouter = require('./routes/donationcenter');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/donation_center', donationRouter);

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(
    `Band Together is currently running at http://${hostname}:${port}/`
  );
});

module.exports = app;
