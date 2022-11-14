const crypto = require('crypto');

class productoService{

constructor(){
  this.productos=[];
  this.generate(10);
}
generate(limite){
  for (let index = 0;index<limite;index++){
    this.productos.push({
      id:crypto.randomUUID(),
      nombre:'producto'+index,
      precio: 10 + Math.floor(Math.random()*190)
    });
  }
}

  create(data){
    const nuevoProducto = {
      id: crypto.randomUUID(),
      ...data
    };
    this.productos.push(nuevoProducto);
    return nuevoProducto;

  }
  find(){
    return this.productos;
  }
  finfOne(id){
    return this.productos.find(producto =>{
      return producto.id === id;
    });
  }
  update(id, changes){
    const index = this.productos.findIndex(producto =>{
      return producto.id === id;
    });
    if(index===-1){
      throw new Error('producto no encontrado');
    }
    const producto = this.productos[index];
      this.productos[index] = {
        ...producto,
        ...changes
    };
    return this.productos[index];
  }
  delete(id){
    const index = this.productos.findIndex(producto =>{
      return producto.id === id;
    });
    if(index===-1){
      throw new Error('producto no encontrado');
    }
    this.productos.splice(index,1);
    return {id};

  }

}
module.exports = productoService;
