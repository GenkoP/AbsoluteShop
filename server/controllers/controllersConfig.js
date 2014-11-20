
var usersController = require('./usersController'),
	imagesController = require('./imagesController'),
	promotionsController = require('./promotionsController'),
	companyInformation = require('./companyInfoController');

module.exports = {
	users: usersController,
	promotions: promotionsController,
	images: imagesController,
	companyInfo: companyInformation,

};