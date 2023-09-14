const { empleadoModel } = require("../models/empleado.model");
const { empleadosValidations } = require("../validations/empleadosValidations");
const { passwordEncrypt } = require("../utils/passwordEncrypt");
const { usuarioModel } = require("../models/usuario.model");

async function altaEmpleadoService(data) {
  try {
    empleadosValidations(data);
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
      rol: "empleado",
    });

    const dataDB = await empleadoModel.save({
      sector: data.sector,
      cargo: data.cargo,
      id_usuario: idUsuario[0],
    });
    return dataDB[0];
  } catch (error) {
    throw error;
  }
}
module.exports = { altaEmpleadoService };
