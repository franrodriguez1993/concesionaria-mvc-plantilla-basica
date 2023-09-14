Alta Empleado

verbo http: POST
Url : https://concesionariafranco.onrender.com/empleado

Body de la Petición:
“nombre”: “nombre del empleado”(3 - 30 caracteres)
“apellido” : “apellido del proveedor”
“mail”: “un email válido”
“clave”: “entre 7 - 25 caracteres”
“sector”:(entre 3 - 40 caracteres)
“cargo”: “(entre 3 - 40 caracteres)

si la solicitud Post al servidor es exitoso devuelve un archivo Json con el id del empleado almacenado en la base de datos.

```
{
  “id_empleado”:1
}

```

Si existe algún error o el body es incorrecto el servidor devolverá un StatusCode 400(en caso de que el body sea incorrecto) o StatusCode 500 en caso de que sea un error interno del servidor.

Ejemplo:

```
“msg” : “Error 400 - “clave debe tener entre 7 y 25 caracteres”

```
