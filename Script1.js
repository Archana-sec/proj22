// JavaScript source code
// var msg = 'Hello World.';
// console.log(msg);

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World! This is Archana. Varsion 1');
}).listen(8080);