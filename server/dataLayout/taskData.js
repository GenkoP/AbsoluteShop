var Tasks = require('mongoose').model('Tasks');

module.exports = {

	find: function(query){

		return Tasks.find(query);
	},

	getById:function(id){

		return Tasks.findOne(id);
	},

	create: function(task , callback){

		Tasks.create(task , callback);
	},

	update: function(id , updateFilds , callback){

		Tasks.update(id , updateFilds , callback);

	},

	remove: function(id , callback){

		Tasks.remove(id , callback);
		
	}

};