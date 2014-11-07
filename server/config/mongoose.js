var mongoose = require('mongoose'),
	User = require('../models/Users');
	//seedUser = require('../data/seedDataUsers');

module.exports = function(config) {
	mongoose.connect(config.db);

	var db = mongoose.connection;

	db.once('open', function(err) {
		if (err) {
			console.log('Database can`t be open: ' + err);
			return;
		}

		console.log('Database up in runing...');
		
	});
	

	db.on('error', function(err) {
		console.log('Database error: ' + err);
	});
	
	User.init();

	
	
};
