const { json } = require("express");
const express = require("express");

const EmpleadoService = require('../services/empleado.service')
const servicio = new EmpleadoService();
const router = express.Router();

router.get('/', (req, res) => {
  const empleado = servicio.find();
  res.status(200).json(empleado);
});

router.get('/:id', (req, res) => {
  const { id } = req.params
  const empleado = servicio.findby(id);
  if (empleado === undefined){
    res.status(404).json({
      message: 'Empleado not found',
      id
    });
  }
  res.status(200).json(empleado)
} )
router.post('/', (req, res) => {
  const body = req.body;
  const crearNuevoEmpleado = servicio.create(body);
  res.status(201).json({
    mensaje: 'Empleado creado exitosamente',
    datos: crearNuevoEmpleado
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
  servicio.updateParcial(id,body)
  res.status(200).json({
    mensaje: 'datos del empleado parcialmente actualizado',
    datos: servicio.findby(id)
  });
});

router.delete('/:id',(req,res)=> {
  const {id} = req.params;
  servicio.delete(id);
  res.json({
  mensaje :('registro eliminado'),
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const empleado = servicio.findBy(id);
  if (id == '10'){
    res.status(404).json(
      {
        mensaje: 'no se encuentra el empleado solicitado'
      }
    );
  } else {
    res.status(200).json(empleado);
  }
});
module.exports = router;
