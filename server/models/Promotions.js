/* global require */

var mongoose = require('mongoose'),
	dataPromotions = require('../dataLayout/seedData/seedPromotions');

module.exports.init = function () {

	var promoSchema = mongoose.Schema({

		productName: {type:String , require:'{PATH} is required '},
		price: {type:Number , require:'{PATH} is required '},
		dateOn: Date,
		dateToEnd: Date,
		
	});


	var Promotion = mongoose.model('Promotion' ,promoSchema );


	// var query = {
	// 	$where: function(){
	// 		return new Date() < this.dateToEnd;
	// 	}
	// };


	// Promotion.find(query).exec(function(err , result){

	// 	console.log(result);

	// });

	dataPromotions.seedInitial(Promotion);
};