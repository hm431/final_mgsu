const mongoose = require('mongoose');

// const { ObjectId } = mongoose.Schema.Types;
// напишите код здесь
const weekly_daily = new mongoose.Schema({
  id: { 
    type: String,
    required: true,
    unique: true,
  },
    start_date_of_work: { // Название ГЭСН.
    type: Date,
    required: true,
    unique: true,
  },
  brigade_id: { // TODO сделать связку.
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
 
});

module.exports = mongoose.model('weekly_daily', weekly_daily);
