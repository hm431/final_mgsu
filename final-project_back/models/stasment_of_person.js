const mongoose = require('mongoose');

// const { ObjectId } = mongoose.Schema.Types;
// напишите код здесь
const stasment_of_person = new mongoose.Schema({
  id: { 
    type: String,
    required: true,
    unique: true,
  },
    worker_name: { // Название ГЭСН.
    type: Date,
    required: true,
    unique: true,
  },
  worker_discharge: { //TODO привязку хочу  
    type: String,
    required: true,
    unique: true,
  },
 
  worker_number: { //TODO привязку хочу 
    type: String,
    required: true,
    unique: true,
  },

});

module.exports = mongoose.model('weekly_daily', weekly_daily);
