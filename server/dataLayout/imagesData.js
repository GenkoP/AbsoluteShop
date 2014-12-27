var Images = require('mongoose').model('Image');

module.exports = {
	
	addNew: function(image , callback){
		Images.create(image , callback);
	},
	findById: function(id , callback){

		return Images.findOne({_id: id} , callback);

	},

	getAll: function() {
		return Images.find({});
	},
	update: function(id, updateFild , callback){

		Images.update({_id: id}, updateFild , callback );

	},
	remove: function(id, callback){
		Images.remove({_id: id} , callback);
	}
};