var Images = require('mongoose').model('Image');

module.exports = {
	
	addNew: function(image , callback){
		Images.create(image , callback);
	},

	getAll: function() {
		return Images.find({});
	},
	update: function(id, updateFild , callback){

		Images.update({_id: id}, updateFild , callback );

	}
};