var Images = require('mongoose').model('Image');

module.exports = {
	
	addNew: function(image , callback){
		Images.create(image , callback);
	},
	findById: function(id , fun){

		return Images.findOne({_id: id} , fun);

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