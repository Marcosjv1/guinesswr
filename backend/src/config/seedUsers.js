const User = require('../models/User');

const seedUsers = async () => {
  const existing = await User.findOne({ username: 'admin' });
  if (!existing) {
    await User.create({
      username: 'admin',
      password: 'admin123',
    });
    console.log('Usuario inicial creado: admin / admin123');
  }
};

module.exports = seedUsers;
