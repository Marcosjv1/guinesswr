const jwt = require('jsonwebtoken');
const User = require('../models/User');

const generateToken = (user) => {
  return jwt.sign(
    { userId: user._id, username: user.username },
    process.env.JWT_SECRET || 'secret_jwt_key',
    { expiresIn: '2h' }
  );
};

const register = async (req, res, next) => {
  try {
    const username = req.body?.username?.trim();
    const password = req.body?.password?.trim();

    if (!username || !password) {
      return res.status(400).json({ message: 'Usuario y contraseña son obligatorios' });
    }

    if (username.length < 3) {
      return res.status(400).json({ message: 'El usuario debe tener al menos 3 caracteres' });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: 'La contraseña debe tener al menos 6 caracteres' });
    }

    const normalizedUsername = username.toLowerCase();
    const existingUser = await User.findOne({ username: normalizedUsername });
    if (existingUser) {
      return res.status(409).json({ message: 'El nombre de usuario ya existe' });
    }

    const newUser = await User.create({ username: normalizedUsername, password });
    const token = generateToken(newUser);

    res.status(201).json({ token, username: newUser.username });
  } catch (error) {
    console.error('Error en register:', error.message);
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const username = req.body?.username?.trim();
    const password = req.body?.password?.trim();

    if (!username || !password) {
      return res.status(400).json({ message: 'Usuario y contraseña son obligatorios' });
    }

    const user = await User.findOne({ username: username.toLowerCase() });
    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const token = generateToken(user);

    res.status(200).json({ token, username: user.username });
  } catch (error) {
    console.error('Error en login:', error.message);
    next(error);
  }
};

module.exports = {
  login,
  register,
};
