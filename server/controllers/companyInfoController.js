var  companyInfoData = require('../dataLayout/companyInfoData');

module.exports = {

	getInfo: function(req , res){
		companyInfoData.getInfo().exec(function(err , collection){

			if (err) {

				console.log('Error in companyInfoController! Error is: ' + err );
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
	}
};