/* global require */

var User = require('mongoose').model('User');

module.exports = {

		getAll: function(){
			return User.find({});
		},

		create: function (user , callback){
			User.create(user , callback);
		},
		
		update: function (id , updatedFields , callback){
			User.update(id , updatedFields, callback);
		}
};