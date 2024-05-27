const mongoose = require('mongoose');

// const { ObjectId } = mongoose.Schema.Types;
// напишите код здесь
const scheduie_plan = new mongoose.Schema({
  id: { 
    type: String,
    required: true,
    unique: true,
  },
  object_id: { //  сделать связку 
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
  cost_of_construction: { // Единицы измерения ГЭСН.
    type: Number,
    required: true,
    unique: true,
  },
  labor_costs_id: { //  сделать привязку 
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
schedule_id: { // сделать привязку 
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
},

  instalation_id: { //  сделать привязку 
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
});

module.exports = mongoose.model('scheduie_plan', scheduie_plan);
