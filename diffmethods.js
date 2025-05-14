const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false})); // Parse URL-encoded data in object format it returns 

app.use('/add-prod', (req, res, next) => {
    console.log('In the /add-prod middleware!');
    res.send(`
        <form action="/product" method="POST">
            <input type="text" name="title">
            <button type="submit">Add Product</button>
        </form>
    `);
    // No need to call next() after sending response
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
    // Only send ONE response, so we remove redirect
});

app.use('/', (req, res, next) => {
    console.log('In the fallback middleware!');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
});
