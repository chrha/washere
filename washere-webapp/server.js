const fetch = require("node-fetch");
var express = require('express');
var multiparty = require('multiparty');
//var bodyParser = require('body-parser')
var app = express();

//app.use(bodyParser.urlencoded({
//  extended: false
//}));

//app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
//  extended: true
//}));

app.use(express.urlencoded(({
  extended: true
})));
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
  console.log(req.body)
  var form = new multiparty.Form();
  form.parse(req, function(err, fields, files) {
    const data = {
      fields: fields
  };
  const customHeaders = {
    "Content-Type": "application/json",
}
console.log(JSON.stringify(data));
fetch(url, {
    method: "POST",
    headers: customHeaders,
    body: JSON.stringify(data),
})
    .then((response) => response.text())
    .then((data) => {
        console.log(data);
    });
  return res.redirect('/washere');

  });

});

app.get('/who', function(req, res) {
  const r = fetch('http://localhost:2000/message')
  .then((response) => response.text())
  .then((body) => {
    const mes = body;
    res.render('pages/washere', {mes:body})
  });
});


app.listen(3030);
console.log('Server is listening on port 3030');

