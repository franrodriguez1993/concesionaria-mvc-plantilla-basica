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
