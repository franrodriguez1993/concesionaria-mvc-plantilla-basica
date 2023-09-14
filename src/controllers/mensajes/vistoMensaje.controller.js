const {
  vistoMensajeService,
} = require("../../services/mensajes/vistoMensaje.services");

const vistoMensajeController = async (req, res) => {
  try {
    const id = req.params.id;
    const resService = await vistoMensajeService(id);

    return res.json(resService);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

module.exports = { vistoMensajeController };
