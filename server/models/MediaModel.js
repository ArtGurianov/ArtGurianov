const mongoose = require('mongoose');

const MediaSchema = mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  filename: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  }

}, {collection: 'media'});

const MediaModel = module.exports = mongoose.model('MediaModel', MediaSchema);