const express = require('express');
const productoRouter = require('./product.router');
const UsuariosRouter = require('./usuario.router');
const empleadoRouter = require('./empleados.router');
const pedidoRouter = require('./pedido.router');

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1',router);
  router.use('/productos',productoRouter);
  router.use('/usuarios',UsuariosRouter);
  router.use('/empleados',empleadoRouter);
  router.use('/pedidos', pedidoRouter);

}

module.exports = routerApi;

