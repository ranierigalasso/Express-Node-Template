const mongoose = require('mongoose');

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;

const testSchema = new Schema({
  name: String,
  price: String,
  imageURL: String
});

const Test = mongoose.model('Test', testSchema);

module.exports = Test;
