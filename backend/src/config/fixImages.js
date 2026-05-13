require('dotenv').config();
const mongoose = require('mongoose');
const Record = require('../models/Record');

const fixImages = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // 1. Fix Magnus Carlsen record using regex (title has corrupted accent char in DB)
    const carlsen = await Record.findOne({ titulo: /ajedrez/i });
    if (carlsen) {
      carlsen.imagenUrl = 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80';
      await carlsen.save();
      console.log(`[URL fix] Magnus Carlsen record updated`);
    } else {
      console.log('[URL fix] Magnus Carlsen record not found');
    }

    // 2. Remove duplicate records — deduplicate by titulo only, keep oldest
    const allRecords = await Record.find().sort({ createdAt: 1 });
    const seen = new Map(); // titulo → _id of first occurrence
    const toDelete = [];

    for (const record of allRecords) {
      const key = record.titulo.trim().toLowerCase();
      if (seen.has(key)) {
        toDelete.push(record._id);
      } else {
        seen.set(key, record._id);
      }
    }

    if (toDelete.length > 0) {
      await Record.deleteMany({ _id: { $in: toDelete } });
      console.log(`[Dedup] Deleted ${toDelete.length} duplicate record(s)`);
    } else {
      console.log('[Dedup] No duplicates found');
    }

    const remaining = await Record.countDocuments();
    console.log(`\nDone! ${remaining} records in DB.`);
    process.exit(0);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
};

fixImages();
