const http = require('http');
var fs = require('fs');
var index = fs.readFileSync('index.html');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(index);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
