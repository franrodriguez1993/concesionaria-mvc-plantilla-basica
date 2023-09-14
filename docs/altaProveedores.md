# ALTA PROVEEDORES

Verbo HTTP: POST
url : https://concesionariafranco.onrender.com/proveedor

Body de la petición:

“name”: nombre del proveedor (3 - 40 caracteres)
“lastname”: apellido del proveedor (3 - 40 caracteres)
“email”: un email válido.
“key”: contraseña del proveedor (7 - 25 caracteres)
“item”: rubro del proveedor (3 - 40 caracteres)

Si la solicitud POST al servidor es exitoso se devuelve un archivo JSON con el id del proveedor almacenado en la base de datos:

```json
{
  "id_proveedor": 1
}
```

Si existe algún error o el body es incorrecto el servidor devolverá un statusCode 400 (en caso de que el body sea incorrecto) o un statusCode 500 en caso de que sea un error interno del servidor.

Ejemplo:

```json
{
  "msg": "Error 400 - Email en uso."
}
```

---
