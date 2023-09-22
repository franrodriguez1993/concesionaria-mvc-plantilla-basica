const {
  listarRepuestos,
} = require("../../services/repuestos/listarRepuestos.services");

async function listarRepuestosController(req, res) {
  try {
    const tipo_repuesto = req.params.tipo;
    const lista_repuestos = await listarRepuestos(tipo_repuesto);
    res.json({ repuestos: lista_repuestos });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
}

module.exports = {
  listarRepuestosController,
};
