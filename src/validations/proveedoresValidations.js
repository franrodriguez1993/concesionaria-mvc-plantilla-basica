function preveedoresValidations(data) {
  if (!data.nombre) {
    throw new Error("Error 400 - Nombre requerido");
  }
  if (data.nombre.length < 3 || data.nombre.length > 40) {
    throw new Error("Error 400 - Nombre tiene que tener 3-40 caracteres");
  }
  if (!data.apellido) {
    throw new Error("Error 400 - Nombre requerido");
  }
  if (data.apellido.length < 3 || data.apellido.length > 40) {
    throw new Error("Error 400 - Nombre tiene que tener 3-40 caracteres");
  }
  if (!data.mail) {
    throw new Error("Error 400 - Mail requerido");
  }
  if (data.mail.length < 3 || data.mail.length > 60) {
    throw new Error("Error 400 - Nombre tiene que tener 3-40 caracteres");
  }
  if (!data.clave) {
    throw new Error("Error 400 - Clave requerida");
  }
  if (data.clave.length < 6 || data.clave.length > 25) {
    console.log(data.clave);
    throw new Error("Error 400 - Clave tiene que tener 6-25 caracteres");
  }
  if (!data.rubro) {
    throw new Error("Error 400 - Rubro requerido");
  }
  if (data.rubro.length < 3 || data.rubro.length > 40) {
    throw new Error("Error 400 - Rubro tiene que tener 3-40 caracteres");
  }
}

module.exports = { preveedoresValidations };
