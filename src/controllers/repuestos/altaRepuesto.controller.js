const {
  altaRepuestosService,
} = require("../../services/repuestos/altaRepuestos.services");

const altaRepuestoController = async (req, res) => {
  try {
    const resService = await altaRepuestosService(req.body);

    res.status(201).json({ id_repuesto: resService });
  } catch (error) {
    if (error.message.startsWith("Error 400")) {
      return res.status(400).json({ msg: error.message });
    } else if (error.message.startsWith("Error 404")) {
      return res.status(404).json({ msg: error.message });
    }
    res.status(500).json({ msg: error.message });
  }
};

module.exports = { altaRepuestoController };
