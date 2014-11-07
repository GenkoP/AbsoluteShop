
var mongoose = require('mongoose'),
	encryption = require('../utilities/encryption'),
	seedUser = require('../data/seedDataUsers');

module.exports.init =  function () {

	var userSchema = mongoose.Schema({
			username: { type: String , require: '{PATH} is required ' , unique: true},
			firstName:{ type: String , require: '{PATH} is required ' },
			lastName: { type: String , require: '{PATH} is required ' },
			salt: String,
			hashPass: String,
			roles: [String]
		});

	userSchema.method({
		authenticate: function (password) {
			if (encryption.generateHashPassword(this.salt , password) === this.hashPass) {
				return true;
			} 
			else{
				return false;
			}
		}
	});

	var User = mongoose.model('User' , userSchema);

	seedUser.seedInitialUsers(User);
};


