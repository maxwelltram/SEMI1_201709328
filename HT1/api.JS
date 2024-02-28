const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/check', (req, res) => {
  res.status(200).send('OK');
});

app.get('/', (req, res) => {
  res.json({
    Instancia: 'Instancia #1 - API #1',
    Curso: 'Seminario de sistemas 1',
    Estudiante: 'Estudiante - 201709328',
  });
});

app.listen(3000, () => {
  console.log('API Javascript corriendo en el puerto 3000');
});


