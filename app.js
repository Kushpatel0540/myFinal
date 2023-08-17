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
  
    
    const subTotal = 0; 
    const tax = 0;     
    const total = 0;    
  
    const orderDetails = {
      name,
      studentId,
      items,
      subTotal,
      tax,
      total
    };
  
    
  
    res.render('order-confirmation', { orderDetails }); 
  });
  