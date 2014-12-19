module.exports.seedInitial = function(promotionModel) {

	promotionModel.find({}).exec(function(err, collection){
		if (err) {
			console.log('Can not find promotions error: ' + err );
			return;
		}

		 if(collection.length === 0){

			promotionModel.create({
				productName: 'Jam Bean',
				price: '20lv',
			});

			promotionModel.create({
				productName: 'Lavaca',
				price: '1lv'
			});

			promotionModel.create({
				productName: 'Jack Daniels',
				price: '45lv'
			});

			console.log("Promotions is created!");


		 }

	});

	

};