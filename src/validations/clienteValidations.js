function clienteValidation(data){

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
  if(data.clave.length < 7 || data.clave.length > 25 ){
    throw new Error("clave de tener entre 7 y 25 caracteres");
  }
if (!data.tipo) {
  throw new Error("ingrese tipo");
}
if (data.tipo.length < 3 || data.tipo.length > 40) {
  throw new Error("tipo debe tener 3-40 caracteres.");
}
}
module.exports = {clienteValidation};