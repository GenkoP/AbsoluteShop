var Promotions =  require('mongoose').model('Promotion');

module.exports = {
	
	getAllPromotions: function(req , res){
		Promotions.find({}).exec(function(err , collection){
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
	createNewPromotion: function(req , res){
		
		var addNewPromotion = req.body;

		console.log(req.body);

		Promotions.create(addNewPromotion , function(err){

			if (err) {
				console.log('Promotion is not added error: '  + err);
			}
			else{

				console.log('Promotion is added!');

				res.send({success:true});
			}
		});

	},
};