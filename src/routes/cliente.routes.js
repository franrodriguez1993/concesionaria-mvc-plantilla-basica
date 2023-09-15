const { Router } = require("express");
const {
  altaClienteController,
} = require("../controllers/altaCliente.controller");

const clientesRoutes = Router();

clientesRoutes.post("/", altaClienteController);

module.exports = { clientesRoutes };
