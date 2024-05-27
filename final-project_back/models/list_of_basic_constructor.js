const mongoose = require('mongoose');

// const { ObjectId } = mongoose.Schema.Types;
// напишите код здесь
const list_of_basic_constructior = new mongoose.Schema({
  id: { 
    type: String,
    required: true,
    unique: true,
  },
  constuction_materials: { 
    type: String,
    required: true,
    unique: true,
  },
  unit_materials: { 
    type: String,
    required: true,
    unique: true,
  },
  consumption_of_buildings: {
    type: String,
    required: true,
    unique: true,
  },

  quantity_materials: { 
    type: String,
    required: true,
    unique: true,
  },


});

module.exports = mongoose.model('list_of_basic_constructior', list_of_basic_constructior);
