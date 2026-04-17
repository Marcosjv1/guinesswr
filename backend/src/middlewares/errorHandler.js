const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  if (err.name === 'CastError') {
    return res.status(400).json({ message: 'ID inválido' });
  }

  if (err.name === 'ValidationError') {
    return res.status(400).json({
      message: 'Error de validación',
      errors: Object.values(err.errors).map((e) => e.message),
    });
  }

  res.status(500).json({
    message: 'Error interno del servidor',
  });
};

module.exports = errorHandler;
