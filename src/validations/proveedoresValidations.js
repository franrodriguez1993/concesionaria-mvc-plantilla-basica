function preveedoresValidations(data) {
  if (!data.nombre) {
    throw new Error("Nombre requerido");
  }
  if (data.nombre < 3 || data.nombre > 40) {
    throw new Error("Nombre tiene que tener 3-40 caracteres");
  }
  if (!data.apellido) {
    throw new Error("Nombre requerido");
  }
  if (data.apellido < 3 || data.apellido > 40) {
    throw new Error("Nombre tiene que tener 3-40 caracteres");
  }
  if (!data.mail) {
    throw new Error("Mail requerido");
  }
  if (data.mail < 3 || data.mail > 60) {
    throw new Error("Nombre tiene que tener 3-40 caracteres");
  }
  if (!data.clave) {
    throw new Error("Clave requerida");
  }
  // if (data.clave.toString().trim() < 6 || data.clave.toString().trim() > 25) {
  //   throw new Error("Clave tiene que tener 6-25 caracteres");
  // }
  if (!data.rubro) {
    throw new Error("Rubro requerido");
  }
  if (data.rubro < 3 || data.rubro > 40) {
    throw new Error("Rubro tiene que tener 3-40 caracteres");
  }
}

module.exports = { preveedoresValidations };
