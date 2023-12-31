const { altaClienteService } = require("../services/altaClientes.services");

async function altaClienteController(req, res) {
  try {
    //data del request:
    const data = req.body;

    //servicio
    const resService = await altaClienteService(data);

    //respuesta:
    res.json({ id_cliente: resService });
  } catch (error) {
    if (error.message.startsWith("Error 400")) {
      return res.status(400).json({ msg: error.message });
    }
    return res.status(500).json({ msg: error.message });
  }
}

module.exports = { altaClienteController };
