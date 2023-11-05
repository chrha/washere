var express = require('express');
const { get } = require('http');
const https = require("https");
var fs = require('fs')
path = require('path')
var multiparty = require('multiparty');

var app = express();
var port = 2000;

app.use(express.urlencoded(({
    extended: true
  })));
// set the view engine to ejs

// use res.render to load up an ejs view file

// index page

function getM(who){
    let data = '';
    filePath = path.join(__dirname, '/data/db.txt');
    const allFileContents = fs.readFileSync(filePath, 'utf-8');
    allFileContents.split(/\r?\n/).forEach(line =>  {
        if (line.split(' : ')[0] == who){
            data = line;
        }
    });
    return data;
}

app.post('/message', function(req, res) {
    var form = new multiparty.Form();
    form.parse(req, function(err, fields, files) {
        const m =  getM(fields.who);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(m);
        res.end()
        res.send()
        return
    });
});

app.post('/name', function(req, res){
    var fs = require('fs');
    path = require('path');
    filePath = path.join(__dirname, '/data/db.txt');
    var form = new multiparty.Form();
    form.parse(req, function(err, fields, files) {
        const n = fields.name+' : '+fields.message+'\n';
        const m = fields.message;
    
    fs.writeFile(filePath, n , {flag: 'a+'}, (err) => {
        if (!err) {
            
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end();
            res.send();
        } else {
            console.log(err);
        }
    });
});
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })