const { vehiculoModel } = require("../models/vehiculo.model");
const { clienteModel } = require("../models/cliente.model");
const { vehiculosValidations } = require("../validations/vehiculosValidations");

async function altaVehiculoService(data) {
  try {
    //Validación de campos:
    vehiculosValidations(data);

    //validar usuario:
    const cliente = await clienteModel.getById(data.cliente);
    if (cliente.length === 0)
      throw new Error("Error 404: Cliente no encontrado");

    const fecha_ingreso = new Date();

    const dataDB = await vehiculoModel.save({
      dominio: data.dominio,
      modelo: data.modelo,
      marca: data.marca,
      anio: data.anio,
      fecha_ingreso,
      id_cliente: data.cliente,
    });
    return dataDB;
  } catch (error) {
    throw error;
  }
}

module.exports = { altaVehiculoService };
