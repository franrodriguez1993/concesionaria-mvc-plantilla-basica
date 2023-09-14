const { repuestoModel } = require("../../models/repuesto.model");

async function listarRepuestosService() {
  return await repuestoModel.listAll();
}

module.exports = { listarRepuestosService };
