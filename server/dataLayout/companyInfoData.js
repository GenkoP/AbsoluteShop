var CompanyInfoModel = require('mongoose').model('CompanyInfo');

module.exports = {

	getInfo: function(){
		return CompanyInfoModel.find({});
	},
	update: function(id , updatedFilds , callback){

		CompanyInfoModel.update(id , updatedFilds , callback);

	}

};
