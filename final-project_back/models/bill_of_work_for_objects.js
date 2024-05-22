const mongoose = require('mongoose');

// const { ObjectId } = mongoose.Schema.Types;
// напишите код здесь
const bill_of_work_for_object = new mongoose.Schema({
  id: { 
    type: String,
    required: true,
    unique: true,
  },
  name_work: { // Название ГЭСН.
    type: String,
    required: true,
    unique: true,
  },
  units: { // Единицы измерения ГЭСН.
    type: String,
    required: true,
    unique: true,
  },
  duration_of_work: { // Единицы измерения ГЭСН.
    type: String,
    required: true,
    unique: true,
  },

  cmr: { // Единицы измерения ГЭСН.
    type: String,
    required: true,
    unique: true,
  },

  bill_time: { // Единицы измерения ГЭСН.
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model('bill_of_work_for_object', bill_of_work_for_object);
