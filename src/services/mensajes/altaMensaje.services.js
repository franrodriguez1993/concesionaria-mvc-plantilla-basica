const { mensajesValidations } = require("../../validations/mensajeValidations");
const { mensajeModel } = require("../../models/mensaje.model");

async function altaMensajesServices(data) {
  //validar data:
  mensajesValidations(data);

  //guardar mensaje:
  const mensaje = await mensajeModel.save({
    email: data.email,
    cuerpo: data.cuerpo,
  });

  return { id_mensaje: mensaje[0] };
}

module.exports = { altaMensajesServices };
