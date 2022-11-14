const express = require('express');
const productoRouter = require('./product.router');
const UsuariosRouter = require('./usuario.router');

function routerApi(app){1
  const routerv1 = express.Router();
  const routerv2 = express.Router();
  app.use('/api/v1',routerv1);
  routerv1.use('/productos',productoRouter);
  app.use('/api/v2',routerv2);
  routerv2.use('/usuarios',UsuariosRouter);
}

module.exports = routerApi;

