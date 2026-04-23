const express = require('express');
const cors = require('cors');
const recordRoutes = require('./routes/recordRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(
  cors({
    origin: '*',
  })
);

app.use(express.json());

// Ruta de salud que ya tenías
app.get('/api/health', (req, res) => {
  res.status(200).json({
    ok: true,
    message: 'Backend funcionando correctamente',
  });
});

// AGREGA ESTO AQUÍ PARA QUE LA RAÍZ FUNCIONE
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Guinness World Records');
});

app.use('/api/records', recordRoutes);

app.use(errorHandler);

module.exports = app;