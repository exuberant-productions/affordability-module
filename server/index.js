var express = require('express');

var app = express();

app.set('port', 3001);

app.use(express.static(__dirname + '/../public'));

app.listen(app.get('port'));