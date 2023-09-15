const { clienteModel } = require("../models/cliente.model");
const { clienteValidation } = require("../validations/clienteValidations");
const { passwordEncrypt } = require("../utils/passwordEncrypt");
const { usuarioModel } = require("../models/usuario.model");

async function altaClienteService(data) {
  try {
    clienteValidation(data);
    const password = await passwordEncrypt(data.clave);
    const checkEmail = await usuarioModel.getByEmail(data.mail);
    if (checkEmail.length != 0) {
      throw Error("Email en uso");
    }
    const idUsuario = await usuarioModel.save({
      nombre: data.nombre,
      apellido: data.apellido,
      email: data.mail,
      clave: password,
      rol: "cliente",
    });

    const dataDB = await clienteModel.save({
      tipo: data.tipo,
      id_usuario: idUsuario[0],
    });
    return dataDB[0];
  } catch (error) {
    throw error;
  }
}
module.exports = { altaClienteService };
