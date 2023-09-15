function clienteValidation(data) {
  if (!data.nombre) {
    throw new Error("Error 400: Nombre requerido");
  }
  if (data.nombre < 3 || data.nombre > 40) {
    throw new Error("Error 400: Nombre tiene que tener 3-40 caracteres");
  }
  if (!data.apellido) {
    throw new Error("Error 400: Nombre requerido");
  }
  if (data.apellido < 3 || data.apellido > 40) {
    throw new Error("Error 400: Nombre tiene que tener 3-40 caracteres");
  }
  if (!data.mail) {
    throw new Error("Error 400: Mail requerido");
  }
  if (data.mail < 3 || data.mail > 60) {
    throw new Error("Error 400: Nombre tiene que tener 3-40 caracteres");
  }
  if (!data.clave) {
    throw new Error("Error 400: Clave requerida");
  }
  if (data.clave.length < 7 || data.clave.length > 25) {
    throw new Error("Error 400: clave de tener entre 7 y 25 caracteres");
  }
  if (!data.tipo) {
    throw new Error("Error 400: ingrese tipo");
  }
  if (data.tipo.length < 3 || data.tipo.length > 40) {
    throw new Error("Error 400: tipo debe tener 3-40 caracteres.");
  }
}
module.exports = { clienteValidation };
