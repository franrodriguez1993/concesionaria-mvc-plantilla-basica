const prespuestoServices = require("../services/presupuestos.services");

async function postPresup(req, res) {
  try {
    const presupuesto = req.body.presupuesto;
    const facturaciones = req.body.facturaciones;

    const user = req.user;

    const resService = await prespuestoServices.armadoPresup(
      presupuesto,
      facturaciones,
      user
    );

    return res.status(201).json(resService);
  } catch (error) {
    if (error.message.startsWith("Error 404")) {
      return res.status(404).json({ msg: error.message });
    }
    res.status(500).json({ msg: error.message });
  }
}

module.exports = {
  postPresup,
};
