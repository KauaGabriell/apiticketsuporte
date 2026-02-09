import { routes } from '../routes/index.js';

export function routeHandler(req, res) {
  const route = routes.find((route) => {
    return route.method === req.method && route.path === req.url;
  });
  console.log(route);

  if (route) {
    return route.controller(req, res);
  }

  return res.writeHead(404).end('Not Found');
}
