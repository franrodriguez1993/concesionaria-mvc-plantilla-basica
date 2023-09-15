const { altaEmpleadoService } = require("../services/altaEmpleados.services");

async function altaEmpleadosController(req, res) {
  try {
    //data del request:
    const data = req.body;

    //servicio
    const resService = await altaEmpleadoService(data);

    //respuesta:
    res.json({ id_empleado: resService });
  } catch (error) {
    if (error.message.startsWith("Error 400")) {
      return res.status(400).json({ msg: error.message });
    }
    return res.status(500).json({ msg: error.message });
  }
}

module.exports = { altaEmpleadosController };
