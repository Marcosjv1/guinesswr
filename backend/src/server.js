require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');
const seedUsers = require('./config/seedUsers');

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();
  await seedUsers();

  app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en puerto ${PORT}`);
  });
};

startServer();
