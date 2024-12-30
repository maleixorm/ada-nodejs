const http = require('http');

const server = http.createServer((request, response) => {
    const { method, statusCode, url } = request;
    const sports = ['soccer', 'volley', 'basketball', 'tennis'];

    if (url === '/') {
        response.write(`<div><h1>Hello from Node!</h1><p>http virtual server</p></div>`);
        response.end();
    }

    if (url === '/api/sports') {
        response.write(JSON.stringify(sports));
        response.end();
    }
});

server.listen(5000, 'localhost', () => {
    console.log('Server running on address: http://localhost:5000');
});