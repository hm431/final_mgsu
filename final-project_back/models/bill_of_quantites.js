const mongoose = require('mongoose');

// const { ObjectId } = mongoose.Schema.Types;
// напишите код здесь
const brigade = new mongoose.Schema({
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
  scope_of_work_for: { // Единицы измерения ГЭСН.
    type: String,
    required: true,
    unique: true,
  },

  number_of_pices: { // Единицы измерения ГЭСН.
    type: String,
    required: true,
    unique: true,
  },

  name_object: { // Единицы измерения ГЭСН.
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model('brigade', brigade);
