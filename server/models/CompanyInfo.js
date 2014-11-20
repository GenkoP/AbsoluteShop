var mongoose = require('mongoose'),
	companyInfo = require('../dataLayout/seedData/seedCompanyInfo');


module.exports.init = function () {
	
	var companyInfoSchema = mongoose.Schema({

		dompanyArea: String,
		description: String,
		address: String,
		phoneNumber: String,
		email: String

	});

	var InfoModel = mongoose.model('CompanyInfo' , companyInfoSchema);

	companyInfo.seedInitial(InfoModel);

};