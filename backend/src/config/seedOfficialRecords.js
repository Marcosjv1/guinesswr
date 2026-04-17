require('dotenv').config();
const mongoose = require('mongoose');
const Record = require('../models/Record');

const officialRecords = [
  {
    titulo: 'El hombre más alto del mundo',
    descripcion: 'Sultan Kösen (Turquía) fue reconocido oficialmente por Guinness World Records con una altura de 251 cm.',
    poseedor: 'Sultan Kösen',
    anio: 2011,
    imagenUrl: 'https://www.shutterstock.com/editorial/image-editorial/M6TcA9xdMbT8I4ybODQ2MQ==/sultan-k%C3%B6sen-london-england-britain-440nw-1005419b.jpg',
    isOficial: true,
  },
  {
    titulo: 'La mujer más baja del mundo',
    descripcion: 'Jyoti Amge (India) fue reconocida oficialmente por Guinness World Records con una estatura de 62.8 cm.',
    poseedor: 'Jyoti Amge',
    anio: 2011,
    imagenUrl: 'https://store.guinnessworldrecords.com/cdn/shop/files/RH_category_Image-600x600_9c77aab6-06e9-41c9-ab85-db1c96cef95c.webp?v=1738467822&width=1200',
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
