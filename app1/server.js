const http = require('http');

const server = http.createServer((req, res) => {
  throw new Error('App1 error!');

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('ok 1\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
