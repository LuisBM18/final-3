const faker = require("faker")
const crypto = require("crypto");

class PedidoService{
  constructor(){
    this.pedido= [];
    this.GenerarDatos(3);
  }

  GenerarDatos(limite) {
    for (let index = 0; index < limite; index++) {
      this.pedido.push({
        id: crypto.randomUUID(),
        cliente: faker.name.firstName(),
        estado: "Por entregar",
        condicion: "Delivery",
        PrecioTotal: faker.datatype.number(),
      });
    }
  }

  create(data) {
    const crearNuevoPedido ={
      id : crypto.randomUUID(),
      ...data
    }
    this.empleado.push(crearNuevoPedido);
    return crearNuevoPedido;
  }

  update(id, changes) {
    const posicion = this.pedido.findIndex(pedido => {
      return pedido.id===id;
    });
    if (posicion === -1) {
      throw new Error("Pedido no encontrado");
    }
    const pedido = this.pedido[posicion];
    this.pedido[posicion]={
      ...pedido,
      ...changes
    }
    return this.pedido[posicion];
  }

  delete(id) {
    const posicion = this.pedido.findIndex(pedido => {
      return pedido.id===id;
    });
    if (posicion === -1) {
      throw new Error("Pedido no encontrado");
    }
    this.pedido.splice(posicion, 1);
    return {
      mensaje: "Pedido eliminado",
      id
    };
  }

  find() {
    return this.pedido;
  }

  findby(id) {
    return this.pedido.find(pedido => {
      return pedido.id === id;
    });
  }
}

module.exports = PedidoService;
