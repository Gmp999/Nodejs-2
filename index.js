const hello = require('http');
hello.createServer((req, res) => {
  console.log(req.url);  
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello World</h1>');
}).listen(8080);