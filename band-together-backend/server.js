const http = require('http')
const express = require('express')
const es6Renderer = require('express-es6-template-engine');
const hostname = '127.0.0.1'
const port = 3000;


const app = express();

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Band Together is currently running at http://${hostname}:${port}/`);
})



