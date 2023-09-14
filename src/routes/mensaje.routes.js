const { Router } = require("express");
const {
  altaMensajeController,
} = require("../controllers/mensajes/altaMensaje.controller");
const {
  listarMensajesController,
} = require("../controllers/mensajes/listarMensajes.controller");
const {
  vistoMensajeController,
} = require("../controllers/mensajes/vistoMensaje.controller");

const mensajeRoutes = Router();

mensajeRoutes.post("/", altaMensajeController);
mensajeRoutes.get("/", listarMensajesController);
mensajeRoutes.put("/:id", vistoMensajeController);

module.exports = { mensajeRoutes };
