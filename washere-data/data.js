var express = require('express');
const https = require("https");

var app = express();
var port = 2000;

// set the view engine to ejs

// use res.render to load up an ejs view file

// index page
app.get('/message', function(req, res) {
    var fs = require('fs'),
    path = require('path'),    
    filePath = path.join(__dirname, '../data/db.txt');

fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err) {
        console.log('received data: ' + data);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(data);
        res.end()
        res.send()
        return
    } else {
        console.log(err);
    }
});
});

app.post('/name', function(req, res){
   var fs = require('fs');
    path = require('path')    
    filePath = path.join(__dirname, '../data/db,txt');

    fs.writeFile(filePath,'req' , {flag: 'a+'}, (err) => {
        if (!err) {
            console.log('received data: ' + JSON.stringify(req.body));
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end();
            res.send();
        } else {
            console.log(err);
        }
});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })