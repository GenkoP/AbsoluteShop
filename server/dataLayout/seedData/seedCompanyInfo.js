module.exports.seedInitial = function (companyInfoModel){

	companyInfoModel.find({}).exec(function(err , collection){

		if(err){

			console.log('Con not fid company information! seedCompanyInfo.js . Error: ' + err );
		}
		else{
			if (collection.length === 0) {

				companyInfoModel.create({
					dompanyArea: 'Cigarets and alcohol',
					description: 'Some description on this shoop . What is product and more ....',
					address: 'Varna street some street 50',
					phoneNumber: '089-88-33-555',
					email: 'babameca@some.com'
				});

				console.log('Company information is added');
			}
		}
	});

};