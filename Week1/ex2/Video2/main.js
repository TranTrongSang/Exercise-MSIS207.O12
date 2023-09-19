// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello, world!');
// });

// server.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });

var http = require('http');
var url = require('url');


http.createServer(onRequest).listen(3000);

console.log('Server has started');

function onRequest(request, response)
{
	var pathName = url.parse(request.url).pathname;
	console.log('pathname: ' + pathName);
	response.writeHead(200);
	response.write('Hello NodeJS');
	response.end();
}


