var mongoose = require('mongoose');

module.exports.init = function () {

	var imageSchema = mongoose.Schema({

		url: {type:String , unique: true},
		isForHomePageImage: Boolean,

	});

	var Images = mongoose.model('Image' , imageSchema);
 
};