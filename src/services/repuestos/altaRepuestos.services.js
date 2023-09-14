const { repuestoModel } = require("../../models/repuesto.model");
const { proveedorModel } = require("../../models/proveedor.model");
const {
  repuestosValidation,
} = require("../../validations/repuestoValidations");

async function altaRepuestosService(data) {
  //checkear proveedor:
  const proveedor = await proveedorModel.getById(data.id_proveedor);
  if (proveedor.length === 0)
    throw new Error("Error 404: Proveedor no encontrado");

  //validar datos:
  repuestosValidation(data);

  //crear repuesto:
  const respuesto = await repuestoModel.save({
    nombre: data.nombre,
    precio: data.precio,
    stock: data.stock,
    id_proveedor: data.id_proveedor,
  });

  return respuesto[0]; //devuelvo el id
}

module.exports = { altaRepuestosService };
