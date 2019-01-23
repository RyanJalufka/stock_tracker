const express = require('express');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId; 
const bodyParser= require('body-parser')
const axios = require('axios')
const app = express();
const watchListItem = require('./config/schemas');
const URL = 'mongodb://ryanjalufka:kijut123@ds013848.mlab.com:13848/stock_tracker';
var WatchListItem = mongoose.model("WatchList", watchListItem);
const Keys = require('./config/keys');
const helpers = require('./config/helpers');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.Promise = global.Promise;

MongoClient.connect(URL, { useNewUrlParser: true })
.then(client => {
  const db = client.db('stock_tracker');
  const collection = db.collection('watchList');
  app.locals.collection = collection;
  

app.get('/watchlist', (req, res) => {
  const collection = req.app.locals.collection;
  collection.find({}).toArray().then(response => 
    res.status(200).json(response)).catch(error => console.error(error));
  });


app.post('/addStock', (req, res) => {
  const collection = req.app.locals.collection
  var myData = new WatchListItem(req.body);
  collection.save(myData , function (err){
    if (err) return handleError(err);
  });

  res.status(200).send(myData);
});


app.delete('/deleteStock', (req, res) => {
  const collection = req.app.locals.collection;
  let id = req.body.id;
  console.log('deleting id', id);
  
  collection.deleteOne( { "_id" : ObjectId(id) } );

  res.send('stock deleted');
  });
  
  //---------------------------------------------------
  // Stock API resources

  app.post('/stockData', (req, res) => {

    let symbol = req.body.stock;
    axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${Keys.API_KEY}`)
    .then(response => {

      let stockData = helpers.filterData(response);

        console.log(stockData);
        res.send(stockData);
    })
    .catch(error => {
        console.log(error);
    });
  })

  app.listen(4000, () => console.info(`REST API running on port 4000`));
}).catch(error => console.error(error));