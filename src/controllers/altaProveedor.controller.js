const {
  altaProveedoresService,
} = require("../services/altaProveedores.services");

async function altaProveedorController(req, res) {
  try {
    //extraer data:
    const data = req.body;

    //servicio:
    const resService = await altaProveedoresService(data);

    //retorno:
    res.status(201).json({ id_proveedor: resService[0] });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
}

module.exports = { altaProveedorController };
