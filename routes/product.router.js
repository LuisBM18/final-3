const express = require('express');
const router = express.Router();
const productoService = require('./../services/product.service');
const service = new productoService();

router.get('/',(req,res)=>{
  const productos = service.find();
  res.status(200).json(productos);

});

router.get('/:id',(req,res)=>{
  const {id} = req.params;
 const producto = service.finfOne(id);
 if (producto===undefined){
  res.status(404).json({
    message : 'producto no encontrado',
    id
  });
 }
 res.status(200).json(producto);

});

router.post('/',(req,res)=>{
const body = req.body;
const nuevoProducto = service.create(body);
res.status(201).json({
  message:'producto creado',
  nuevoProducto1
});
});
router.patch('/:id',(req,res)=>{
  const {id} = req.params;
  const body = req.body;
  const producto = service.update(id,body);
  res.status(200).json({
    message:'producto actualizado',
    producto
  });
});

router.delete('/:id',(req,res)=>{
  const {id} = req.params;
  const rta = service.delete(id);
  res.json({
    message:'producto eliminado',
    rta
  });
});


module.exports = router;
