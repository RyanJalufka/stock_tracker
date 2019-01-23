const express = require('express');
const mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser');
const app = express();
const URL = 'mongodb://ryanjalufka:kijut123@ds013848.mlab.com:13848/stock_tracker';
const watchListSchema = require('./config/schemas');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.Promise = global.Promise;
mongoose.connect(URL);


//  var watchListSchema = new mongoose.Schema({
//   stock: String,
//   price: Number
//  }, {collection: 'watchList'});

// var User = mongoose.model("User", nameSchema);
var WatchListItem = mongoose.model("WatchList", watchListSchema);

app.get('/', function(req, res) {
  db.collection('watchList').find({}).toArray(function(err, docs) {
      if(err) { console.error(err) }
      res.send(JSON.stringify(docs))
  })
})


app.post('/addStock', (req, res) => {
  var myData = new WatchListItem(req.body);
  myData.save()
  .then(item => {
    res.send('item saved to database');
  })
  .catch(err => {
    res.status(404).send('unable to save to database...');
  });
});


app.delete('/deleteStock', (req, res, next) => {

  let stock = "FUCK";

  dbase.collection('watchList').deleteOne(stock, (err, result) => {
    if(err) {
      throw err;
    }

    res.send('stock, ', stock, ', deleted');
  });
});

app.listen(3000, () => console.log('Listening on port 3000!'));


