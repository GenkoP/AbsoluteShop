var mongoose = require('mongoose');

module.exports.init = function () {

	var imageSchema = mongoose.Schema({

		url: {type:String , unique: true},
		dateToAdd:{type: Date , dafaut:Date.now},

	});

	var Images = mongoose.model('Image' , imageSchema);
 
};