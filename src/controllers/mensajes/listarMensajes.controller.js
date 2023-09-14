const {
  listarMensajesService,
} = require("../../services/mensajes/listarMensajes.services");

const listarMensajesController = async (req, res) => {
  try {
    const resService = await listarMensajesService();
    return res.json(resService);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

module.exports = { listarMensajesController };
