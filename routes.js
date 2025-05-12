const hello = require('http');
hello.createServer((req, res) => {
  if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>About page</h1>');
    return;
  }
  if (req.url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Contact page</h1>');
    return;
  }
console.log(req.url);  
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello World</h1>');
}).listen(3000);