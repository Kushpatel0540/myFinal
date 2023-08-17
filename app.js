var express = require('express');
var bodyParser = require('body-parser');
var { MongoClient } = require('mongodb');
var app = express();

var port = process.env.PORT || 3031;
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
    const { name, studentId, items } = req.body;
  
    // Calculate order details (subTotal, tax, total)
    const subTotal = 0; // Calculate the subTotal
    const tax = 0;     // Calculate the tax
    const total = 0;    // Calculate the total
  
    const orderDetails = {
      name,
      studentId,
      items,
      subTotal,
      tax,
      total
    };
  
    // Insert the order into the database
    // ...
  
    res.render('order-confirmation', { orderDetails }); // Pass orderDetails
  });
  