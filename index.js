const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.js');
const middlewears = jsonServer.defaults();
const port = 8000;

server.use(middlewears);
server.use(router);

server.listen(port);