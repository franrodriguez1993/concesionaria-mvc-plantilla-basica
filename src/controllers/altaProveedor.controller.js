const {
  altaProveedoresService,
} = require("../services/altaProveedores.services");

async function altaProveedorController(req, res) {
  try {
    //extraer data:
    const data = req.body;

    //servicio:
    const resService = await altaProveedoresService({
      nombre: data.name,
      apellido: data.lastname,
      email: data.email,
      clave: data.key,
      rubro: data.item,
    });

    //retorno:
    res.status(201).json({ id_proveedor: resService[0] });
  } catch (error) {
    if (error.message.startsWith("Error 400")) {
      return res.status(400).json({ msg: error.message });
    }
    return res.status(500).json({ msg: error.message });
  }
}

module.exports = { altaProveedorController };
