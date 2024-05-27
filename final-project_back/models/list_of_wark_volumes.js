const mongoose = require('mongoose');

// const { ObjectId } = mongoose.Schema.Types;
// напишите код здесь
const list_of_work_volumes = new mongoose.Schema({
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
  sees_id: { 
    type: String,
    required: true,
    unique: true,
  },
  determinatiom: { 
    type: String,
    required: true,
    unique: true,
  },

 
});

module.exports = mongoose.model('list_of_work_volumes', list_of_work_volumes);
