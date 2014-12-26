var Promotion = require('mongoose').model('Promotion'),
	dateTime = require('../config/dateTime');

module.exports = {


	getAll: function(query) {

		return Promotion.find(query);

	},

	findById: function(id) {

		return Promotion.findOne(id);
	},

	createNew: function(promotion, callback) {
		Promotion.create(promotion, callback);
	},


	update: function(id, updatedfilds, callback) {

		Promotion.update({
			_id: id
		}, updatedfilds, callback);
	},

	remove: function(id, callback) {

		Promotion.remove({
			_id: id
		}, callback);

	}

};