const mongoose = require('mongoose');

// const { ObjectId } = mongoose.Schema.Types;
// напишите код здесь
const brigade = new mongoose.Schema({
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
  discharge: { 
    type: String,
    required: true,
    unique: true,
  },
 
});

module.exports = mongoose.model('brigade', brigade);
