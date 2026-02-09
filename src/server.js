import http from 'node:http';
const port = 3000;

//Iniciando Servidor
const server = http.createServer((req, res) => {
  res.end('Hello Word');
});

server.listen(port);
