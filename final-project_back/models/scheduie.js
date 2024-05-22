const mongoose = require('mongoose');

// const { ObjectId } = mongoose.Schema.Types;
// напишите код здесь
const scheduie = new mongoose.Schema({
  id: { 
    type: String,
    required: true,
    unique: true,
  },
  number_work_day: { // Название ГЭСН.
    type: String,
    required: true,
    unique: true,
  },
  is_working: { // Единицы измерения ГЭСН.
    type: Boolean,
    required: true,
    unique: true,
  },
  
});

module.exports = mongoose.model('scheduie', scheduie);
