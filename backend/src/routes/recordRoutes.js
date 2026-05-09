const express = require('express');
const {
  getAllRecords,
  getRecordById,
  createRecord,
  updateRecord,
  deleteRecord,
} = require('../controllers/recordController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', getAllRecords);
router.get('/:id', getRecordById);
router.post('/', authMiddleware, createRecord);
router.put('/:id', authMiddleware, updateRecord);
router.delete('/:id', authMiddleware, deleteRecord);

module.exports = router;
