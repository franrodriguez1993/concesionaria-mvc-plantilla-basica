const { mensajeModel } = require("../../models/mensaje.model");

async function listarMensajesService() {
  const mensajes = await mensajeModel.listAll();

  return mensajes;
}

module.exports = { listarMensajesService };
