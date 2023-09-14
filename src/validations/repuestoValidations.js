function repuestosValidation(data) {
  if (!data.nombre) {
    throw new Error("Error 400: Nombre requerido");
  }
  if (data.nombre.length < 3 || data.nombre.length > 50) {
    throw new Error("Error 400: Nombre debe ser 3-50 caracteres");
  }
  if (!data.precio) {
    throw new Error("Error 400: Precio requerido");
  }
  if (isNaN(data.precio)) {
    throw new Error("Error 400: Precio debe ser un número");
  }
  if (data.precio < 1 || data.precio > 1000000) {
    throw new Error("Error 400: Precio debe ser entre 1-1.000.000");
  }

  if (!data.stock) {
    throw new Error("Error 400: Stock requerido");
  }
  if (isNaN(data.stock)) {
    throw new Error("Error 400: Stock debe ser un número");
  }
  if (data.stock < 1 || data.stock > 10000) {
    throw new Error("Error 400: Stock debe ser entre 1-10000");
  }
}

module.exports = { repuestosValidation };
