var  companyInfoData = require('../dataLayout/companyInfoData');

module.exports = {

	getInfo: function(req , res){
		companyInfoData.getInfo().exec(function(err , collection){

			if (err) {

				console.log('Error in companyInfoController getAll! Error is: ' + err );
			}
			else{

				if(collection.length === 0){
					console.log('Can not finde company information with conpanyInfoController!');
				}
				else{
					res.send(collection);
				}
			}

		});
	},
	updateInfo: function(req , res){

		console.log(req.body);

		var updatedFilds = req.body;
		
		companyInfoData.update(req.body._id , updatedFilds , function(){

			res.send({isUpdated: true});

			console.log('Information is updated!');
			
		});
	}
};