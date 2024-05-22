const mongoose = require('mongoose');

// const { ObjectId } = mongoose.Schema.Types;
// напишите код здесь
const list_of_reqiremts = new mongoose.Schema({
  id: { 
    type: String,
    required: true,
    unique: true,
  },
  tipe_of_installation_work: { // Название ГЭСН.
    type: String,
    required: true,
    unique: true,
  },
  obect_name: { // Единицы измерения ГЭСН.
    type: String,
    required: true,
    unique: true,
  },
  start_date_of_work: { // Единицы измерения ГЭСН.
    type: String,
    required: true,
    unique: true,
  },

  work_completion: { // Единицы измерения ГЭСН.
    type: String,
    required: true,
    unique: true,
  },

  machine_id: { // TODO Сделать привзку
    type: String,
    required: true,
    unique: true,
  },
  materials_id: { //TODO сделать привызку
    type: String,
    required: true,
    unique: true,
  }

});

module.exports = mongoose.model('list_of_basic_constructior', list_of_basic_constructior);
