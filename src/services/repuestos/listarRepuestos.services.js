const { repuestoModel } = require("../../models/repuesto.model");

async function listarRepuestos(tipo) {
  try {
    const listadoRepuestos = await repuestoModel.getByType(tipo);
    return listadoRepuestos;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  listarRepuestos,
};
