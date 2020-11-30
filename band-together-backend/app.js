const http = require('http');
const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const hostname = '127.0.0.1';
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const port = 3000;

var models = require('./models');


const donationRouter = require('./routes/api-donationcenter');
const foodpantryRouter = require('./routes/api-foodpantry');
const shelterRouter = require('./routes/api-shelter');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/donationcenter', donationRouter);
app.use('/api/v1/foodpantry', foodpantryRouter);
app.use('/api/v1/shelter', shelterRouter);

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
