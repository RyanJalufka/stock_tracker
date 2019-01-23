const mongoose = require('mongoose');

var watchListItem = new mongoose.Schema({
  stock: String,
  price: Number
 }, {collection: 'watchList'});

 module.exports = watchListItem;