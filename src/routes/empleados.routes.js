const { Router } = require("express");
const {
  altaEmpleadosController,
} = require("../controllers/altaEmpleado.controller");

const empleadosRoutes = Router();

empleadosRoutes.post("/", altaEmpleadosController);

module.exports = { empleadosRoutes };
