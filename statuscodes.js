const { stat } = require("fs");
const status = require('http');
const server = status.createServer((req, res) => {
    if (req.url === '/about') {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('<h1>Internal server error</h1>');
        return;
    }
    if (req.url === '/contact') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Page not found</h1>');
        return;
    }
    console.log(req.url);  
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello world</h1>');
})
server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});