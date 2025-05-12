//file system errors
const fs = require('fs');
fs.readFile('not-found.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err.message);
    return;
  }
  console.log(data);
});
//Manual errors
try {
  throw new Error("Something went wrong!");
} catch (error) {
  console.error("Caught error:", error.message);
}
//Routing errors
const http = require('http');
const server = http.createServer((req, res) => {
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
  if (req.url !== '/home' && req.url !== '/about') {
  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.end('<h1>Page Not Found</h1>');
}
  if (req.url === '/home') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Home page</h1>');
  }
});
server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});