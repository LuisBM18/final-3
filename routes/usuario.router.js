const express = require('express');
const router = express.Router();
const UsuarioService = require('./../services/usuario.service');
const service = new UsuarioService();

router.get('/',(req,res)=>{
  const Usuarios = service.find();
  res.status(200).json(Usuarios);

});

router.get('/:id',(req,res)=>{
  const {id} = req.params;
 const usuario = service.finfOne(id);
 if (usuario===undefined){
  res.status(404).json({
    message : 'usuario no encontrado',
    id
  });
 }
 res.status(200).json(usuario);

});

router.post('/',(req,res)=>{
const body = req.body;
const nuevoUsuario = service.create(body);
res.status(201).json({
  message:'usuario creado',
  nuevoUsuario
});
});
router.patch('/:id',(req,res)=>{
  const {id} = req.params;
  const body = req.body;
  const usuario = service.update(id,body);
  res.status(200).json({
    message:'usuario actualizado',
    usuario
  });
});

router.delete('/:id',(req,res)=>{
  const {id} = req.params;
  const rta = service.delete(id);
  res.json({
    message:'usuario eliminado',
    rta
  });
});


module.exports = router;
