/* global require */

var mongoose = require('mongoose'),
	dataPromotions = require('../dataLayout/seedData/seedPromotions');

module.exports.init = function () {

	var promoSchema = mongoose.Schema({
		productName: String,
		price: String 
	});

	var Promotion = mongoose.model('Promotion' ,promoSchema );

	dataPromotions.seedInitial(Promotion);
};