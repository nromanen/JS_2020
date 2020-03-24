
const http = require('http');
const fs = require('fs');

const port = 3000
const hostName = 'localhost'

const requestHandler = (request, response) => {
    console.log(request.url)
    response.end('Hello Node.js Server!')
}

/*const server = http.createServer(requestHandler)

server.listen(port, hostName, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }    console.log(`server is listening on ${port}`)
})*/


const server = http.createServer((req, resp) => {
	fs.readFile('index.html', (err, data) =>{
		resp.writeHead(200, {"Content-Type": "text/html"});
		resp.end(data);
	})
});


server.listen(port, hostName, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }    console.log(`server is listening on ${port}`)
})

