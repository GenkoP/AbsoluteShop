var date = require('../../utilities/currentDate');


module.exports.seedInitial = function(promotionModel) {

	promotionModel.find({}).exec(function(err, collection){
		if (err) {
			console.log('Can not find promotions error: ' + err );
			return;
		}

		// if(collection.length === 0){

			var currentDate = date.currentDate;

			var newDate = new Date(currentDate);

			promotionModel.create({
				productName: 'Jam Bean',
				price: '20lv',
				dateOn: newDate
			});

			promotionModel.create({
				productName: 'Lavaca',
				price: '1lv'
			});

			promotionModel.create({
				productName: 'Jack Daniels',
				price: '45lv'
			});

			console.log(newDate);

			// promotionModel.remove({} , function(){

			// 	console.log('Data is deleted!');
			// });

		// }

	});

	

};