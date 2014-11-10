/* global require */

var mongoose = require('mongoose'),
	seedPromotions = require('../data/seedPromotions');

module.exports.init = function () {

	var promoSchema = mongoose.Schema({
		productName: String,
		price: String 
	});

	var Promotion = mongoose.model('Promotion' ,promoSchema );

	seedPromotions.seedDataPromotions(Promotion);
};