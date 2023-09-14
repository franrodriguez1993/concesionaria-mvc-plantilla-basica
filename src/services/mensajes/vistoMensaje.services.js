const { mensajeModel } = require("../../models/mensaje.model");

async function vistoMensajeService(id) {
  await mensajeModel.seenMessage(id);

  return "Mensaje visto.";
}

module.exports = { vistoMensajeService };
