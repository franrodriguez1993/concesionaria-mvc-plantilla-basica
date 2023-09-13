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

# ALTA VEHICULOS

Verbo HTTP: POST
url : https://concesionariafranco.onrender.com/vehiculo

Body de la petición:

“marca”: marca del vehículo (3 - 40 caracteres)
“dominio”: patente del vehículo (3 - 20 caracteres)
“modelo”: modelo del vehículo. Ejemplo:”Ka”,”civic”,”A4” (3- 40 caracteres)
“anio”: año en el que el vehículo salió al mercado (años válidos: 1970 - 2025)
“cliente”: id del cliente (número)

NOTA: Actualmente solo se encuentra registrado un solo cliente en la base de datos y su número de id es “1”. Por lo que ingresar cualquier otro número debería arrojar un error 404.

Si la solicitud POST al servidor es exitoso se devuelve un archivo JSON con el id del vehículo almacenado en la base de datos:

```json
{
  "id_vehiculo": 1
}
```

Si existe algún error o el body es incorrecto el servidor devolverá un statusCode 400 (en caso de que el body sea incorrecto), un statusCode 404(si el id de cliente no es válido) o un statusCode 500 en caso de que sea un error interno del servidor.

Ejemplo:

```json
{
  "msg": "Error 404 - Cliente no encontrado."
}
```

---

# LOGIN

Verbo HTTP: POST
url : https://concesionariafranco.onrender.com/auth/login

Body de la petición:

- email
- password

Retorna:

- mensaje
- id del usuario
- jwt

```json
{
  "message": "AUTENTICACION EXITOSA",
  "id": 6,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjYsImlhdCI6MTY5NDYwMjkxOSwiZXhwIjoxNjk0NjAzNTE5fQ.kEUPmXJWVM3Kzlnz7mcsS8N76c8ScyJPz8fkBQ4xaYg"
}
```
