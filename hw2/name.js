const http = require('http');

const server = http.createServer((request, response) => {
    console.log('HTTP works!');
    response.writeHead(200, {'Content-Type':'text/html'});
    response.write('<h1>Hello</h1>');
    response.end();
});

server.listen(8080);