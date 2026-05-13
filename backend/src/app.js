const express = require('express');
const cors = require('cors');
const recordRoutes = require('./routes/recordRoutes');
const authRoutes = require('./routes/authRoutes');
const contactRoutes = require('./routes/contactRoutes');
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

app.use('/api/auth', authRoutes);
app.use('/api/records', recordRoutes);
app.use('/api/contact', contactRoutes);

app.use('/auth', authRoutes);
app.use('/records', recordRoutes);
app.use('/contact', contactRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada: ' + req.originalUrl });
});

app.use(errorHandler);

module.exports = app;