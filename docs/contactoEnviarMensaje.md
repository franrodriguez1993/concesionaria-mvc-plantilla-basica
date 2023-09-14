## ENVIAR MENSAJE

Verbo HTTP: POST
url : https://concesionariafranco.onrender.com/mensaje

Body de la petición:

“email”: Un mail válido
cuerpo: mensaje a enviar(3 - 2000 caracteres)

Si la solicitud POST al servidor es exitoso se devuelve un archivo JSON con el id del mensaje almacenado en la base de datos:

```json
{
  "id_mensaje": 1
}
```

Si existe algún error o el body es incorrecto el servidor devolverá un statusCode 400 (en caso de que el body sea incorrecto) o un statusCode 500 en caso de que sea un error interno del servidor.

---
