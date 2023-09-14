# ALTA REPUESTOS

Verbo HTTP: POST
url : https://concesionariafranco.onrender.com/repuesto

Body de la petición:

- “name”: nombre del repuesto (3 - 50 caracteres)
- "precio": precio del respuesto (valor de 1 - 1000000)
- "stock": cantidad de respuestos (valor de 1 - 10000)
- "id_proveedor": número id válido de un proveedor almacenado en la base de datos.

NOTA: Actualmente en la base datos hay 7 proveedores almacenados por cual en "id_proveedor" si se ingresa un número mayor a 8 debería fallar la solicitud y devolver un status code 404.

Si la solicitud POST al servidor es exitoso se devuelve un archivo JSON con el id del repuesto almacenado en la base de datos:

Ejemplo:

```json
{
  "id_repuesto": 1
}
```

Si existe algún error o el body es incorrecto el servidor devolverá un statusCode 400 (en caso de que el body sea incorrecto), statusCode 404 si el proveedor no existe y un statusCode 500 en caso de que sea un error interno del servidor.

Ejemplo:

```json
{
  "msg": "Error 400 - Nombre requerido."
}
```

---
