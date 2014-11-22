var mongoose = require('mongoose');

module.exports.init = function(){

	var taskSchema = mongoose.Schema({

		taskDescript: String,
		priority: String,
		dateOnCreate: Date,
		dateToFinish: Date,

	});

	var TaskModel = mongoose.model('Tasks' , taskSchema);
};