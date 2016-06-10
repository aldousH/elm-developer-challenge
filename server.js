/**
 * Created by alexsewell on 6/3/16.
 */

var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('images'));
app.use(express.static('css'));
app.use(express.static('fonts'));
app.use(express.static('js'));
app.use(express.static('vendor'));

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(1337);
console.log('1337 is the magic port!');