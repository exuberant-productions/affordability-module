var express = require('express');

var db = require('../db/index.js');

var app = express();

app.use(express.json());

app.set('port', 3001);

app.use(express.static(__dirname + '/../public'));

app.get('/homeDetails/:homeId', (req, res) => {
	db.getHome(req.params.homeId, (err, data) => {
		if (err) {
			console.error('error getting data from database');
		} else {
			res.send(data);
		}
	});
});

app.get('/similarHomes/:homeId', (req, res) => {
	// do db stuff
	res.send('success /similarHomes/' + req.params.homeId);
});

app.get('/affordability/:homeId', (req, res) => {
	// do db stuff
	res.send('success /affordability/' + req.params.homeId);
});

module.exports = app;