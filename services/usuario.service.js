const crypto = require('crypto');
const faker = require('faker');

class UsuarioService{

constructor(){
  this.Usuarios=[];
  this.generate(3);
}
generate(limite){
  for (let index = 0;index<limite;index++){
    this.Usuarios.push({
      id:crypto.randomUUID(),
      usuario:'usuario'+index,
      contraseña:faker.internet.password(),


    });
  }
}

  create(data){
    const nuevoUsuario = {
      id: crypto.randomUUID(),
      ...data
    };
    this.Usuarios.push(nuevoUsuario);
    return nuevoUsuario;

  }
  find(){
    return this.Usuarios;
  }
  finfOne(id){
    return this.Usuarios.find(usuario =>{
      return usuario.id === id;
    });
  }
  update(id, changes){
    const index = this.Usuarios.findIndex(usuario =>{
      return usuario.id === id;
    });
    if(index===-1){
      throw new Error('usuario no encontrado');
    }
    const usuario = this.Usuarios[index];
      this.Usuarios[index] = {
        ...usuario,
        ...changes
    };
    return this.Usuarios[index];
  }
  delete(id){
    const index = this.Usuarios.findIndex(usuario =>{
      return usuario.id === id;
    });
    if(index===-1){
      throw new Error('usuario no encontrado');
    }
    this.Usuarios.splice(index,1);
    return {id};

  }

}
module.exports = UsuarioService;
