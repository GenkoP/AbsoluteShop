var mongoose = require('mongoose');

module.exports.init = function(){

	var taskSchema = mongoose.Schema({

		description: String,
		priority: String,
		dateOn: Date,
		dateToEnd: Date,

	});

	var TaskModel = mongoose.model('Tasks' , taskSchema);
};