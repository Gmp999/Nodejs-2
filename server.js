const http = require('http');
const routes = require('./routes'); // Import your routes logic

const server = http.createServer(routes); // Delegate request handling

server.listen(8080);
console.log('Server running on port 8080');
