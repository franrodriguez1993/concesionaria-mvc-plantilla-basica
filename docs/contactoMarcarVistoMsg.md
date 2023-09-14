## MARCAR VISTO MENSAJE

Verbo HTTP: PUT

url : https://concesionariafranco.onrender.com/mensaje/id

Marca como leido un mensaje de la base de datos.
Se debe enviar en la url el id del mensaje.

Devuelve el siguiente mensaje:

```
  "Mensaje visto."

```

En caso de introducir el id de un mensaje que no existe devuelve el siguiente mensaje:

```
{
  "msg": "Error 404: Mensaje no encontrado"
}

```
