const mongoose = require('mongoose');

// const { ObjectId } = mongoose.Schema.Types;
// напишите код здесь
const stasment_of_person = new mongoose.Schema({
  id: { 
    type: String,
    required: true,
    unique: true,
  },
    worker_name: { 
    type: String,
    required: true,
    unique: true,
  },
  worker_discharge: {   
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
 
  worker_number: {  
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
});

module.exports = mongoose.model('stasment_of_person', stasment_of_person);
