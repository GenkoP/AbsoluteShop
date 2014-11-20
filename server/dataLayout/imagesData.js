var Images = require('mongoose').model('Image');

module.exports = {
	
	addNew: function(image , callback){
		Images.create(image , callback);
	},

	getAll: function() {
		return Images.find({});
	},
};