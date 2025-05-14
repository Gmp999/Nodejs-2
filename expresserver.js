// This is a simple Express server that demonstrates middleware usage.

const express = require('express');

const app = express();

app.use('/',(req, res, next) => {
    console.log('This always runs!')
    next(); // Call the next middleware in the stack (top to bottom)
});

app.use('/add-prod',(req, res, next) => {
    console.log('In the middleware!');
    res.send('<h1>Yo this is Gmp!</h1>'); // Send a response to the client
    // next(); // Call the next middleware in the stack (top to bottom)
});
app.use('/',(req, res, next) => {
    console.log('In the another middleware!');
    res.send('<h1>Hello from Express!</h1>'); // Send a response to the client
});
app.listen(8080);
