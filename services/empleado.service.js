const faker = require("faker")
const crypto = require("crypto");

class EmpleadoService{
  constructor(){
    this.empleado= [];
    this.GenerarDatos(3);
  }

  GenerarDatos(limite) {
    for (let index = 0; index < limite; index++) {
      this.empleado.push({
        id: crypto.randomUUID(),
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        edad: Math.floor(Math.random() * (30 - 1)) + 1,
        usuario: faker.internet.email(),
      });
    }
  }

  create(data) {
    const crearNuevoEmpleado ={
      id : crypto.randomUUID(),
      ...data
    }
    this.empleado.push(crearNuevoEmpleado);
    return crearNuevoEmpleado;
  }

  update(id, changes) {
    const posicion = this.empleado.findIndex(empleado => {
      return empleado.id===id;
    });
    if (posicion === -1) {
      throw new Error("Empleado no encontrado");
    }
    const empleado = this.empleado[posicion];
    this.empleado[posicion]={
      ...empleado,
      ...changes
    }
    return this.empleado[posicion];
  }

  delete(id) {
    const posicion = this.empleado.findIndex(empleado => {
      return empleado.id===id;
    });
    if (posicion === -1) {
      throw new Error("Empleado no encontrado");
    }
    this.empleado.splice(posicion, 1);
    return {
      mensaje: "empleado eliminado",
      id
    };
  }

  find() {
    return this.empleado;
  }

  findby(id) {
    return this.empleado.find(empleado => {
      return empleado.id === id;
    });
  }
}

module.exports = EmpleadoService;
