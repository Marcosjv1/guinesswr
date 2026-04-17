const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: [true, 'El título es obligatorio'],
      trim: true,
    },
    descripcion: {
      type: String,
      required: [true, 'La descripción es obligatoria'],
      trim: true,
    },
    poseedor: {
      type: String,
      required: [true, 'El poseedor es obligatorio'],
      trim: true,
    },
    anio: {
      type: Number,
      required: [true, 'El año es obligatorio'],
      min: [1, 'El año debe ser mayor a 0'],
    },
    imagenUrl: {
      type: String,
      required: [true, 'La URL de imagen es obligatoria'],
      trim: true,
    },
    isOficial: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Record', recordSchema);
