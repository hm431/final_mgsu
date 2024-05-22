const mongoose = require('mongoose');

// const { ObjectId } = mongoose.Schema.Types;
// напишите код здесь
const machines = new mongoose.Schema({
  id: { 
    type: String,
    required: true,
    unique: true,
  },
  name: { // Название ГЭСН.
    type: String,
    required: true,
    unique: true,
  },
  load: { // Единицы измерения ГЭСН.
    type: String,
    required: true,
    unique: true,
  },
  hook: { // Единицы измерения ГЭСН.
    type: String,
    required: true,
    unique: true,
  },
  reach: { // Единицы измерения ГЭСН.
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model('machines', machines);
