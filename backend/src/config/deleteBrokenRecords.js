require('dotenv').config();
const mongoose = require('mongoose');
const Record = require('../models/Record');

// Titles of official records with broken images (Wikipedia Commons hotlink blocked)
const brokenTitles = [
  'El hombre más alto del mundo',
  'La mujer más baja del mundo',
  'La persona más longeva documentada',
  'El maratón más rápido (masculino)',
  '100 metros más rápidos (masculino)',
  '100 metros más rápidos (femenino)',
  'Salto de pértiga más alto (masculino)',
  'Mayor cantidad de títulos de Grand Slam',
  'Nado 100m libre más rápido',
  'El transatlántico más grande',
  'Mayor profundidad alcanzada en inmersión tripulada',
  'Mayor velocidad en Formula 1 (promedio de carrera histórica)',
  'Partido de fútbol con mayor asistencia',
  'Primer humano en la Luna',
];

const deleteBrokenRecords = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    const result = await Record.deleteMany({
      titulo: { $in: brokenTitles },
      isOficial: true,
    });

    console.log(`${result.deletedCount} récords con imágenes rotas eliminados.`);
    process.exit(0);
  } catch (error) {
    console.error('Error eliminando récords:', error.message);
    process.exit(1);
  }
};

deleteBrokenRecords();
