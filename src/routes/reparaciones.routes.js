const express = require("express");
const router = express.Router();
const jwtAdmin = require("../utils/jwt");
const { checkRole } = require("../middlewares/user.validation");
const presupuestosController = require("../controllers/presupuestos.controller");
const {
  presupuestoValidation,
} = require("../middlewares/presupuesto.validations");

router.post(
  "/presupuestos",
  jwtAdmin.verifyToken,
  checkRole(["empleado"]),
  presupuestoValidation,
  presupuestosController.postPresup
);

module.exports = router;
