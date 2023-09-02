function vehiculosValidations(data) {
  //validaciones:
  if (!data.modelo) {
    throw new Error("Error 400 - ingrese modelo");
  }
  if (data.modelo.length < 3 || data.modelo.length > 40) {
    throw new Error("Error 400 - Modelo debe tener 3-40 caracteres.");
  }
  if (!data.marca) {
    throw new Error("Error 400 - ingrese marca");
  }
  if (data.marca.length < 3 || data.marca.length > 40) {
    throw new Error("Error 400 - Marca debe tener 3-40 caracteres.");
  }
  if (!data.dominio) {
    throw new Error("Error 400 - Ingrese dominio");
  }
  if (data.dominio.length < 3 || data.dominio.length > 20) {
    throw new Error("Error 400 - Dominio debe tener 6-20 caracteres.");
  }
  if (!data.anio) {
    throw new Error("Error 400 - ingrese año");
  }
  if (!data.cliente) {
    throw new Error("Error 400 - ingrese cliente");
  }
  if (isNaN(data.anio)) {
    throw new Error("Error 400 - año no es un número");
  }
  if (data.anio > 2025 || data.anio < 1970) {
    throw new Error("Error 400 - año inválido");
  }
}

module.exports = { vehiculosValidations };
