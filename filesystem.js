const fs = require('fs');

// Asynchronous file read
fs.readFile('node1.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('Data from first.txt:', data);
});

// Asynchronous file write
fs.writeFile('node.txt', 'Hi how are you', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log("File written successfully");
});

// Asynchronous file append
fs.appendFile('node.txt', ' Hello World', (err) => {
    if (err) {
        console.error('Error appending file:', err);
        return;
    }
    console.log("File appended successfully");
});

console.log("This is a test.");
