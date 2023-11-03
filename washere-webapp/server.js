const fetch = require("node-fetch");
var express = require('express');
const FormData = require('form-data');

var app = express();


app.use(express.urlencoded(({
  extended: true
})));
app.use(express.json());
//app.use(bodyParser.json());
// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});


// washere page
app.get('/washere', function(req, res) {
const mes = '';
res.render('pages/washere',{mes:''})
    
});

//washere page
app.post('/youare', function(req, res) {
  const url = 'http://localhost:2000/name'
  const form = new FormData();
  form.append('name', req.body.name);
  form.append('message', req.body.message);

fetch(url, {method: 'POST', body: form })
  return res.redirect('/washere');

});

app.post('/who', function(req, res) {
  const form = new FormData();
  form.append('who', req.body.who);
  const r = fetch('http://localhost:2000/message',{method: 'POST', body: form })
  .then((response) => response.text())
  .then((body) => {
    const mes = body;
    res.render('pages/washere', {mes:body})
  });
});


app.listen(3030);
console.log('Server is listening on port 3030');

