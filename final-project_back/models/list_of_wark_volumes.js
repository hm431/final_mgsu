const mongoose = require('mongoose');

// const { ObjectId } = mongoose.Schema.Types;
// напишите код здесь
const list_of_work_volumes = new mongoose.Schema({
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
  sees_id: { // Единицы измерения ГЭСН. TODO: Посмотреть на то, как работает связка
    type: String,
    required: true,
    unique: true,
  },
  determinatiom: { // Единицы измерения ГЭСН. TODO: Посмотреть на то, как работает связка
    type: String,
    required: true,
    unique: true,
  },
  
 
});

module.exports = mongoose.model('list_of_work_volumes', list_of_work_volumes);
