const { Router } = require("express");
const {
  altaProveedorController,
} = require("../controllers/altaProveedor.controller");
const proveedorRoutes = Router();

proveedorRoutes.post("/", altaProveedorController);

module.exports = { proveedorRoutes };
