import express from 'express';

const PORT = 8000;
const app = express();

const GET = (req, res) => {
  res.json({
    "id": "6197f7d7c1b2af0dccecdca2",
    "name": "Juan",
    "lastname":"Perez",
  })
}

const POST = (req, res) => {
  res.status(201).json({
    "massage": "Usuario Creado",
    "userInfo": {
      "id": `${req.body.id}`,
      "name": `${req.body.name}`,
      "lastname": `${req.body.lastname}`
    }
  })
}

app.listen(PORT, () => {
  console.log(`Servidor activo, escuchando el puerto ${PORT}`)
})

app.use(express.json())

app.get('/users', GET)

app.post('/users', POST)