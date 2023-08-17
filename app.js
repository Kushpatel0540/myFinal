var express = require('express');
var bodyParser = require('body-parser');
var { MongoClient } = require('mongodb');
var app = express();

var port = process.env.PORT || 3080;
var dbURI = 'mongodb://localhost:27017/bookstore'; 

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let db;

MongoClient.connect(dbURI, { useUnifiedTopology: true })
  .then(client => {
    db = client.db('bookstore');
    console.log('Connected to database');
  })
  .catch(error => console.error(error));

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});


app.get('/', (req, res) => {
    res.render('order-form');
  });
  
  app.post('/place-order', (req, res) => {
    var { name, studentId, items } = req.body;
  
    
  
    res.render('order-confirmation', { orderDetails });
  });
  
  app.get('/view-orders', (req, res) => {
    
    res.render('view-orders', { orders });
  });
  