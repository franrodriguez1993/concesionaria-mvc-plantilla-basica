const {
  listarRepuestosService,
} = require("../../services/repuestos/listarRepuestos.services");

const listarRepuestoController = async (req, res) => {
  try {
    const resService = await listarRepuestosService();

    res.json(resService);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

module.exports = { listarRepuestoController };
