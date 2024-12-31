const http = require('http');
const sports = ['soccer', 'volley', 'basketball', 'tennis'];

const server = http.createServer(async (request, response) => {
    const { method, statusCode, url } = request;

    const bodyPromise = new Promise((resolve, reject) => {
        let body;
        
        request.on('data', data => {
            body = JSON.parse(data);
        });

        request.on('end', data => {
            resolve(body);
        });
    });

    if (url === '/') {
        response.write(`<div><h1>Hello from Node!</h1><p>http virtual server</p></div>`);
        response.end();
        return;
    }

    if (url === '/api/sports') {
        if (method === 'GET') {
            response.write(JSON.stringify(sports));
            response.end();
            return;
        }

        if (method === 'POST') {
            const body = await bodyPromise;
            const { name } = body;
            if (!sports.map(sport => sport.toLowerCase).includes(name.toLowerCase())) {
                sports.push(name);  
            }
            response.write(name.toLowerCase());
            response.end();
            return;
        }
    }
    
    response.statusCode = 404;
    response.write(`<h1>Página não encontrada!</h1>`);
    response.end();
});

server.listen(5000, 'localhost', () => {
    console.log('Server running on address: http://localhost:5000');
});