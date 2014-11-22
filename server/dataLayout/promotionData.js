
var Promotion = require('mongoose').model('Promotion');

module.exports = {


	getAll: function(){
		
		return Promotion.find({});

	},

	findById: function(id){

		return	Promotion.findOne(id);
	},

	createNew: function(promotion , callback){

	Promotion.create(promotion , callback);
	},


	update: function(id , updatedfilds , callback){

		Promotion.update({ _id: id } , updatedfilds , callback);
	},

	remove: function(id , callback){

		Promotion.remove({ _id: id } , callback);

	}

};