const Record = require('../models/Record');

const getAllRecords = async (req, res, next) => {
  try {
    const records = await Record.find().sort({ createdAt: -1 });
    res.status(200).json(records);
  } catch (error) {
    next(error);
  }
};

const getRecordById = async (req, res, next) => {
  try {
    const record = await Record.findById(req.params.id);
    if (!record) {
      return res.status(404).json({ message: 'Récord no encontrado' });
    }
    res.status(200).json(record);
  } catch (error) {
    next(error);
  }
};

const createRecord = async (req, res, next) => {
  try {
    const newRecord = await Record.create(req.body);
    res.status(201).json(newRecord);
  } catch (error) {
    next(error);
  }
};

const updateRecord = async (req, res, next) => {
  try {
    const updatedRecord = await Record.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedRecord) {
      return res.status(404).json({ message: 'Récord no encontrado' });
    }

    res.status(200).json(updatedRecord);
  } catch (error) {
    next(error);
  }
};

const deleteRecord = async (req, res, next) => {
  try {
    const deletedRecord = await Record.findByIdAndDelete(req.params.id);

    if (!deletedRecord) {
      return res.status(404).json({ message: 'Récord no encontrado' });
    }

    res.status(200).json({ message: 'Récord eliminado correctamente' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllRecords,
  getRecordById,
  createRecord,
  updateRecord,
  deleteRecord,
};
