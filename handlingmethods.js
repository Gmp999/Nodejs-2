const http = require('http');
const port = 3000
const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>About page</h1>');
        return;
    }
    if (req.method === 'POST') {
        res.writeHead(201, { 'Content-Type': 'text/html' });
        res.end('<h1>Contact page</h1>');
        return;
    }
    console.log(req.url);  
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello World</h1>');
})
server.listen(3000, () => {
    console.log(`Server running on http://localhost:${port}`);
})