const mongoose = require('mongoose');

const Schema = mongoose.Schema;

module.exports = watchListSchema = new Schema({
  stock: String,
  price: Number
});

