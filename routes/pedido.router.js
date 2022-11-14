const express = require("express");

const PedidoService = require('../services/pedidos.service')
const servicio = new PedidoService();
const router = express.Router();

router.get('/', (req, res) => {
  const pedido = servicio.find();
  res.status(200).json(pedido);
});

router.get('/:id', (req, res) => {
  const { id } = req.params
  const pedido = servicio.findby(id);
  if (pedido === undefined){
    res.status(404).json({
      message: 'Pedido no encontrado',
      id
    });
  }
  res.status(200).json(pedido)
} )
router.post('/', (req, res) => {
  const body = req.body;
  const crearNuevoPedido = servicio.create(body);
  res.status(201).json({
    mensaje: 'Pedido creado exitosamente',
    datos: crearNuevoPedido
  });
});

// router.put('/:id', (req,res,) => {
//   const { id } = req.params
//   const body = req.body;
//   const empleado = servicio.update(id,body)
//   res.status(200).json({
//     mensaje: 'datos del empleado actualizado',
//     empleado
//   });

// });

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body;
  servicio.update(id,body)
  res.status(200).json({
    mensaje: 'Datos del pedido parcialmente actualizado',
    datos: servicio.findby(id)
  });
});

router.delete('/:id',(req,res)=> {
  const {id} = req.params;
  servicio.delete(id);
  res.json({
  mensaje :('Pedido eliminado'),
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const pedido = servicio.findBy(id);
  if (id == '10'){
    res.status(404).json(
      {
        mensaje: 'No se encuentra el pedido solicitado'
      }
    );
  } else {
    res.status(200).json(pedido);
  }
});
module.exports = router;
