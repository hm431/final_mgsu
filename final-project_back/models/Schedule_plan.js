const mongoose = require('mongoose');

// const { ObjectId } = mongoose.Schema.Types;
// напишите код здесь
const scheduie = new mongoose.Schema({
  id: { 
    type: String,
    required: true,
    unique: true,
  },
  object_id: { // TODO сделать связку 
    type: String,
    required: true,
    unique: true,
  },
  cost_of_construction: { // Единицы измерения ГЭСН.
    type: Number,
    required: true,
    unique: true,
  },
  labor_costs_id: { // TODO сделать привязку 
    type: Number,
    required: true,
    unique: true,
  },
schedule_id: { //TODO сделать привязку 
    type: Number,
    required: true,
    unique: true,
},

  instalation_id: { // TODO сделать привязку 
    type: Number,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model('scheduie', scheduie);
