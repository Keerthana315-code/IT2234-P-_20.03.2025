const http = require('http'); // Correctly require the HTTP module

const localhost = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello Node JS");
});

server.listen(port, localhost, () => {
    console.log(`Server running at http://${localhost}:${port}/`);
});
