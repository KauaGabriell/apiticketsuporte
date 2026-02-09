import http from 'node:http';
const port = 3000;

import { jsonHandler } from './middlewares/jsonHandler.js';
import { routeHandler } from './middlewares/routeHandler.js';

//Iniciando Servidor
const server = http.createServer(async (req, res) => {
  //Rota para Criar um Ticket
  if (req.method === 'POST' && req.url === '/tickets') {
  }

  await jsonHandler(req, res);
  await routeHandler(req, res);
});

server.listen(port);
