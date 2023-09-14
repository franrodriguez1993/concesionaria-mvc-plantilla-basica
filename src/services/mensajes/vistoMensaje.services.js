const { mensajeModel } = require("../../models/mensaje.model");

async function vistoMensajeService(id) {
  const mensaje = await mensajeModel.getById(id);

  if (mensaje.length === 0) throw new Error("Error 404: Mensaje no encontrado");

  await mensajeModel.seenMessage(id);

  return "Mensaje visto.";
}

module.exports = { vistoMensajeService };
