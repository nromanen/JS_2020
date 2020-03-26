
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, resp) => {
    fs.readFile('index.html', (err, data) =>{
		resp.writeHead(200, {"Content-Type": "text/html"});
        console.log(req.url)
        resp.end('Hello Node.js Server!')
    });
});
const port = 3000;
const hostName = 'localhost';
const requestHandler = (req, resp) => {
    console.log(req.url)
    resp.end('Hello Node.js Server!')
};
server.listen(port, hostName, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
});

