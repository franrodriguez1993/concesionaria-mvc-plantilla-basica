const {
  altaMensajesServices,
} = require("../../services/mensajes/altaMensaje.services");

const altaMensajeController = async (req, res) => {
  try {
    const resService = await altaMensajesServices(req.body);
    return res.status(201).json(resService);
  } catch (error) {
    if (error.message.startsWith("Error 400")) {
      return res.status(400).json({ msg: error.message });
    }
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = { altaMensajeController };
