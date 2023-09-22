const { Router } = require("express");
const {
  altaRepuestoController,
} = require("../controllers/repuestos/altaRepuesto.controller");
const {
  listarRepuestosController,
} = require("../controllers/repuestos/listarRepuesto.controller");
const { checkRole } = require("../middlewares/user.validation");
const jwtAdmin = require("../utils/jwt");

const repuestoRouter = Router();

repuestoRouter.post("/", altaRepuestoController);
repuestoRouter.get(
  "/:tipo",
  jwtAdmin.verifyToken,
  checkRole(["empleado"]),
  listarRepuestosController
);

module.exports = { repuestoRouter };
