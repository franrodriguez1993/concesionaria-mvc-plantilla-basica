function mensajesValidations(data) {
  const regExpMail = new RegExp(
    "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
  );

  if (!data.cuerpo) {
    throw new Error("Error 400 - Cuerpo requerido");
  }
  if (data.cuerpo.length < 3 || data.cuerpo.length > 2000) {
    throw new Error("Error 400 - Cuerpo tiene que tener 3-2000 caracteres");
  }

  if (!data.email) {
    throw new Error("Error 400 - Mail requerido");
  }
  if (!regExpMail.test(data.email)) {
    throw new Error("Error 400 -Ingrese un mail válido");
  }
}

module.exports = { mensajesValidations };
