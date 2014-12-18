var promo = require('../dataLayout/promotionData'),
	date  = require('../utilities/currentDate');

module.exports = {
	
	getAll: function (req , res){

		promo.getAll().exec(function(err , collection){
			if (err) {

				console.log('Fatal error in promotionsController  : ' + err );
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

		var currentDate = new Date(date.currentDate);
		
		var addNewPromotion = req.body;

		addNewPromotion.dateOn = currentDate;

		promo.createNew(addNewPromotion , function(err){

			if (err) {

				console.log('Promotion is not added error: '  + err);

				res.end();

			}
			else{

				console.log('Promotion is added!');

				res.send({isAdded:true});
				res.end();
			}
		});

	},


	update: function(req , res){
		
		console.log( 'Request body: ' +  req.body._id);
		console.log( 'Id is: ' + req.params);

		var updatePromotion = req.body,
			updatePromotionId = req.params.id;

		var updatedfilds = {

			productName: updatePromotion.productName,
			price: updatePromotion.price,

		};

		promo.update(req.body._id , updatedfilds , function(err){

			if (err) {

				console.log('Can not update this promotion ! Error: ' + err );
				res.send({isUpdated: false});
			}
			else{

				res.send({ isUpdated: true });
				res.end();
			}

		});

	},

	remove: function(req , res ){

		var deletedPromId = req.params.id;

		promo.remove(deletedPromId , function(err){

			if(err){

				console.log('Can not remove this promotion!Error ' + err );
				res.send({ isDeleted: false });
				res.end();

			}
			else{

				res.send({ isDeleted: true });
				res.end();

			}

		});

	}



};