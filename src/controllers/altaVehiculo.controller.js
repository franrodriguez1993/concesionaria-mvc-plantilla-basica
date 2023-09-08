const { altaVehiculoService } = require("../services/altaVehiculo.services");

async function altaVehiculoController(req, res) {
  try {
    //data del request:
    const data = req.body;

    //servicio
    const resService = await altaVehiculoService(data);

    //respuesta:
    res.json({ id_vehiculo: resService[0] });
  } catch (error) {
    if (error.message.startsWith("Error 400")) {
      return res.status(400).json({ msg: error.message });
    } else if (error.message.startsWith("Error 404")) {
      return res.status(404).json({ msg: error.message });
    }
    res.status(500).json({ msg: error.message });
  }
}

module.exports = { altaVehiculoController };
