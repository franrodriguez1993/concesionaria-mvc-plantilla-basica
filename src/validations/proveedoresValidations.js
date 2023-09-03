function preveedoresValidations(data) {
  const regExpMail = new RegExp(
    "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
  );

  if (!data.nombre) {
    throw new Error("Error 400 - Nombre requerido");
  }
  if (data.nombre.length < 3 || data.nombre.length > 40) {
    throw new Error("Error 400 - Nombre tiene que tener 3-40 caracteres");
  }
  if (!data.apellido) {
    throw new Error("Error 400 - Apellido requerido");
  }
  if (data.apellido.length < 3 || data.apellido.length > 40) {
    throw new Error("Error 400 - Apellido tiene que tener 3-40 caracteres");
  }
  if (!data.email) {
    throw new Error("Error 400 - Mail requerido");
  }
  if (!regExpMail.test(data.email)) {
    throw new Error("Error 400 -Ingrese un mail válido");
  }
  if (!data.clave) {
    throw new Error("Error 400 - Clave requerida");
  }
  if (data.clave.length < 7 || data.clave.length > 25) {
    console.log(data.clave);
    throw new Error("Error 400 - Clave tiene que tener 7-25 caracteres");
  }
  if (!data.rubro) {
    throw new Error("Error 400 - Rubro requerido");
  }
  if (data.rubro.length < 3 || data.rubro.length > 40) {
    throw new Error("Error 400 - Rubro tiene que tener 3-40 caracteres");
  }
}

module.exports = { preveedoresValidations };
