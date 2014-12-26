var promo = require('../dataLayout/promotionData'),
	dateTime = require('../config/dateTime');




module.exports = {
	
	getAll: function (req , res){

		promo.getAll({}).exec(function(err , collection){
			if (err) {

				console.log('Fatal error in promotionsController  : ' + err );
			}
			else{

				res.send(collection);
			}
			
		});
	},

	active: function(req, res, next) {

		// Query object to find all promotion who is active
			var queryWhoIsActive = {

			// Function(IIFE) who runnitng in mongodb server 
				$where: function() {

					var today = (function() {

						var newDate = new Date(),
							day = newDate.getDate(),
							month = newDate.getMonth(),
							year = newDate.getFullYear();
						return new Date(year, month, day);

					}());


					return today <= this.dateToEnd;
				}
			};

		

		promo.getAll(queryWhoIsActive).exec(function(err , collection){

			if (err) {

				console.log('Can not find active promotion.Error: ' + err );

				res.end();

			}else{
				res.send(collection);
				console.log(collection);
			}

		});

	},

	completed: function(req, res, next){

	// Query object to find all promotion who is active
		var queryWhoIsCompleted = {

		// Function(IIFE) who runnitng in mongodb server 
			$where: function(){

				var today = (function() {

						var newDate = new Date(),
							day = newDate.getDate(),
							month = newDate.getMonth(),
							year = newDate.getFullYear();
						return new Date(year, month, day);

					}());

				return today > this.dateToEnd;
			}
		};

		promo.getAll(queryWhoIsCompleted).exec(function(err , collection){

			if (err) {
				console.log('Can not find completed promotions.Error ' + err);
				res.end();
			}else{
				res.send(collection);
				console.log(collection);
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
		
		var today = dateTime.now();

		var addNewPromotion = req.body;

		addNewPromotion.dateOn = today;
		addNewPromotion.dateToEnd = dateTime.formatDate(req.body.dateToEnd);

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
			dateToEnd: updatePromotion.dateToEnd,
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
