var CompanyInfoModel = require('mongoose').model('CompanyInfo');

module.exports = {

	getInfo: function(){
		return CompanyInfoModel.find({});
	}

};