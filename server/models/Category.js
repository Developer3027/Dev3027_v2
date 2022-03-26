const { truncate }=require('fs/promises');
const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: truncate
    }
  }
);

module.exports = mongoose.model('Category', CategorySchema);
