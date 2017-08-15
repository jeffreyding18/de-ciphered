// Require express and create an instance of it
var express = require('express');
var app = express();
var path = require('path');
// on the request to root (localhost:3000/)

app.use(express.static('public'));

app.listen(8080, function () {
    console.log('Listening on port 8080');
});


app.post('/js/findVocab.js', function(req, res){
    var bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded());
});
