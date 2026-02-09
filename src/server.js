import http from 'node:http';
const port = 3000;

import { jsonHandler } from './middlewares/jsonHandler.js';

//Iniciando Servidor
const server = http.createServer(async (req, res) => {
  await jsonHandler(req, res);
  res.end('Hello Word');
});

server.listen(port);
