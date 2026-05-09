require('dotenv').config();
const mongoose = require('mongoose');
const Record = require('../models/Record');

const officialRecords = [
  {
    titulo: 'El edificio más alto del mundo',
    descripcion: 'Tomando como poseedor representativo al arquitecto Adrian Smith, principal figura del diseño del Burj Khalifa.',
    poseedor: 'Adrian Smith',
    anio: 2010,
    imagenUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    isOficial: true,
  },
  {
    titulo: 'La montaña más alta del mundo',
    descripcion: 'Tomando como poseedor representativo al primer montañista confirmado en la cumbre del Everest.',
    poseedor: 'Edmund Hillary',
    anio: 1953,
    imagenUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    isOficial: true,
  },
  {
    titulo: 'El puente más largo sobre agua',
    descripcion: 'Registro de gran infraestructura ferroviaria moderna en China.',
    poseedor: 'Wang Yong (ingeniería ferroviaria china, representativo)',
    anio: 2011,
    imagenUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80',
    isOficial: true,
  },
  {
    titulo: 'La rueda de observación más alta',
    descripcion: 'Récord de infraestructura turística moderna en Dubái.',
    poseedor: 'Mounir Haidar (CEO de proyecto, representativo)',
    anio: 2021,
    imagenUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    isOficial: true,
  },
  {
    titulo: 'El avión de pasajeros más grande',
    descripcion: 'Contribución de liderazgo técnico en el programa Airbus A380.',
    poseedor: 'Tom Enders',
    anio: 2007,
    imagenUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    isOficial: true,
  },
  {
    titulo: 'El reloj más preciso del mundo (óptico)',
    descripcion: 'Avances en relojería atómica óptica para metrología de ultra precisión.',
    poseedor: 'Jun Ye',
    anio: 2020,
    imagenUrl: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=800&q=80',
    isOficial: true,
  },
  {
    titulo: 'Más medallas olímpicas',
    descripcion: 'Michael Phelps es el atleta olímpico con más medallas de todos los tiempos.',
    poseedor: 'Michael Phelps',
    anio: 2016,
    imagenUrl: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&w=800&q=80',
    isOficial: true,
  },
];

const seedOfficialRecords = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    for (const record of officialRecords) {
      await Record.updateOne(
        { titulo: record.titulo, poseedor: record.poseedor },
        { $set: record },
        { upsert: true }
      );
    }

    console.log('Récords oficiales insertados/actualizados correctamente.');
    process.exit(0);
  } catch (error) {
    console.error('Error insertando récords oficiales:', error.message);
    process.exit(1);
  }
};

seedOfficialRecords();
