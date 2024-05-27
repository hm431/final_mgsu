const mongoose = require('mongoose');

// const { ObjectId } = mongoose.Schema.Types;
// напишите код здесь
const bildings = new mongoose.Schema({
  id: { 
    type: String,
    required: true,
    unique: true,
  },
  name: { 
    type: String,
    required: true,
    unique: true,
  },
  summory: { 
    type: String,
    required: true,
    unique: true,
  },
 
});

module.exports = mongoose.model('bildings', bildings);
