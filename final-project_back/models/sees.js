const mongoose = require('mongoose');

// const { ObjectId } = mongoose.Schema.Types;
// напишите код здесь
const sees = new mongoose.Schema({
  code: { //  код ГЭСН.
    type: String,
    required: true,
    unique: true,
  },
  name: { // Название ГЭСН.
    type: String,
    required: true,
    unique: true,
  },
  units: { // Единицы измерения ГЭСН.
    type: String,
    required: true,
    unique: true,
  },
  name_machine: { // Наименование машины, которая используется в ГЭСН.
    type: String,
    required: true,
    unique: true,
  },
  number_machine: { // Кодичество машин используемое в ГЭСН.
    type: String,
    required: true,
    unique: true,
  },
 
});

module.exports = mongoose.model('sees', sees);
