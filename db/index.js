const mysql = require('mysql');

const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getHome = (homeId, callback) => {
	// send query, process data, callback with data
	connection.query('SELECT * FROM home WHERE id = ' + homeId, (err, data) => {
		if (err) {
			callback(err);
		} else {
			callback(null, data);
		}
	});
}

module.exports = {
	getHome
}