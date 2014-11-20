
var Promotion = require('mongoose').model('Promotion');

module.exports = {

	createNew: function(promotion , callback){

		Promotion.create(promotion , callback);
	},

	getAll: function(){
		
		return Promotion.find({});

	},
};