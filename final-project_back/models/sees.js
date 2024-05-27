const mongoose = require('mongoose');

// const { ObjectId } = mongoose.Schema.Types;
// напишите код здесь
const sees = new mongoose.Schema({
  code: { 
    type: String,
    required: true,
    unique: true,
  },
  name: { 
    type: String,
    required: true,
    unique: true,
  },
  units: { 
    type: String,
    required: true,
    unique: true,
  },
  name_machine: { 
    type: String,
    required: true,
    unique: true,
  },
  number_machine: { 
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model('sees', sees);
