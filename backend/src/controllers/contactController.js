const Contact = require('../models/Contact');

// POST /api/contact — guardar mensaje de contacto
const createContact = async (req, res, next) => {
  try {
    const { nombre, email, asunto, mensaje } = req.body;

    if (!nombre || !email || !asunto || !mensaje) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    const contact = await Contact.create({ nombre, email, asunto, mensaje });
    res.status(201).json({ message: 'Mensaje recibido correctamente.', contact });
  } catch (error) {
    next(error);
  }
};

// GET /api/contact — obtener todos los mensajes
const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

module.exports = { createContact, getAllContacts };
