var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

app.post('/clubreq', function(req, res, next){
   // req.body object has your form values
   console.log(req.body);
});


// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.listen(3030);
console.log('Server is listening on port 3030');

