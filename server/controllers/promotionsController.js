
'use strict';
var promo = require('../dataLayout/promotionData');

module.exports = {
	
	getAll: function (req , res){

		promo.getAll().exec(function(err , collection){
			if (err) {
				console.log('Fatal error in promotionsController  : ' + err );
			}

			if(collection.length === 0){
				console.log('Can not find promotions in mongodb');
			}
			else{

			res.send(collection);
			}
			
		});
	},

	getById: function(req , res ){

		var findedPromId = req.params.id;

		promo.findById(findedPromId).exec(function(err){

			if(err){
				console.log('Can not find promotion wiht this id ! Error ' + err );
			}

		});

	},
	
	addNew: function(req , res){
		
		var addNewPromotion = req.body;

		promo.createNew(addNewPromotion , function(err){

			if (err) {
				console.log('Promotion is not added error: '  + err);
			}
			else{

				console.log('Promotion is added!');

				res.send({isAdded:true});
			}
		});

	},


	update: function(req , res){
		
		var updatePromotion = req.body,
			updatePromotionId = req.params.id;

		var updatedfilds = {

			productName: updatePromotion.productName,
			price: updatePromotion.productName 

		};

		promo.update(updatePromotionId , updatedfilds , function(err){

			if (err) {

				console.log('Can not update this promotion ! Error: ' + err );
			}

		});

	},

	remove: function(req , res ){

		var deletedPromId = req.params.id;

		promo.remove(deletedPromId , function(err){

			if(err){
				console.log('Can not remove this promotion!Error ' + err );
			}

		});

	}



};