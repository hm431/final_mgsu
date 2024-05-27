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

  machine_id: { //  Сделать привзку
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
  materials_id: { // сделать привызку
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  }

});

module.exports = mongoose.model('ist_of_reqiremts', list_of_reqiremts);
