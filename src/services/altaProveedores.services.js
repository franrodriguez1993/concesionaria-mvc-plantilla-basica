const {
  preveedoresValidations,
} = require("../validations/proveedoresValidations");

const { usuarioModel } = require("../models/usuario.model");
const { proveedorModel } = require("../models/proveedor.model");
const { passwordEncrypt } = require("../utils/passwordEncrypt");

async function altaProveedoresService(data) {
  try {
    //validar data:
    preveedoresValidations(data);

    //encriptar contraseña:
    const hashPass = await passwordEncrypt(data.clave);

    //guardar usuario
    const usuario = await usuarioModel.save({
      nombre: data.nombre,
      apellido: data.apellido,
      email: data.mail,
      clave: hashPass,
      rol: "proveedor",
    });

    //guardar el proveedor:
    const proveedor = await proveedorModel.save({
      rubro: data.rubro,
      id_usuario: usuario[0],
    });

    return proveedor;
  } catch (error) {
    throw error;
  }
}

module.exports = { altaProveedoresService };
