var mongoose = require('mongoose'),
	User = require('../models/Users'),
	Images = require('../models/Images') ,
	Promotion = require('../models/Promotions'),
	CompanyInfo = require('../models/CompanyInfo'),
	Task = require('../models/Tasks');

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
	
	// Initialize mongoose models

	User.init();

	Promotion.init();

	Images.init();
	
	CompanyInfo.init();

	Task.init();
};
