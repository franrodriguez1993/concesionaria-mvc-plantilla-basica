const { Router } = require("express");
const {
  altaRepuestoController,
} = require("../controllers/repuestos/altaRepuesto.controller");
const {
  listarRepuestoController,
} = require("../controllers/repuestos/listarRepuesto.controller");

const repuestoRouter = Router();

repuestoRouter.post("/", altaRepuestoController);
repuestoRouter.get("/", listarRepuestoController);

module.exports = { repuestoRouter };
