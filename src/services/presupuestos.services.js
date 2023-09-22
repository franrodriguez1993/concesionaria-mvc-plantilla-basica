const { presupuestoModel } = require("../models/presupuesto.model");
const { vehiculoModel } = require("../models/vehiculo.model");
const { empleadoModel } = require("../models/empleado.model");
const facturacionesServicio = require("../services/facturaciones.services");
const moment = require("moment");

async function armadoPresup(presupuesto, facturaciones, user) {
  try {
    const dominioVehiculo = presupuesto.dominio_vehiculo;
    const id_vehiculo = await vehiculoModel.getByDom(dominioVehiculo);

    if (id_vehiculo.length === 0) {
      throw new Error("Error 404: Dominio no encontrado");
    }

    const id_empleado = await empleadoModel.getByIdUser(user[0].id_usuario);
    if (id_empleado[0].length === 0) {
      throw new Error("Error 404 : Empleado no encontrado");
    }

    const presuPost = {
      tipo_trabajo: presupuesto.tipo_trabajo,
      detalle: presupuesto.detalle,
      importe_total: presupuesto.importe_total,
      fecha: moment().format("YYYY-MM-DD HH:mm:ss"),
      id_vehiculo: id_vehiculo[0].id_vehiculo,
      id_empleado: id_empleado[0].id_empleado,
    };

    const id_presupuesto = await presupuestoModel.save(presuPost);

    if (id_presupuesto.length === 0) {
      throw new Error("Error 500 : Error al crear presupuesto");
    }

    await facturacionesServicio.crearFacturacion(
      presuPost,
      facturaciones,
      id_presupuesto
    );

    return { mensaje: "Presupuesto creado" };
  } catch (error) {
    throw error;
  }
}

module.exports = {
  armadoPresup,
};
