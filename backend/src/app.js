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

app.get('/api/health', (req, res) => {
  res.status(200).json({
    ok: true,
    message: 'Backend funcionando correctamente',
  });
});

app.use('/api/records', recordRoutes);

app.use(errorHandler);

module.exports = app;
